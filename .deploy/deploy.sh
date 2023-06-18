cd ~/my-blog-project
npm run build:prod

rm -r ~/../var/www/my-blog-project/html
mv ~/my-blog-project/build ~/../var/www/my-blog-project/html
