USE test_book_store;
-- Insert values into Publisher table
INSERT INTO `Publisher` (`name`, `address`, `phone`) VALUES
('Publisher1', 'Address1', '1234567890'),
('Publisher2', 'Address2', '9876543210');

-- Insert values into Auther table
INSERT INTO `Auther` (`name`, `birthDate`, `nationality`) VALUES
('Author1', '1990-01-01', 'Nationality1'),
('Author2', '1985-05-10', 'Nationality2');

-- Insert values into Genre table
INSERT INTO `Genre` (`name`) VALUES
('Genre1'),
('Genre2');

-- Insert values into Member table
INSERT INTO `Member` (`name`, `address`, `phone`, `email`) VALUES
('Member1', 'Address1', '1111111111', 'member1@example.com'),
('Member2', 'Address2', '2222222222', 'member2@example.com');

-- Insert values into Book table
INSERT INTO `Book` (`title`, `publicationYear`, `publisherId`, `autherId`) VALUES
('Book1', 2020, 1, 1),
('Book2', 2018, 2, 2);

-- Insert values into Reservation table
INSERT INTO `Reservation` (`date`, `bookId`, `memberId`) VALUES
('2023-01-01 10:00:00', 1, 1),
('2023-02-01 12:00:00', 2, 2);

-- Insert values into Borrowing table
INSERT INTO `Borrowing` (`data`, `returnDate`, `bookId`, `memberId`) VALUES
('2023-03-01 08:00:00', '2023-03-15 08:00:00', 1, 1),
('2023-04-01 10:00:00', '2023-04-15 10:00:00', 2, 2);

-- Insert values into _BookToGenre table
INSERT INTO `_BookToGenre` (`BookId`, `GenreId`) VALUES
(1, 1),
(1, 2),
(2, 2);
-- Insert values into Publisher table
INSERT INTO `Publisher` (`name`, `address`, `phone`) VALUES
('Publisher1', 'Address1', '1234567890'),
('Publisher2', 'Address2', '9876543210');

-- Insert values into Auther table
INSERT INTO `Auther` (`name`, `birthDate`, `nationality`) VALUES
('Author1', '1990-01-01', 'Nationality1'),
('Author2', '1985-05-10', 'Nationality2');

-- Insert values into Genre table
INSERT INTO `Genre` (`name`) VALUES
('Genre1'),
('Genre2');

-- Insert values into Member table
INSERT INTO `Member` (`name`, `address`, `phone`, `email`) VALUES
('Member1', 'Address1', '1111111111', 'member1@example.com'),
('Member2', 'Address2', '2222222222', 'member2@example.com');

-- Insert values into Book table
INSERT INTO `Book` (`title`, `publicationYear`, `publisherId`, `autherId`) VALUES
('Book1', 2020, 1, 1),
('Book2', 2018, 2, 2);

-- Insert values into Reservation table
INSERT INTO `Reservation` (`date`, `bookId`, `memberId`) VALUES
('2023-01-01 10:00:00', 1, 1),
('2023-02-01 12:00:00', 2, 2);

-- Insert values into Borrowing table
INSERT INTO `Borrowing` (`data`, `returnDate`, `bookId`, `memberId`) VALUES
('2023-03-01 08:00:00', '2023-03-15 08:00:00', 1, 1),
('2023-04-01 10:00:00', '2023-04-15 10:00:00', 2, 2);

-- Retrieve all reservations with member names and book titles:
SELECT
    Reservation.id AS ReservationId,
    Member.name AS MemberName,
    Book.title AS BookTitle,
    Reservation.date AS ReservationDate
FROM
    Reservation
JOIN Member ON Reservation.memberId = Member.id
JOIN Book ON Reservation.bookId = Book.id;

-- Retrieve all borrowed books with member names and return dates:
SELECT
    Borrowing.id AS BorrowingId,
    Member.name AS MemberName,
    Book.title AS BookTitle,
    Borrowing.borrowDate AS BorrowDate,
    Borrowing.returnDate AS ReturnDate
FROM
    Borrowing
JOIN Member ON Borrowing.memberId = Member.id
JOIN Book ON Borrowing.bookId = Book.id;

-- Retrieve publishers along with the books they have published:
SELECT
    Publisher.name AS PublisherName,
    Book.title AS BookTitle
FROM
    Publisher
LEFT JOIN Book ON Publisher.id = Book.publisherId;


