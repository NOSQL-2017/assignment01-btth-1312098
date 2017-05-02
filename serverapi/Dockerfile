FROM node:boron

#Create app directory
RUN mkdir -p /usr/src/BTTH/serverapi
WORKDIR /usr/src/BTTH/serverapi


# Install app dependencies
COPY package.json /usr/src/BTTH/serverapiTH
RUN npm install

# Bundle app source
COPY . /usr/src/BTTH/serverapi

EXPOSE 8080
CMD  npm start