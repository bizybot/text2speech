FROM resin/rpi-nodejs
MAINTAINER Yogesh Gaikwad <bizybot@gmail.com>

COPY . /src
RUN cd /src; npm install

EXPOSE 8080
CMD ["node", "/src/server.js"]
