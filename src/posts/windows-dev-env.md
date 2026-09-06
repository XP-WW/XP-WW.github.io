---
title: Setting Up a Windows Dev Environment (Node.js / Maven / Git)
date: 2026-09-07
category: Tech
tag:
  - Node.js
  - Maven
  - Git
  - Setup
cover: /assets/images/cover3.jpg
---

# Setting Up a Windows Dev Environment

Notes on setting up a Windows dev environment from scratch.

## Node.js with nvm-windows

1. Download 
vm-noinstall.zip and extract to D:\env\nvm
2. Create settings.txt:

`	ext
root: D:\env\nvm
path: D:\env\nodejs
arch: 64
proxy: none
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
`

3. Set NVM_HOME and NVM_SYMLINK system env vars

Install Node.js:

`ash
nvm install 22
nvm use 22
node -v
`

## Maven with Aliyun Mirror

`xml
<mirror>
  <id>aliyunmaven</id>
  <mirrorOf>central</mirrorOf>
  <url>https://maven.aliyun.com/repository/public</url>
</mirror>
`

> Note: On Windows the system PATH must be REG_EXPAND_SZ type for %MAVEN_HOME% to expand.

## Git with SSH

`ash
ssh-keygen -t ed25519 -C "your@email.com"
`

Add the public key to GitHub → Settings → SSH and GPG keys, then test:

`ash
ssh -T git@github.com
`

## Summary

- nvm for managing multiple Node.js versions
- Mirrors for fast downloads in China
- SSH for password-free pushes and one-command deployment