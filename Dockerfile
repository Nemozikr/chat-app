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

# ----------Production Build Client ----------
FROM node:alpine AS build-client

WORKDIR /usr/app/chat-client
COPY chat-client ./
COPY package.json pnpm-lock.yaml* /usr/app/
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build
    
# ---------- Final Production Container ----------
FROM node:alpine
    
WORKDIR /usr/app
    
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --prod
    
COPY server ./server
COPY --from=build-client /usr/app/chat-client/dist ./chat-client/dist
    
EXPOSE 5000
CMD ["node", "server/index.js"]
    