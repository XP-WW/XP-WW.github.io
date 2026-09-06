---
title: Windows 开发环境搭建全记录（Node.js / Maven / Git）
date: 2026-09-07
category: 技术
tag:
  - Node.js
  - Maven
  - Git
  - 环境搭建
cover: /assets/images/cover3.jpg
---

# Windows 开发环境搭建全记录

换新电脑后重新配置开发环境，把过程记录下来，方便以后查阅。

## Node.js：使用 nvm 管理多版本

Windows 下推荐使用 
vm-windows 管理 Node.js 版本。

1. 下载 
vm-noinstall.zip 解压到 D:\env\nvm
2. 创建 settings.txt 配置安装目录和镜像：

`	ext
root: D:\env\nvm
path: D:\env\nodejs
arch: 64
proxy: none
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
`

3. 配置系统环境变量 NVM_HOME 和 NVM_SYMLINK，加入 PATH

安装 Node.js：

`ash
nvm install 22
nvm use 22
node -v
`

npm 全局路径也可以改到自定义目录（避免占满 C 盘）：

`	ext
# ~/.npmrc
prefix=D:\env\node\npm_global
cache=D:\env\node\npm_cache
registry=https://registry.npmmirror.com/
`

## Maven：配置国内镜像加速

Maven 下载依赖很慢，配置阿里云镜像后速度快很多：

`xml
<mirror>
  <id>aliyunmaven</id>
  <mirrorOf>central</mirrorOf>
  <url>https://maven.aliyun.com/repository/public</url>
</mirror>
`

配置系统环境变量 MAVEN_HOME 并把 %MAVEN_HOME%\bin 加入 PATH。

> 小坑：Windows 系统 Path 必须是 REG_EXPAND_SZ 类型，%MAVEN_HOME% 才会被正确展开。

## Git：SSH 免密推送

1. 生成密钥：

`ash
ssh-keygen -t ed25519 -C "your@email.com"
`

2. 把公钥添加到 GitHub → Settings → SSH and GPG keys
3. 测试连接：

`ash
ssh -T git@github.com
`

## 小结

- nvm 管理 Node.js 多版本，随时切换
- 国内镜像解决下载慢问题
- SSH 免密推送，配合 
pm run deploy 实现一键部署