import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Suhe's Blog",
      description: "Suhe's personal blog",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "苏禾的博客",
      description: "苏禾的个人博客",
    },
  },

  theme,
});