FROM node:12.6

WORKDIR /app

COPY . .

RUN npm install

CMD ["node", "app.js"]