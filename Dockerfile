FROM node:20

RUN npm install pnpm

RUN pnpm install

ENV PORT=8080

CMD [ "pnpm", "dev" ]