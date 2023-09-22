FROM node:18.15

WORKDIR /usr/src

COPY . .

RUN npm i

RUN npm run build

CMD ["bash", "-c","npm start"]