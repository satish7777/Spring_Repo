FROM java:8-jre
Expose 8082
COPY ./target/NoteService-0.0.1-SNAPSHOT.jar /usr/src/NoteService-0.0.1-SNAPSHOT.jar
WORKDIR /usr/src
ENTRYPOINT ["java","-jar","NoteService-0.0.1-SNAPSHOT.jar"]