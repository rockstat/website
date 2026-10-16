FROM node:24-alpine AS build

WORKDIR /usr/src
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
ENV EXPORT=1 MAIN=1
RUN pnpm build

FROM nginx:alpine
COPY --from=build /usr/src/out /usr/share/nginx/html
