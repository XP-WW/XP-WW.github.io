import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "鍗氬婕旂ず",
      description: "vuepress-theme-hope 鐨勫崥瀹㈡紨绀?,
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

