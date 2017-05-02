FROM node:boron

#Create app directory
RUN mkdir -p /usr/src/BTTH/Client
WORKDIR /usr/src/BTTH/Client


# Install app dependencies
COPY package.json /usr/src/BTTH/Client
RUN npm install
RUN npm install -g webpack@1.12.13 
RUN npm install -g nodemon

# Bundle app source
COPY . /usr/src/BTTH/Client

EXPOSE 3000
CMD  webpack && npm start