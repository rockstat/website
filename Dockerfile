FROM mhart/alpine-node:10

WORKDIR /usr/src
COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build && yarn build:toc && yarn export -o /public
