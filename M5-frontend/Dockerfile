FROM node:18-alpine

WORKDIR /M5-frontend

COPY package*.json ./

COPY . .

RUN npm ci

EXPOSE 3000

CMD ["npm", "start"]