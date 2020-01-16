FROM node:8.10.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g @angular/cli@1.6.0
COPY . /usr/src/app
CMD ng serve --host 0.0.0.0 --port 4200
#CMD ["http-server","dist/angular-keep-level-3-assignment"]