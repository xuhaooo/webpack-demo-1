yarn build &&
git checkout gh-pages &&
rm -rf *.html *.js *.css *.jpg *.sh &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m 'update' &&
git push gitee gh-pages:master &&
git checkout -