
export default {
  title: 'Acri-doc',
  base: '/acri-doc/',
  head: [
    ['link', { rel: 'icon', href: '/acri-doc/logo.ico' }]
  ],
  lastUpdated: true,
  themeConfig: {
    returnToTopLabel: '返回顶部',
    outline: {
      level: "deep",
      label: "目录", // 右侧大纲标题文本配置
    },
    socialLinks: [{ icon: 'github', link: "https://github.com" }],
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },
    lastUpdatedText: '上次更新',
    footer: {
      message: 'Released 1.3.0 ',
      copyright: 'Copyright © 2023 Acri'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/', activeMatch: '/guide' }
      // ,{
      //   text: '下拉选择框',
      //   items: [
      //     { text: '', link: '/', activeMatch: '/guide' },
      //     { text: '选项2', link: 'http://www.baidu.com' }
      //   ]
      // }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '文档', link: '/guide/' },
            { text: 'AOP切面', link: '/guide/aop' },
            { text: '版本记录', link: '/guide/version' },
            { text: '联系方式', link: '/guide/contact' }
          ]
        }
      ]
    },
    docFooter: { prev: '上一篇', next: '下一篇' }
  },
  markdown: {
    lineNumbers: true // 显示行号
  }
};
