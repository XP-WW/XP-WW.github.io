import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://blog.xpww.cn",

  author: {
    name: "苏禾",
    url: "https://github.com/XP-WW",
  },

  logo: "/logo.svg",

  repo: "XP-WW/XP-WW.github.io",

  docsDir: "src",

  blog: {
    intro: "/intro.html",
    medias: {
      GitHub: "https://github.com/XP-WW",
      Gmail: "mailto:xp0920ww@163.com",
      Email: "mailto:xp0920ww@163.com",
    },
  },

  locales: {
    "/": {
      navbar: enNavbar,
      sidebar: enSidebar,
      footer: "Suhe's Blog",
      displayFooter: true,
      blog: {
        description: "A FrontEnd & BackEnd programmer",
        intro: "/intro.html",
      },
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
    "/zh/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer: "苏禾的博客",
      displayFooter: true,
      blog: {
        description: "一名热爱技术的前后端开发者",
        intro: "/zh/intro.html",
      },
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {},

  plugins: {
    blog: true,

    feed: {
      hostname: "https://blog.xpww.cn",
      atom: true,
      json: true,
      rss: true,
      count: 10,
    },

    // 评论系统：启用前需部署 Waline 服务端，然后填写 serverURL 并取消注释
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://your-waline-server.example.com",
    // },

    icon: {
      prefix: "fa6-solid:",
    },
  },
});