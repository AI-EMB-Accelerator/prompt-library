import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Prompt Library',
  tagline: 'A collection of prompts for AI models',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ai-emb-accelerator.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/prompt-library/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AI-EMB-Accelerator', // Usually your GitHub org/user name.
  projectName: 'prompt-library', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Prompt Library',
      logo: {
        alt: 'Prompt Library Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'promptsSidebar',
          position: 'left',
          label: 'Prompts',
        },
        {
          href: 'https://github.com/AI-EMB-Accelerator/prompt-library',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Prompts',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Demos',
          items: [
            {
              label: 'Voter Registration',
              href: 'https://voter-registration-app-aegrbzdaaycgcadj.eastus2-01.azurewebsites.net/',
            },
            {
              label: 'Ballot Proofer',
              href: 'https://ballot-proofer-app-grf0dydqctfsavf5.eastus2-01.azurewebsites.net/',
            },
            {
              label: 'Log Summarizer',
              href: 'https://election-machine-log-app-byfnffhff3gwhqbb.canadacentral-01.azurewebsites.net/',
            }
          ],
        },
        {
          title: 'Microsoft AI',
          items:[
            {
              label: 'Azure AI Foundry',
              href: 'https://ai.azure.com',
            },
            {
              label: 'Copilot Studio',
              href: 'https://copilotstudio.microsoft.com',
            },
            {
              label: 'Power Automate',
              href: 'https://make.powerautomate.com',
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI EMB Accelerator. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
