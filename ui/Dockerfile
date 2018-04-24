FROM node:9-alpine

ENV PORT=3000

# Create app directory
ADD . /code
WORKDIR /code

# Install app dependencies
COPY package.json /code
RUN npm install

# Bundle app source
COPY . /code

RUN npm run build

EXPOSE $PORT
CMD ["npm", "start"]