//https://github.com/vuejs/vitepress/tree/master/docs
module.exports = {
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: 'Hello VitePress',
  description: 'Just playing around.',
  // deploy site at https://username.github.io/repo/，default: '/'
  // base: '/repo',
  lang: 'zh-CN',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/logo.png',
    docsDir: 'docs',
    // editLinks: true,
    // editLinkText: 'Edit this page on GitHub',

    lastUpdated: 'Last Updated',
    displayAllHeaders: true, // Default: false
    activeHeaderLinks: false, // Default: true
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/index' },
      {
        text: 'External',
        link: 'https://github.com/vuejs/vitepress',
        target: '_self',
        rel: false,
      },
    ],
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/': getGuideSidebar(),
    },
  },
};

function getGuideSidebar() {
  return [
    {
      text: 'Guide',
      children: [{ text: 'Getting Started', link: '/guide/index' }],
    },
  ];
}
