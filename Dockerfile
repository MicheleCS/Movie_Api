FROM node:16.13.1

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY .env ./.env

COPY . .

RUN npm run build
RUN npm run m:run

EXPOSE 3000
CMD ["npm", "run", "start:prod"]