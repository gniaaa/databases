
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username TEXT
);

CREATE TABLE messages (
  id INT AUTO_INCREMENT,
  username INT,
  roomname TEXT,
  text TEXT,
  
  PRIMARY KEY (id),
  
  FOREIGN KEY (username)
    REFERENCES users(id)
    ON DELETE CASCADE
);

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

