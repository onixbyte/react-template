FROM node:20-alpine as builder
WORKDIR /app
COPY . .
RUN corepack enable pnpm
RUN pnpm install
RUN pnpm build

FROM nginx:1.27 as runner
COPY --from=builder /app/dist/ /usr/share/nginx/html/
