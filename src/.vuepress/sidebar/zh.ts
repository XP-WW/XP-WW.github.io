import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "博文",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
  ],
});