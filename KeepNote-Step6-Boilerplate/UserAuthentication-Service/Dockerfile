FROM java:8-jre
Expose 8089
COPY ./target/UserAuthentication-Service-0.0.1-SNAPSHOT.jar /usr/src/UserAuthentication-Service-0.0.1-SNAPSHOT.jar
WORKDIR /usr/src
ENTRYPOINT ["java","-jar","UserAuthentication-Service-0.0.1-SNAPSHOT.jar"]