-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
SELECT * from language;
UPDATE film set language_id = 2 where film_id = 1;
UPDATE film set language_id = 5 where film_id = 2;
-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- address_id should be from address

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- DROP TABLE customer_review;
-- easy as it is not referenced anywhere else
-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
select count(*) FROM rental where return_date IS NULL;

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
select * 
FROM film as f
join inventory as i
on i.film_id = f.film_id
Join rental as r
on r.inventory_id = i.inventory_id
where r.return_date IS NULL
order by rental_rate DESC
LIMIT 30;

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
select f.title, f.description
from film_actor as fa
join film as f
on f.film_id = fa.film_id
where 
fa.actor_id = (select actor_id from actor where first_name = 'Penelope' and last_name = 'Monroe') 
and 
f.description ILIKE '%sumo%';

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
select * from film where rating = 'R' and length < 60 and description ILIKE '%documentary%';

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
select f.title, f.description
from rental as r
join inventory as i on r.inventory_id = i.inventory_id
join film as f on f.film_id = i.film_id
where r.customer_id = (SELECT customer_id FROM customer where first_name = 'Matthew' and last_name = 'Mahan') 
and 
f.rental_rate > 4
and r.return_date between '2005-07-28' and '2005-08-01';
-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
select *
from rental as r
join inventory as i on r.inventory_id = i.inventory_id
join film as f on f.film_id = i.film_id
where r.customer_id = (SELECT customer_id FROM customer where first_name = 'Matthew' and last_name = 'Mahan') 
AND
(f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
order by f.replacement_cost DESC
LIMIT 1;
