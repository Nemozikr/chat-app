FROM node:20

RUN pnpm install

ENV PORT=8080

CMD [ "pnpm", "dev" ]