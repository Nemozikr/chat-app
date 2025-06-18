FROM node:alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.jsom pnpm-lock.yaml* ./

RUN pnpm install

COPY . .

WORKDIR /app/chat-client

ENV PORT=5000

EXPOSE 5000

CMD [ "pnpm", "dev" ]