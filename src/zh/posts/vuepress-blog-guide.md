---
title: 从零搭建 VuePress 博客并部署到 GitHub Pages
date: 2026-09-06
category: 技术
tag:
  - VuePress
  - GitHub
  - 部署
sticky: 1
cover: /assets/images/cover1.jpg
---

# 从零搭建 VuePress 博客并部署到 GitHub Pages

最近用 VuePress 搭建了自己的博客，记录一下完整流程，希望能帮到同样想建博客的朋友。

## 项目初始化

VuePress 2 的初始化很简单，直接安装依赖即可：

`ash
npm install -D vuepress@2.0.0-rc.30 vuepress-theme-hope
`

我使用的主题是 uepress-theme-hope，功能非常丰富，内置了博客插件、SEO、Sitemap、RSS 等常用能力。

## 目录结构

`	ext
src/
├── README.md          # 首页
├── intro.md           # 关于页
├── posts/             # 文章目录
└── .vuepress/
    ├── config.ts      # 全局配置
    ├── theme.ts       # 主题配置
    └── public/        # 静态资源
`

## 部署到 GitHub Pages

### 1. 配置 base 路径

如果使用项目页（用户名.github.io/仓库名）需要设置 base，使用用户主页（用户名.github.io）则保持 / 即可。

### 2. 编写部署脚本

我用 PowerShell 写了一个部署脚本，实现「打包 → 提交 → 推送」一条龙：

`powershell
npm run docs:build          # 构建
cd src/.vuepress/dist       # 进入构建产物
git init && git add -A
git commit -m "deploy"
git push -f origin gh-pages # 推送到 gh-pages 分支
`

### 3. GitHub Pages 设置

仓库 Settings → Pages → Source 选择 gh-pages 分支，保存后等待部署完成。

## 自定义域名

如果绑定了自己的域名，有两个坑要注意：

1. 在 GitHub Pages 设置里填写 Custom domain
2. 在 public 目录下创建 CNAME 文件（内容为你的域名），否则每次部署后域名配置会被覆盖

我的博客部署在 [blog.xpww.cn](https://blog.xpww.cn)，使用的就是这套流程。

## 小结

VuePress + theme-hope 是搭建技术博客的绝佳组合，开箱即用、文档完善，配合 GitHub Pages 完全免费。有任何问题欢迎留言交流。