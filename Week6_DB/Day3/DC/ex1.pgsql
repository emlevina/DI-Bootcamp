-- Part I
-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.
-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
CREATE TABLE customer(
    id serial PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30) NOT NULL
);
-- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)

CREATE TABLE customer_profile(
    id serial PRIMARY KEY,
    customer_id INTEGER UNIQUE REFERENCES customer(id),
    isLoggedIn BOOLEAN DEFAULT FALSE
)

-- Insert those customers
-- John, Doe
-- Jerome, Lalu
-- Lea, Rive
INSERT INTO customer(first_name, last_name)
VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

-- Insert those customer profiles, use subqueries

-- John is loggedIn
-- Jerome is not logged in
INSERT INTO customer_profile(customer_id, isLoggedIn) VALUES
((select id from customer where first_name = 'John'), true);
INSERT INTO customer_profile(customer_id) VALUES
((select id from customer where first_name = 'Jerome'));
select * from customer_profile;
-- Use the relevant types of Joins to display:
-- The first_name of the LoggedIn customers
select c.first_name 
from customer as c
join customer_profile as cp
on cp.customer_id = c.id
where cp.isLoggedIn = true;
-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
select c.first_name, cp.isLoggedIn
from customer as c
left join customer_profile as cp
on cp.customer_id = c.id;
-- The number of customers that are not LoggedIn
select count(*)
from customer as c
join customer_profile as cp
on cp.customer_id = c.id
where cp.isLoggedIn = false;

-- Part II:

-- Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
CREATE table book (
    book_id SERIAL PRIMARY KEY, 
    title varchar(100) NOT NULL, 
    author varchar(50) NOT NULL
)

-- Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee
INSERT INTO book(title, author)
VALUES 
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');


-- Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);
CREATE TABLE student(
    student_id SERIAL PRIMARY KEY, 
    name VARCHAR(30) NOT NULL UNIQUE, 
    age smallint CONSTRAINT age_max_limit CHECK (age <= 15)
)

-- Insert those students:
-- John, 12
-- Lera, 11
-- Patrick, 10
-- Bob, 14

INSERT INTO student (name, age) 
VALUES 
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

-- Create a table named Library, with the columns :
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date

CREATE table library (
    book_id INTEGER REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_id INTEGER REFERENCES student(student_id)  ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date DATE
)

-- This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table

-- Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021
INSERT INTO library(student_id, book_id, borrowed_date) 
VALUES
((select student_id from student where name = 'John'), (SELECT book_id from book where title='Alice In Wonderland'), '2022-02-15'),
((select student_id from student where name = 'Bob'), (SELECT book_id from book where title='To kill a mockingbird'), '2021-03-03'),
((select student_id from student where name = 'Lera'), (SELECT book_id from book where title='Alice In Wonderland'), '2021-05-23'),
((select student_id from student where name = 'Bob'), (SELECT book_id from book where title='Harry Potter'), '2021-08-12');

-- Display the data
-- Select all the columns from the junction table
SELECT * FROM library;
-- Select the name of the student and the title of the borrowed books
SELECT b.title, s.name
FROM library as l
join student as s
on s.student_id = l.student_id
join book as b
on b.book_id = l.book_id;
-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT avg(s.age)
FROM library as l
join student as s
on s.student_id = l.student_id
join book as b
on b.book_id = l.book_id
where b.title = 'Alice In Wonderland';
-- Delete a student from the Student table, what happened in the junction table ?
delete from student where student_id = 5;
-- also deleted from library