# VuePress blog auto deploy script
# Usage: npm run deploy

$ErrorActionPreference = "Stop"
$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$distPath = Join-Path $projectRoot "src\.vuepress\dist"
$repoUrl = "git@github.com:XP-WW/XP-WW.github.io.git"
$branch = "gh-pages"

Write-Host "=== Step 1: Building VuePress blog ===" -ForegroundColor Cyan
Set-Location $projectRoot
npm run docs:build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed, deploy aborted" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $distPath)) {
    Write-Host "Build output not found: $distPath" -ForegroundColor Red
    exit 1
}

Write-Host "`n=== Step 2: Init git in dist directory ===" -ForegroundColor Cyan
Set-Location $distPath
git init
git checkout -b $branch
git add -A
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "deploy: $timestamp"

Write-Host "`n=== Step 3: Force push to GitHub $branch branch ===" -ForegroundColor Cyan
git remote add origin $repoUrl
git push -f origin $branch
if ($LASTEXITCODE -ne 0) {
    Write-Host "Push failed, please check GitHub authentication" -ForegroundColor Red
    exit 1
}

Set-Location $projectRoot
Write-Host "`n=== Deploy completed! ===" -ForegroundColor Green
Write-Host "Blog URL: https://XP-WW.github.io/blog/" -ForegroundColor Green