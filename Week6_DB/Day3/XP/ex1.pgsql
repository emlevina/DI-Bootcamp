-- Get a list of all film languages.
SELECT * from language;

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
-- Get all films, even if they don’t have languages.
SELECT f.title, f.description, l.name
from film as f
left JOIN language as l
on f.language_id = l.language_id;
-- Get all languages, even if there are no films in those languages.
SELECT f.title, f.description, l.name
from film as f
FULL JOIN language as l
on f.language_id = l.language_id;

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film(
    film_id serial PRIMARY KEY,
    name varchar(30) NOT NULL
)

INSERT INTO new_film (name) values ('The Green mile'), ('Another film');
-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
CREATE TABLE customer_review(
    review_id serial PRIMARY KEY,
    language_id INTEGER REFERENCES language (language_id) ON DELETE RESTRICT,
    film_id INTEGER REFERENCES new_film (film_id) ON DELETE CASCADE,
    title varchar(100),
    score smallint CONSTRAINT score_max_limit CHECK (score <= 10),
    review_text TEXT,
    last_update timestamp default current_timestamp
)

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (language_id, film_id, title, score, review_text)
VALUES 
(1, 1, 'Is it really Green?', 9, 'Lalalalalal'),
(3, 2, 'Is it really Japanise?', 9, 'Lalalalalal2')
;

SELECT * FROM customer_review;
-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film where film_id = 1;
-- review was also deleted