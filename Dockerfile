FROM node:16-alpine
RUN npm install -g pnpm

RUN mkdir -p /app
WORKDIR /app
COPY . /app

RUN pnpm install
RUN pnpm build-api
