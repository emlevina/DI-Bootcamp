SELECT * FROM students;

-- Update
-- ‘Lea Benichou’ and ‘Marc Benichou’ are twins, they should have the same birth_dates. Update both their birth_dates to 02/11/1998.
UPDATE students set birth_date = '1998-11-02' where last_name='Benichou';
-- Change the last_name of David from ‘Grez’ to ‘Guez’.
UPDATE students set last_name='Guez' where last_name='Grez';

-- Delete
-- Delete the student named ‘Lea Benichou’ from the table.
DELETE FROM students WHERE first_name = 'Lea' and last_name = 'Benichou';

-- Count
-- Count how many students are in the table.
SELECT count(*) FROM students;
-- Count how many students were born after 1/01/2000.
SELECT count(*) FROM students WHERE birth_date > '2000-01-01';

-- Insert / Alter
-- Add a column to the student table called math_grade.
--ALTER TABLE students ADD math_grade SMALLINT;
-- Add 80 to the student which id is 1.
UPDATE students set math_grade = 80 where id = 1;
-- Add 90 to the students which have ids of 2 or 4.//lea was 4 in my db
UPDATE students set math_grade = 90 where id in (2,5);
-- Add 40 to the student which id is 6.
UPDATE students set math_grade = 40 where id = 7;
-- Count how many students have a grade bigger than 83

SELECT count(*) FROM students where math_grade >= 83;
-- Add another student named ‘Omer Simpson’ with the same birth_date as the one already in the table. Give him a grade of 70.
INSERT INTO students (first_name, last_name, birth_date, math_grade) VALUES ('Omer', 'Simpson', (SELECT birth_date FROM students where first_name = 'Omer' and last_name = 'Simpson'), 70);
-- Now, in the table, ‘Omer Simpson’ should appear twice. It’s the same student, although he received 2 different grades because he retook the math exam.
SELECT COUNT(*) as total_grade, first_name, last_name FROM students group by first_name, last_name;
-- Bonus: Count how many grades each student has.
-- Tip: You should display the first_name, last_name and the number of grades of each student. If you followed the instructions above correctly, all the students should have 1 math grade, except Omer Simpson which has 2.
-- Tip : Use an alias called total_grade to fetch the grades.
-- Hint : Use GROUP BY.

-- SUM
-- Find the sum of all the students grades.
SELECT sum(math_grade) from students;