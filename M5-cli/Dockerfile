FROM node:18-alpine

WORKDIR /M5-backend

RUN npm install -g nodemon

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 4000

CMD ["node", "src/cli/cli.js -h"]