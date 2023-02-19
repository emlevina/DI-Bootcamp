-- In this exercise we will be using the actors table from todays lesson.
-- 1. Count how many actors are in the table.
SELECT count(*) FROM actors;
-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?

INSERT INTO actors(first_name, last_name, number_oscars, age) VALUES (NULL, 'Ohara', 5, '1990-05-05');
-- ERROR: null value in column "age" of relation "actors" violates not-null constraint