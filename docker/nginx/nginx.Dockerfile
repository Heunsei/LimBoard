FROM nginx:stable-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY ../docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf