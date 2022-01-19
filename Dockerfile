FROM node:16 AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM node:16
WORKDIR /app
COPY --from=builder /app/dist ./dist
EXPOSE 9000
CMD ["node", "dist/server.js"]
