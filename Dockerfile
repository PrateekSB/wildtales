FROM node:13.0.1-alpine

WORKDIR /usr/app

COPY package.json /usr/app/
RUN  npm install 

COPY . .
