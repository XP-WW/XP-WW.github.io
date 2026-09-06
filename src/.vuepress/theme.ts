import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://XP-WW.github.io/blog",

  author: {
    name: "苏禾",
    url: "https://XP-WW.github.io/blog",
  },

  logo: "/logo.svg",

  repo: "XP-WW/blog",

  docsDir: "src",

  blog: {
    medias: {
      GitHub: "https://github.com/XP-WW",
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
        description: "A personal blog",
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
        description: "一个个人博客",
        intro: "/zh/intro.html",
      },
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  plugins: {
    blog: true,
    icon: {
      prefix: "fa6-solid:",
    },
  },
});