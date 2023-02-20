-- Part I
-- Create a table named purchases. It should have 3 columns :
-- id : the primary key of the table
-- customer_id : this column references the table customers
-- item_id : this column references the table items
-- quantity_purchased : this column is the quantity of items purchased by a certain customer

CREATE TABLE purchases (
    id serial PRIMARY KEY,
    customer_id integer,
    item_id integer,
    quantity_purchased integer,
    CONSTRAINT fk_customer_id
        FOREIGN KEY(customer_id)
        REFERENCES customers(customer_id),
    CONSTRAINT fk_item_id
        FOREIGN KEY(item_id)
        REFERENCES items(item_id)
);

SELECT * from purchases;
SELECT * from customers;
SELECT * from items;

-- Insert purchases for the customers, use subqueries:
INSERT INTO purchases (customer_id, item_id, quantity_purchased) 
VALUES 
((SELECT customer_id FROM customers where first_name = 'Scott' and last_name='Scott'),(SELECT item_id FROM items WHERE item_name = 'Fan'),1),
((SELECT customer_id FROM customers where first_name = 'Melanie' and last_name='Johnson'),(SELECT item_id FROM items WHERE item_name = 'Large desk'),10),
((SELECT customer_id FROM customers where first_name = 'Greg' and last_name='Jones'),(SELECT item_id FROM items WHERE item_name = 'Small desk'),2)
;
-- Scott Scott bought one fan
-- Melanie Johnson bought ten large desks
-- Greg Jones bougth two small desks
-- The table purchases should look like this:

-- id	customer_id	item_id	quantity_purchased
-- 1	3	3	1
-- 2	5	2	10
-- 3	1	1	2


-- Part II

-- Use SQL to get the following from the database:
-- All purchases. Is this information useful to us?
SELECT * from purchases;
-- All purchases, joining with the customers table.
SELECT * from purchases as p
join customers as c
on c.customer_id = p.customer_id;
-- Purchases of the customer with the ID equal to 5.
SELECT * from purchases where customer_id = 5;
-- Purchases for a large desk AND a small desk
SELECT * from purchases where item_id in(1,2);

-- Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
-- Customer first name
-- Customer last name
-- Item name
SELECT c.first_name, c.last_name, i.item_name
from purchases as p
join customers as c on p.customer_id = c.customer_id
join items as i on i.item_id = p.item_id;
-- Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?
INSERT INTO purchases (customer_id, quantity_purchased) 
VALUES 
(1,1);

-- It worked because the field was not restricted to be not null