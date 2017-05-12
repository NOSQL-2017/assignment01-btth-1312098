FROM node:boron

#Create app directory
RUN mkdir -p /usr/src/BTTH/serverNeo4j
WORKDIR /usr/src/BTTH/serverNeo4j


# Install app dependencies
COPY package.json /usr/src/BTTH/serverNeo4j
RUN npm install

# Bundle app source
COPY . /usr/src/BTTH/serverNeo4j

EXPOSE 8083
CMD  npm start