FROM node:alpine
WORKDIR /app
# Install pnpm & deps for just the server
RUN npm install -g pnpm
COPY server/package.json  ./
RUN pnpm install
COPY server ./
EXPOSE 5000
CMD ["pnpm", "run", "dev"]
