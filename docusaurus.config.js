// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'stickyFingers',
  tagline: 'Asking hard questions... finally',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sticky-fingers.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Isaac-Tait', // Usually your GitHub org/user name.
  projectName: 'stickyFingers', // Usually your repo name.

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
            'https://github.com/Isaac-Tait/stickyFingers/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Isaac-Tait/stickyFingers/blob/main/',
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
        title: 'stickyFingers',
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
                href: 'https://www.threads.net/@stickyfingers1415',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/stickyfingers1415/',
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
        copyright: `©${new Date().getFullYear()} Built with ❤️ by <a href='https://mountaintopcoding.dev' target='__blank'>mountainTopCoding(<span role="img" aria-label="mountain with snow-cap">&#127956;</span>);</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
