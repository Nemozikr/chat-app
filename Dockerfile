# ---------- Base Stage ----------
FROM node:alpine AS base

WORKDIR /usr/app
    
RUN npm install -g pnpm
    
COPY package.json pnpm-lock.yaml* ./

# ---------- Development Stage ----------
FROM base AS dev

RUN pnpm install
    
COPY . .
    
# Express
EXPOSE 5000     
# Vite
EXPOSE 5173
    
ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=true
    
CMD ["pnpm", "run", "dev"]

# ---------Production Build & Optimise Stage----------
FROM base AS build-client

WORKDIR /usr/app/chat-client

COPY chat-client ./

COPY package.json pnpm-lock.yaml* /usr/app/

RUN pnpm install

RUN pnpm run build

# ------------Production Final Stage-------------------
FROM node:alpine AS prod

WORKDIR /usr/app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml* ./

RUN pnpm install --prod

COPY --from=built-client /usr/app/chat-client/dist ./chat-client/dist

COPY server ./server

EXPOSE 5000

ENV NODE_ENV=production

CMD [ "node", "server/index.js" ]