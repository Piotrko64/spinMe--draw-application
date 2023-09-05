FROM node:18

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4000

CMD [ "npm", "run", "dev" ]