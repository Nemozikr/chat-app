FROM node:alpine
WORKDIR /app
# Install pnpm & deps for just the client
RUN npm install -g pnpm
COPY chat-client/package.json  ./
RUN pnpm install
COPY chat-client ./
EXPOSE 8080
CMD ["pnpm", "run", "dev"]
