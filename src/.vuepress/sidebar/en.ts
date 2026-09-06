import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Posts",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
  ],
});