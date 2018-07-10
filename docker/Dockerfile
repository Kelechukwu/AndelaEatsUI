FROM node:carbon
WORKDIR /app
COPY . .
WORKDIR /app/client
RUN npm install
RUN npm run build:production

FROM node:carbon
LABEL MAINTAINER="maryanne.nganga@andela.com"
LABEL application="FeedAndela"
ENV TERM=xterm-256color
RUN yarn global add serve@9.2.0
WORKDIR /app
COPY --from=0 /app/client/dist .
CMD ["serve", "-p", "8080" ]
