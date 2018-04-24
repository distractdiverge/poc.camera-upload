FROM node:9-alpine

ENV HOST=0.0.0.0
ENV PORT=5000

# Create app directory
RUN mkdir -p /code
WORKDIR /code

# Install app dependencies
COPY package*.json /code/
RUN npm install

# Bundle app source
COPY . /code

EXPOSE $PORT
CMD ["npm", "start"]