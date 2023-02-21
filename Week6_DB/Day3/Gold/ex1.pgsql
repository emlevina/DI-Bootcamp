-- Get a list of all rentals which are out (have not been returned). How do we identify these films in the database?
select * from rental as r
join inventory as i
on i.inventory_id = r.inventory_id
join film as f
on f.film_id = i.film_id
where r.return_date is NULL;
-- Get a list of all customers who have not returned their rentals. Make sure to group your results.
select c.first_name, c.last_name
from customer as c
join rental as r 
on r.customer_id = c.customer_id
where r.return_date is null
group by c.first_name, c.last_name
order by last_name, first_name;

-- Get a list of all the Action films with Joe Swank.
-- Before you start, could there be a shortcut to getting this information? Maybe a view?
select * from actor_info where first_name = 'Joe' and last_name = 'Swank';
