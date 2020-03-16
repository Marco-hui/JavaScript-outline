var nav = require('./nav.js')
var { ExpandNav, EcosystemNav } = nav

var utils = require('./utils.js')
var { genNav, getComponentSidebar, deepClone } = utils

module.exports = {
  title: 'JavaScript-outline',
  description: 'An overview of javascript',
  base: '/JavaScript-outline/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  port: 9090,
  locales: {
    '/': {
      lang: 'zh-CN',
      description: 'JavaScript 知识概要'
    }
  },
  themeConfig: {
    // logo: '/home.png',
    repo: 'Marco-hui/JavaScript-outline',
    editLinks: true,
    sidebarDepth: 2,
    displayAllHeaders: false,
    smoothScroll: true,
    locales: {
      '/': {
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: 'JavaScript',
            link: '/guide/'
          },
          {
            text: '拓展',
            items: genNav(deepClone(ExpandNav))
          },
          {
            text: '生态系统',
            items: genNav(deepClone(EcosystemNav))
          },
          /*{
            text: '中文站点(gitee)',
            link: 'https://Marco-hui.gitee.io/JavaScript-outline/'
          }*/
        ],
        sidebar: {
          '/guide/': [
            {
              title: '基础',
              collapsable: true,
              children: genEssentialsSidebar()
            },
            {
              title: '进阶',
              collapsable: true,
              children: genAdvancedSidebar()
            },
            /*{
              title: '练习解答',
              collapsable: false,
              children: [
                '/guide/other/faq.md'
              ]
            }*/
          ],
          '/expand/': [
            {
              title: '技能',
              children: getComponentSidebar(
                deepClone(ExpandNav)
              ),
            },
            {
              title: '脚本',
              collapsable: false,
              children: [
                '/expand/script/function.md',
                '/expand/script/plug-in.md'
              ]
            }
          ]
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  plugins: ['@vuepress/back-to-top'],
  ga: 'UA-109340118-1'
}

function genEssentialsSidebar() {
  return mapArr = [
    '/guide/',
    '/guide/essentials/statement.md',
    '/guide/essentials/function.md',
    '/guide/essentials/array.md',
    '/guide/essentials/object.md',
    '/guide/essentials/string.md',
    '/guide/essentials/math.md',
    '/guide/essentials/date.md',
    '/guide/essentials/bom.md',
    '/guide/essentials/dom.md',
    '/guide/essentials/event.md',
    '/guide/essentials/cookie.md',
    '/guide/essentials/regexp.md',
  ]
}

function genAdvancedSidebar() {
  return mapArr = [
    '/guide/advanced/es5.md',
    '/guide/advanced/es6.md',
    '/guide/advanced/animation.md',
    '/guide/advanced/oop.md',
    '/guide/advanced/ajax.md',
    '/guide/advanced/prototype-chain.md',
    '/guide/advanced/inherit.md',
    '/guide/advanced/closure.md',
    '/guide/advanced/sass.md',
    '/guide/advanced/module.md',
  ]
}
