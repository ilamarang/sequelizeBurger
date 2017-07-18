CREATE DATABASE burgers_db ;
USE burgers_db;
CREATE TABLE burger (
id integer(10) AUTO_INCREMENT NOT NULL,
burger_name varchar(100) NOT NULL,
devoured boolean NOT NULL,
date TIMESTAMP,
PRIMARY KEY (id)
);
