FROM node:alpine

WORKDIR /usr/app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml* ./

RUN pnpm install

COPY ./ /usr/app

RUN pnpm prune --production

ENV PORT=5000

EXPOSE 5000

CMD [ "pnpm", "run", "dev" ]