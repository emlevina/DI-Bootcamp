-- We want to encourage families and kids to enjoy our movies.

-- Retrieve all films with a rating of G or PG, which are are not currently rented (they have been returned/have never been borrowed).
select f.title, f.rating, r.return_date, r.rental_date from rental as r
join inventory as i
on i.inventory_id = r.inventory_id
join film as f
on f.film_id = i.film_id
where f.rating in ('G', 'PG')
and (r.return_date is not null or r.rental_date is null);

-- Create a new table which will represent a waiting list for children’s movies. This will allow a child to add their name to the list until the DVD is available (has been returned). Once the child takes the DVD, their name should be removed from the waiting list (ideally using triggers, but we have not learned about them yet. Let’s assume that our Python program will manage this). Which table references should be included?
create table waiting_list (
    inventory_id INTEGER REFERENCES inventory(inventory_id),
    customer_id INTEGER REFERENCES customer(customer_id)
);

-- Retrieve the number of people waiting for each children’s DVD. Test this by adding rows to the table that you created in question 2 above.
insert into waiting_list (inventory_id, customer_id) VALUES(1,1), (2,2), (59, 13);
select * from waiting_list;