FROM node:boron

#Create app directory
RUN mkdir -p /usr/src/BTTH/serverMongoDB
WORKDIR /usr/src/BTTH/serverMongoDB


# Install app dependencies
COPY package.json /usr/src/BTTH/serverMongoDB
RUN npm install

# Bundle app source
COPY . /usr/src/BTTH/serverMongoDB

EXPOSE 8081
CMD  npm start