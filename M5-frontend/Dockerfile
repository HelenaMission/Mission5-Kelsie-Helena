FROM node:18-alpine

WORKDIR /M5-frontend

COPY package*.json ./

COPY . .

RUN npm ci --legacy-peer-deps

EXPOSE 3000

CMD ["npm", "start"]

