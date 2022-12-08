FROM node:16.18-alpine3.15

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "yarn", "dev" ]
