


# Use an official Node runtime as a parent image
FROM node:21

LABEL authors="skywarth"

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm ci

# Bundle your app's source code inside the Docker image
COPY . .

# Make port available to the world outside this container
EXPOSE 3000

# Define the command to run your app
CMD [ "node", "./bin/www" ]