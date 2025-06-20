# 1. Base image with Node 22 and pnpm
FROM node:22-alpine AS base

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus

# 2. Install dependencies
FROM base AS prod
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus
## Copy over the source code.
COPY . /opt/docusaurus/
## Install dependencies with `--frozen-lockfile` to ensure reproducibility.
RUN pnpm install --frozen-lockfile
## Build the static site.
RUN pnpm build

# 4. Final runtime image
FROM prod AS serve
## Expose the port that Docusaurus will run on.
EXPOSE 3000
## Run the production server.
CMD ["pnpm", "serve", "--", "--host", "0.0.0.0", "--no-open"]