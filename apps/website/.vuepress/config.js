const markdownItAttrs = require('markdown-it-attrs');
const sidebar = require('./sidebar');
const blocks = require('./blocks');
const path = require('path');

module.exports = {
  title: 'Clarity Design System',
  description: 'Clarity Design System is the premiere design system for application development.',
  head: [['link', { rel: 'shortcut icon', href: '/favicon.ico' }]],
  dest: '../../dist/website',
  themeConfig: {
    algolia: {
      apiKey: 'd3349af25a19e3824cb48e57fe88fdcb',
      indexName: 'clarity',
    },
    lastUpdated: 'Last Updated',
    search: true,
    sidebar,
  },
  markdown: {
    extendMarkdown: md => {
      // Disabling include plugin until I figure out if it casuse Vuepress to hang.
      // md.use(require('markdown-it-include'));
      md.use(markdownItAttrs);
    },
    anchor: {
      permalink: true,
      permalinkBefore: false,
      permalinkSymbol: '§',
    },
  },
  extraWatchFiles: ['.vuepress/sidebar.js', '.vuepress/blocks.js'],
  plugins: [
    'vuepress-plugin-table-of-contents',
    '@vuepress/active-header-links',
    '@vuepress/last-updated',
    'vuepress-plugin-smooth-scroll',
    [
      'vuepress-plugin-sitemap',
      {
        hostname: 'https://clarity.design',
        outFile: 'sitemap.xml',
      },
    ],
    ...blocks,
  ],
  configureWebpack: {
    resolve: {
      alias: {
        // Note: paths to dist/core/* are from website root, not .vuepress
        '@clr/core': path.resolve('../../dist/core'),
        '@clr/core/alert': path.resolve('../../dist/core/alert'),
        '@clr/core/button': path.resolve('../../dist/core/button'),
        '@clr/core/icon': path.resolve('../../dist/core/icon'),
        '@clr/core/icon-shapes': path.resolve('../../dist/core/icon-shapes'),
        '@clr/icons': path.resolve('../../dist/clr-icons/clr-icons.min.js'),
        '@clr/all-shapes': path.resolve('../../dist/clr-icons/shapes/all-shapes.min.js'),
      },
    },
  },
};
