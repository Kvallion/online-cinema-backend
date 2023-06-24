FROM node:18.14-alpine

WORKDIR /backend

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 4200

VOLUME [ "/uploads" ]

RUN yarn build

CMD ["node", "dist/main"]

