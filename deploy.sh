#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# deploy that sunofagun
git push -f git@github.com:JasonFritsche/news-from-the-wormhole.git master:gh-pages

cd -