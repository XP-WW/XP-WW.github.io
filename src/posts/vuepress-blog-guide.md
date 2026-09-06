---
title: Build a VuePress Blog and Deploy to GitHub Pages
date: 2026-09-06
category: Tech
tag:
  - VuePress
  - GitHub
  - Deployment
sticky: 1
cover: /assets/images/cover1.jpg
---

# Build a VuePress Blog and Deploy to GitHub Pages

I recently built my blog with VuePress. Here is the full workflow.

## Init the Project

VuePress 2 is easy to set up:

`ash
npm install -D vuepress@2.0.0-rc.30 vuepress-theme-hope
`

I use uepress-theme-hope which provides blog plugin, SEO, sitemap and RSS out of the box.

## Directory Structure

`	ext
src/
├── README.md          # Home page
├── intro.md           # About page
├── posts/             # Posts
└── .vuepress/
    ├── config.ts      # Global config
    ├── theme.ts       # Theme config
    └── public/        # Static assets
`

## Deploy to GitHub Pages

### 1. Set base path

Use / for user pages (username.github.io), or /repo-name/ for project pages.

### 2. Write a deploy script

`powershell
npm run docs:build
cd src/.vuepress/dist
git init && git add -A
git commit -m "deploy"
git push -f origin gh-pages
`

### 3. Configure GitHub Pages

Repo Settings → Pages → Source → gh-pages branch.

## Custom Domain

Two common pitfalls:

1. Fill in the Custom domain in GitHub Pages settings
2. Put a CNAME file (containing your domain) in the public directory, otherwise every deploy will wipe the domain config

My blog is live at [blog.xpww.cn](https://blog.xpww.cn).