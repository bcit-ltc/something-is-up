FROM node:20-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

## Release
FROM nginxinc/nginx-unprivileged:alpine3.22-perl

LABEL maintainer=courseproduction@bcit.ca
LABEL org.opencontainers.image.source="https://github.com/bcit-ltc/something-is-up"
LABEL org.opencontainers.image.description="An interaction using the Something is Up graphic and steps to help the user learn about the framework."

COPY --from=build /public /usr/share/nginx/html/
COPY conf.d/default.conf /etc/nginx/conf.d/default.conf
