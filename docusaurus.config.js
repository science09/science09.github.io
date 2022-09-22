// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '彼岸_未来',
  tagline: '生活需要一点思考',
  url: 'https://science09.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'science09', // Usually your GitHub org/user name.
  projectName: 'science09.github.io', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          editUrl: 'https://github.com/science09/science09.github.io/tree/main/',
        },
        blog: {
          blogTitle: '博客',
          blogSidebarTitle: '全部博文',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          editUrl:
            'https://github.com/science09/science09.github.io/tree/main/',
          postsPerPage: 5
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true
      },
      navbar: {
        title: '彼岸_未来',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
          style: { borderRadius: '70%' }
        },
        items: [
          {
            to: '/blog',
            label: '个人笔记',
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'notes/notes-intro',
            position: 'left',
            label: '技术文摘',
          },
          {
            href: 'https://github.com/science09',
            position: 'right',
            label: 'GitHub',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '本站',
            items: [
              {
                label: '个人笔记',
                to: 'blog',
              },
              {
                label: '技术文摘',
                to: 'docs/notes-intro',
              },
            ],
          },
          {
            title: '我的',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/science09',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '...',
                to: '/'
              }
            ]
          }
        ],
        copyright: `版权所有 © 2022  此网站使用 Docusaurus 构建。`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      docs: {
        sidebar: {
          hideable: true
        }
      }
    }),
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'second-blog',
        blogSidebarTitle: '近期随笔',
        blogTitle: '记录生活',
        routeBasePath: 'essay',
        path: './essay',
      },
    ]
  ],
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
};

module.exports = config;
