FROM node:13.12.0

WORKDIR /usr/src/devWebSocialMedia

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm","run","start"]
