const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "毛泽东诗词库",
  description: "Collection of Mao's Poetry",

  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
    },
  },

  themeConfig: {
    logo: "/logo-small-round.png",
    hostname: "http://mao.codeword.info",

    author: "CDN",
    //repo: "https://",

    feed: false,

    nav: [
      { text: "主页", link: "/", icon: "home" },
      {
        text: "文库",
        link: "/contents/",
        icon: "note",
      },
      { text: "日志", link: "/blog/", icon: "edit" },
    ],

    //sidebarDepth: 3,
    sidebar: {
      "/contents/A/": [
        {
          title: "返回上一级",
          icon: "icon-return",
          path: "/contents/",
          //prefix: "",
          children: [],
        },
        {
          title: "本节目录",
          path: "/contents/A/",
          children: [],
        },
        {
          title: "古体诗词",
          //icon: "",
          //path: "/contents/A/",
          prefix: "/contents/A/",
          collapsable: true,
          //sidebarDepth: 2,
          children: [
            "A1","A2","A3","A4","A5",
            "A6","A7","A8","A9","A10",
            "A11","A12","A13","A14","A15",
            "A16","A17","A18","A19","A20",
            "A21","A22","A23","A24","A25",
            "A26","A27","A28","A29","A30",
            "A31","A32","A33","A34","A35",
            "A36","A37","A38","A39","A40",
            "A41","A42","A43","A44","A45",
            "A46","A47","A48","A49","A50",
            "A51","A52","A53","A54","A55",
            "A56","A57","A58","A59","A60",
            "A61","A62","A63","A64","A65",
            "A66","A67","A68","A69","A70",
            "A71","A72","A73","A74","A75",
            "A76",
          ],
        },
        "/contents/B/",
        "/contents/C/",
        "/contents/D/",
        "/contents/E/",
      ],

      "/contents/B/": [
        {
          title: "返回上一级",
          icon: "icon-return",
          path: "/contents/",
          //prefix: "",
          children: [],
        },
        {
          title: "本节目录",
          path: "/contents/B/",
          children: [],
        },
        "/contents/A/",
        {
          title: "无据诗词、联句、残句",
          //icon: "",
          //path: "/contents/A/",
          prefix: "/contents/B/",
          collapsable: true,
          //sidebarDepth: 2,
          children: [
            "B1","B2","B3","B4","B5",
            "B6","B7","B8","B9","B10",
            "B11","B12","B13","B14","B15",
            "B16",
          ],
        },
        "/contents/C/",
        "/contents/D/",
        "/contents/E/",
      ],

      "/contents/C/": [
        {
          title: "返回上一级",
          icon: "icon-return",
          path: "/contents/",
          //prefix: "",
          children: [],
        },
        {
          title: "本节目录",
          path: "/contents/C/",
          children: [],
        },
        "/contents/A/",
        "/contents/B/",
        {
          title: "韵语",
          //icon: "",
          //path: "/contents/A/",
          prefix: "/contents/C/",
          collapsable: true,
          //sidebarDepth: 2,
          children: [
            "C1","C2","C3","C4","C5",
            "C6","C7","C8","C9","C10",
            "C11","C12","C13","C14","C15",
            "C16","C17","C18","C19","C20",
          ],
        },
        "/contents/D/",
        "/contents/E/",
      ],

      "/contents/D/": [
        {
          title: "返回上一级",
          icon: "icon-return",
          path: "/contents/",
          //prefix: "",
          children: [],
        },
        {
          title: "本节目录",
          path: "/contents/D/",
          children: [],
        },
        "/contents/A/",
        "/contents/B/",
        "/contents/C/",
        {
          title: "改诗",
          //icon: "",
          //path: "/contents/A/",
          prefix: "/contents/D/",
          collapsable: true,
          //sidebarDepth: 2,
          children: [
            "D1","D2","D3","D4","D5",
            "D6","D7","D8","D9","D10",
            "D11","D12","D13","D14","D15",
            "D16","D17","D18","D19","D20",
            "D21","D22","D23","D24","D25",
            "D26","D27","D28","D29","D30",
            "D31",
          ],
        },
        "/contents/E/",
      ],

      "/contents/E/": [
        {
          title: "返回上一级",
          icon: "icon-return",
          path: "/contents/",
          //prefix: "",
          children: [],
        },
        {
          title: "本节目录",
          path: "/contents/E/",
          children: [],
        },
        "/contents/A/",
        "/contents/B/",
        "/contents/C/",
        "/contents/D/",
        {
          title: "楹联",
          //icon: "",
          //path: "/contents/A/",
          prefix: "/contents/E/",
          collapsable: true,
          sidebarDepth: 3,
          children: [
            {
              title: "尚在整理中",
              path: "",
              collapsable: false,
              //prefix: "",
              children: [],
            },
            /*
            "E1","E2","E3","E4","E5","E6","E7","E8","E9","E10",
            "E11","E12","E13","E14","E15","E16","E17","E18","E19","E20",
            "E21","E22","E23","E24","E25","E26","E27","E28","E29","E30",
            "E31","E32","E33","E34","E35","E36","E37","E38","E39","E40",
            "E41","E42","E43","E44","E45","E46","E47","E48","E49","E50",
            "E51","E52","E53","E54","E55","E56","E57","E58","E59","E60",
            "E61","E62","E63","E64","E65","E66","E67","E68","E69","E70",
            "E71","E72","E73","E74","E75","E76","E77","E78","E79","E80",
            "E81","E82","E83","E84","E85","E86","E87","E88","E89","E90",
            "E91","E92","E93","E94","E95","E96","E97","E98","E99","E100",
            "E101","E102","E103","E104","E105","E106","E107","E108","E109","E110",
            "E111","E112","E113","E114","E115","E116","E117","E118","E119","E120",
            "E121","E122","E123","E124","E125","E126","E127","E128","E129","E130",
            "E131","E132","E133","E134","E135","E136","E137","E138","E139","E140",
            "E141","E142","E143","E144","E145","E146","E147","E148","E149","E150",
            "E151","E152","E153","E154","E155","E156","E157","E158","E159","E160",
            "E161","E162","E163","E164","E165","E166","E167","E168","E169","E170",
            "E171",
            */
          ],
        },
      ],

      // fallback
      "/": [
        "",
        {
          title: "开始阅读",
          //icon: "",
          path: "/contents/",
          prefix: "/contents/",
          collapsable: false,
          //sidebarDepth: 2,
          children: [
            "A/",
            "B/",
            "C/",
            "D/",
            "E/",
          ],
        },
        {
          title: "项目日志",
          icon: "icon-edit",
          path: "/blog/",
          collapsable: false,
          //prefix: "",
          children: ["about", "reference", "progress", "log"],
        }
      ],
    },

    blog: {
      avatar: "/avatar.jpg",
      name: "CDN",
      intro: "/about/",
      sidebarDisplay: "none",
      timeline: "暂未启用时间线",
      links: {
        QQ: "2452272195",
        Email: "cardinal@codeword.info",
        Github: "https://github.com/CDN18",
      },
    },

    footer: {
      display: true,
      content: "For Educational Purposes Only | Copyright © 2021 - Present | Made by CDN.",
    },

    comment: {
      type: "waline",
      serverURL: "http://wgcomment.codeword.info",
    },

    /*
    copyright: {
      status: "global",
    },
    */

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/logo-small-round-256x.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
