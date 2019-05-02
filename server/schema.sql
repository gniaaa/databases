CREATE DATABASE chat;

USE chat;

CREATE TABLE usernames (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username TEXT
);

CREATE TABLE roomnames (
  id INT AUTO_INCREMENT PRIMARY KEY,
  roomname TEXT
);

CREATE TABLE messages (
  object_id CHAR NOT NULL,
  username INT,
  roomname INT,
  text TEXT,
  created_at DATETIME,
  
  PRIMARY KEY (object_id),
  
  FOREIGN KEY (username)
    REFERENCES usernames(id)
    ON DELETE CASCADE,
  
  FOREIGN KEY (roomname)
    REFERENCES roomnames(id)
    ON DELETE CASCADE
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

