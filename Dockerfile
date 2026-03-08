# Указываем базовый образ
FROM node:20.19

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm","run" ,"start"]