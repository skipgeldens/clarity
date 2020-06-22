const markdownItAttrs = require('markdown-it-attrs');
const sidebar = require('./sidebar');
const blocks = require('./blocks');

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
      // permalinkSymbol: '🔗',
    },
  },
  extraWatchFiles: ['.vuepress/sidebar.js', '.vuepress/blocks.js'],
  plugins: ['vuepress-plugin-table-of-contents', '@vuepress/active-header-links', '@vuepress/last-updated', ...blocks],
};
