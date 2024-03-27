# build stage
FROM node:16.16.0

#RUN apk add g++ make py3-pip
ENV APP_ROOT /src

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
COPY package.json ${APP_ROOT}
ADD . ${APP_ROOT}
RUN npm config set legacy-peer-deps true
RUN npm install -g npm@9.6.2
RUN npm install nuxt
RUN yarn install
RUN yarn run build
RUN yarn run generate
CMD ["yarn", "start"]