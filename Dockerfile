FROM node:15.11.0 as build

WORKDIR /app

COPY client/src src
COPY client/public public
COPY client/.browserslistrc client/babel.config.js client/.eslintrc.js client/package.json client/package-lock.json client/vue.config.js ./

RUN npm ci
RUN npm run build

CMD [ "npm", "run", "dev" ]

FROM node:15.11.0 as production

WORKDIR /app

COPY --from=build /app/dist ./static
COPY server/src ./src
COPY server/package-lock.json server/package.json ./

RUN npm ci --production

CMD [ "npm", "start" ]
