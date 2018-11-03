FROM mhart/alpine-node:8

WORKDIR /usr/src
COPY package.json yarn.lock ./

RUN yarn && yarn link

COPY . .

RUN yarn build && yarn export:zeit
