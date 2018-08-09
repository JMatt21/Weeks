CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (
  id int auto_increment,
  author VARCHAR(40) not null,
  chirp VARCHAR(100) not null,
  time_created VARCHAR(20),
  PRIMARY KEY (id)
);

INSERT INTO chirps (author, chirp, time_created) VALUES ("Mr. Plinket", "fuck movies", "August, 5th, 2017");