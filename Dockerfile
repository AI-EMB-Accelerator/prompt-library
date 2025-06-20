# 1. Base image with Node 22 and pnpm
FROM node:22-alpine AS base

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# 2. Install dependencies
FROM base AS deps

# Copy only dependency files
COPY pnpm-lock.yaml package.json ./

# Install deps with frozen lockfile
RUN pnpm install --frozen-lockfile

# 3. Build application
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY . .

RUN pnpm build

# 4. Final runtime image
FROM base AS runner

ENV NODE_ENV=production

# Only keep necessary files
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/build ./build

# If using custom server:
# COPY --from=builder /app/server.js ./server.js

EXPOSE 3000

CMD ["pnpm", "start"]