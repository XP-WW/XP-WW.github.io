# VuePress 博客自动部署脚本
# 执行: npm run deploy 或 powershell -ExecutionPolicy Bypass -File deploy.ps1

$ErrorActionPreference = "Stop"
$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$distPath = Join-Path $projectRoot "src\.vuepress\dist"
$repoUrl = "https://github.com/XP-WW/blog.git"
$branch = "gh-pages"

Write-Host "=== 1. 开始构建 VuePress 博客 ===" -ForegroundColor Cyan
Set-Location $projectRoot
npm run docs:build
if ($LASTEXITCODE -ne 0) {
    Write-Host "构建失败，终止部署" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $distPath)) {
    Write-Host "构建输出目录不存在: $distPath" -ForegroundColor Red
    exit 1
}

Write-Host "`n=== 2. 进入 dist 目录并初始化 Git ===" -ForegroundColor Cyan
Set-Location $distPath
git init
git checkout -b $branch
git add -A
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "deploy: $timestamp"

Write-Host "`n=== 3. 强制推送到 GitHub $branch 分支 ===" -ForegroundColor Cyan
git remote add origin $repoUrl
git push -f origin $branch
if ($LASTEXITCODE -ne 0) {
    Write-Host "推送失败，请检查 GitHub 认证" -ForegroundColor Red
    exit 1
}

Set-Location $projectRoot
Write-Host "`n=== 部署完成！===" -ForegroundColor Green
Write-Host "博客地址: https://XP-WW.github.io/blog/" -ForegroundColor Green
