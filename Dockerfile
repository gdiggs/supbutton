FROM ubuntu:14.04

RUN apt-get update && apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup | bash -

RUN apt-get install -y git build-essential nodejs python libpcap-dev

RUN npm install node-dash-button

WORKDIR /usr/src/app

COPY app/package.json /usr/src/app/

RUN npm install

COPY app /usr/src/app

CMD ["/usr/src/app/sup.js"]
