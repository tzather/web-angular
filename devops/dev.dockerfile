FROM nginx:1.25-alpine
COPY ./nginx.conf /etc/nginx
COPY ./dist/app /usr/share/nginx/html
