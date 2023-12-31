# very very simple test image
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 8080

ENTRYPOINT ["node", "app.js"]
