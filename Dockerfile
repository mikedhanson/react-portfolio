#FROM node:10.16.0-alpine
ARG VERSION=latest

FROM node:14-alpine

RUN npm config set legacy-peer-deps true

# Set the working directory to ./app
WORKDIR /app

# Install app dependencies A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package.json ./

RUN apk add --no-cache git

# Install any needed packages
RUN npm i 

# Audit fix npm packages
RUN npm audit fix 

# Bundle app source
COPY . /app

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run app.js when the container launches
CMD ["npm", "start"]
