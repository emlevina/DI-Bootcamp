-- You were hired to babysit your cousin and you want to find a few movies that he can watch with you.
-- Find out how many films there are for each rating.
SELECT count(film_id), rating FROM film GROUP by rating;

-- Get a list of all the movies that have a rating of G or PG-13.
SELECT * FROM film where rating in ('G', 'PG-13');
-- Filter this list further: look for only movies that are under 2 hours long, and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.
SELECT * FROM film where rating in ('G', 'PG-13') and length < 120 and rental_rate < 3.00 ORDER BY title;

-- Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
UPDATE customer
set first_name = 'Ekaterina', last_name='Orlova', email='katya.leemi@gmail.com'
where customer_id = 1;
select * from customer where customer_id = 1;
-- Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).
SELECT * FROM customer as c join address as a on c.address_id =  a.address_id where c.customer_id = 1;

UPDATE address
set address = 'Gdalyahu', district = 'Haifa'
where address_id = (select address_id from customer where customer_id = 1);