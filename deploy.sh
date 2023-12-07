#!/usr/bin/env sh

# 忽略错误
set -e
rm -rf docs/.vitepress/dist
# 构建
yarn build

# 进入待发布的目录
cd docs/.vitepress/dist

git init
git add -A
git commit -m "deploy"

git remote add origin https://gitee.com/FnTop/acri-doc.git

git push -f origin master


# 返回上次所在的目录
cd -


