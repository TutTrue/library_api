CREATE DATABASE IF NOT EXISTS book_store;

USE book_store;
CREATE USER IF NOT EXISTS 'book_store_user'@'localhost' IDENTIFIED BY '123123';


GRANT ALL PRIVILEGES ON book_store.* TO 'book_store_user'@'localhost';

FLUSH PRIVILEGES;


CREATE DATABASE IF NOT EXISTS book_store_shadow;
USE book_store_shadow;

GRANT ALL PRIVILEGES ON book_store_shadow.* TO 'book_store_user'@'localhost';
FLUSH PRIVILEGES;
