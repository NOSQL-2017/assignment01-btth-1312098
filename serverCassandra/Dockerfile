FROM node:boron

#Create app directory
RUN mkdir -p /usr/src/BTTH/serverCassandra
WORKDIR /usr/src/BTTH/serverCassandra


# Install app dependencies
COPY package.json /usr/src/BTTH/serverCassandra
RUN npm install

# Bundle app source
COPY . /usr/src/BTTH/serverCassandra

EXPOSE 8082
CMD  npm start