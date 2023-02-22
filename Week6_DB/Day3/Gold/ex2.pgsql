-- How many stores there are, and in which city and country they are located.
select c.city, co.country
from store as s
join address as a
on a.address_id = s.address_id
join city as c
on a.city_id = c.city_id
join country as co
on co.country_id = c.country_id;

-- How many hours of viewing time there are in total in each store – in other words, the sum of the length of every inventory item in each store.
SELECT sum(f.length) as total_viewing_time
from store as s
join inventory as i
on i.store_id = s.store_id
join film as f
on f.film_id = i.film_id
group by s.store_id;

-- Make sure to exclude any inventory items which are not yet returned. (Yes, even in the time of zombies there are people who do not return their DVDs)
SELECT sum(f.length) as total_viewing_time
from store as s
join inventory as i
on i.store_id = s.store_id
join film as f
on f.film_id = i.film_id

group by s.store_id;
-- не смогла понять как добавить рентал без дублей

-- A list of all customers in the cities where the stores are located.

-- A list of all customers in the countries where the stores are located.

-- Some people will be frightened by watching scary movies while zombies walk the streets. Create a ‘safe list’ of all movies which do not include the ‘Horror’ category, or contain the words ‘beast’, ‘monster’, ‘ghost’, ‘dead’, ‘zombie’, or ‘undead’ in their titles or descriptions… Get the sum of their viewing time (length).
-- Hint : use the CHECK contraint

-- For both the ‘general’ and the ‘safe’ lists above, also calculate the time in hours and days (not just minutes).