FROM node:12-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# Pass required env variables to build process
ARG NODE_ENV
ARG BASE_URL
ARG HOST
ARG PORT
ARG API_BASE_URL
ARG API_CLIENT_ID
ARG API_CLIENT_SECRET

ENV NODE_ENV=$NODE_ENV
ENV BASE_URL=$BASE_URL
ENV HOST=$HOST
ENV PORT=$PORT
ENV API_BASE_URL=$API_BASE_URL
ENV API_CLIENT_ID=$API_CLIENT_ID
ENV API_CLIENT_SECRET=$API_CLIENT_SECRET

# copy the app, except files in .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

# expose 3000 on container
EXPOSE ${PORT}

# set app serving to permissive / assigned
ENV NUXT_HOST=${HOST}
# set app port
ENV NUXT_PORT=${PORT}

# start the app
CMD [ "npm", "start" ]