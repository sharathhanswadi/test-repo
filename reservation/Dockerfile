FROM node:10-alpine

COPY package*.json ./

RUN npm install

COPY ./src ./src

CMD node src/index.js