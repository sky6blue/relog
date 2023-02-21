FROM node:18-alpine

WORKDIR /var/www/backend

COPY package.json ./

RUN npm i

COPY .eslintrc.js nest-cli.json tsconfig.json tsconfig.build.json ./

COPY .env.docker /var/www/backend/.env

CMD [ "npm", "run", "start:all" ]
