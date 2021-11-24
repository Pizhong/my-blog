module.exports = {
  "title": "不如蛋斯",
  "description": "Record The Daily Development",
  // "dest": "public",
  "base":"/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-document",
        "items": [
          {
            "text": "utils",
            "link": "/docs/utils/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Pizhong",
            "icon": "reco-github"
          },
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/qq_42109047?spm=1019.2139.3001.5343",
            "icon": "reco-csdn"
          }
        ]
      }
    ],
    // 自动形成侧边导航
    "subSidebar": 'auto',
    "sidebarDepth": 1,
    "displayAllHeaders": false,
    "sidebar": {
      "/docs/utils/": [
        {
          title: 'Utils',
          collapsable: true,
          children: ['javascript/utilsToolFn']
        }
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      // {
      //   "title": "午后南杂",
      //   "desc": "Enjoy when you can, and endure when you must.",
      //   "email": "1156743527@qq.com",
      //   "link": "https://www.recoluan.com"
      // },
      // {
      //   "title": "vuepress-theme-reco",
      //   "desc": "A simple and beautiful vuepress Blog & Doc theme.",
      //   "avatar": "https://vuepress-theme-reco.recolua  n.com/icon_vuepress_reco.png",
      //   "link": "https://vuepress-theme-reco.recoluan.com"
      // }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Do P",
    "authorAvatar": "/avatar.jpg",
    "record": "xxxx",
    "startYear": "2021",
  },
  "markdown": {
    "lineNumbers": true
  },
  // plugins: [
  //   [
  //     'vuepress-plugin-comment',
  //     {
  //       choosen: 'valine', 
  //       // options选项中的所有参数，会传给Valine的配置
  //       options: {
  //         el: '#valine-vuepress-comment',
  //         appId: '1c6rLC7CBnPfFWTR90knE7gO-gzGzoHsz',
  //         appKey: 'emDFIauXHQk3XUNubnVhNqli'
  //       }
  //     }
  //   ]
  // ]
}