import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "博文",
    icon: "pen-to-square",
    link: "/zh/posts/",
  },
  {
    text: "关于",
    icon: "circle-info",
    link: "/zh/intro.html",
  },
]);