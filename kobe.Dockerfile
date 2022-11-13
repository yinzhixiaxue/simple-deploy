FROM node:14-alpine

WORKDIR /kobe

ADD . /kobe

RUN npm i --registry https://r.cnpmjs.org/

RUN echo yinzhixiaxue

EXPOSE 3000

CMD npm start
 