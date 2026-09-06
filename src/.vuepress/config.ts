import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { pwaPlugin } from "@vuepress/plugin-pwa";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Suhe's Blog",
      description: "Suhe's personal blog - sharing tech notes and life",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "苏禾的博客",
      description: "苏禾的个人博客 - 分享技术与生活",
    },
  },

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
  ],

  theme,

  plugins: [
    searchPlugin({
      locales: {
        "/": { placeholder: "Search" },
        "/zh/": { placeholder: "搜索" },
      },
    }),
    pwaPlugin({
      favicon: "/favicon.ico",
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      manifest: {
        name: "苏禾的博客",
        short_name: "苏禾博客",
        description: "苏禾的个人博客 - 分享技术与生活",
        lang: "zh-CN",
        theme_color: "#3eaf7c",
        background_color: "#ffffff",
        display: "standalone",
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
      },
    }),
  ],
});