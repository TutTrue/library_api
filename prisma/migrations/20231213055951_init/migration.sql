CREATE DATABASE IF NOT EXISTS test_book_store;
USE test_book_store;


CREATE TABLE `Publisher` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
);


CREATE TABLE `Auther` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `birthDate` DATETIME(3) NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
);


CREATE TABLE `Genre` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
);


CREATE TABLE `Member` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
);


CREATE TABLE `Book` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `publicationYear` INTEGER NOT NULL,
    `publisherId` INTEGER NULL,
    `autherId` INTEGER NULL,

    PRIMARY KEY (`id`),
    CONSTRAINT `Book_publisherId_fkey` FOREIGN KEY (`publisherId`) REFERENCES `Publisher`(`id`),
    CONSTRAINT `Book_autherId_fkey` FOREIGN KEY (`autherId`) REFERENCES `Auther`(`id`)
);


CREATE TABLE `Reservation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `bookId` INTEGER NULL,
    `memberId` INTEGER NULL,

    PRIMARY KEY (`id`),
    CONSTRAINT `Reservation_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`id`),
    CONSTRAINT `Reservation_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `Member`(`id`)
);


CREATE TABLE `Borrowing` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `returnDate` DATETIME(3) NOT NULL,
    `bookId` INTEGER NULL,
    `memberId` INTEGER NULL,

    PRIMARY KEY (`id`),
    CONSTRAINT `Borrowing_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`id`),
    CONSTRAINT `Borrowing_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `Member`(`id`)
);


CREATE TABLE `_BookToGenre` (
    `BookId` INTEGER NOT NULL,
    `GenreId` INTEGER NOT NULL,

    PRIMARY KEY (`BookId`, `GenreId`),
    CONSTRAINT `_BookToGenre_A_fkey` FOREIGN KEY (`BookId`) REFERENCES `Book`(`id`),
    CONSTRAINT `_BookToGenre_B_fkey` FOREIGN KEY (`GenreId`) REFERENCES `Genre`(`id`)
);
