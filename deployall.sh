#!/usr/bin/env sh

# 忽略错误
set -e

rm -rf .git
rm -rf docs/.vitepress/dist

git init
git add -A

git rm -r --cached ./node_modules

git commit -m "deploy"


git remote add origin https://gitee.com/FnTop/acri-doc-source.git

git push -f origin master


# 返回上次所在的目录
cd -


