-- Create a database called bootcamp.
-- Create a table called students.
-- Add the following columns:
-- id
-- last_name
-- first_name
-- birth_date
-- The id must be auto_incremented.
-- Make sure to choose the correct data type for each column.
-- To help, here is the data that you will have to insert. (How do we insert a date to a table?)

CREATE TABLE students(
 id SERIAL PRIMARY KEY,
 last_name VARCHAR (50) NOT NULL,
 first_name VARCHAR (50) NOT NULL,
 birth_date DATE NOT NULL
);