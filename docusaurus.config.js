// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Exploring And Pondering',
  tagline: 'Asking hard questions... finally',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://eandp.cc',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Isaac-Tait', // Usually your GitHub org/user name.
  projectName: 'exploringAndPondering', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Isaac-Tait/exploringAndPondering/blob/main/',
        },
        blog: {
          showReadingTime: true,
          readingTime: ({
            content,
            frontMatter,
            defaultReadingTime,
          }) =>
            defaultReadingTime({
              content,
              options: { wordsPerMinute: 300 },
            }),
          editUrl:
            'https://github.com/Isaac-Tait/exploringAndPondering/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        title: 'exploringAndPondering',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Essays',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            to: 'https://reddit.com',
            label: '🏳️‍🌈',
            position: 'right',
          },
          {
            href: 'https://wormwoodsaga.com',
            label: 'Novel',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Essays',
            items: [
              {
                label: 'Long form brain dumps',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Threads',
                href: 'https://www.threads.net/@exploring_and_pondering',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/exploring_and_pondering/',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@exploring_and_pondering',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Novel',
                href: 'https://wormwoodsaga.com',
              },
            ],
          },
        ],
        copyright: `©2023 - ${new Date().getFullYear()} Built with ❤️ by <a href='https://mountaintopcoding.dev' target='__blank'>mountainTopCoding(<span role="img" aria-label="mountain with snow-cap">&#127956;</span>);</a>`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),
};

module.exports = config;
