FROM node:14-alpine

ARG version=0.0
ENV APP_VERSION=$version
ARG color
ENV COLOR=$color

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install && npm install -g pm2
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
ENTRYPOINT [ "pm2-docker", "server.js" ]
