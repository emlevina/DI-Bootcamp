-- Create a table called product_orders and a table called items. You decide which fields should be in each table, although make sure the items table has a column called price.
create table items (
    id serial primary key,
    title varchar(30) not null,
    price INTEGER NOT NULL
);

create table product_orders (
    id integer,
    timestamp timestamp DEFAULT NOW(),
    item_id integer REFERENCES items(id) UNIQUE
);

insert into items(title, price) values 
('Fan', 1000), ('Table', 2000), ('Chair', 50);

insert into product_orders (id, item_id) values (1, 1), (1, 2), (2,3);
-- There should be a one to many relationship between the product_orders table and the items table. An order can have many items, but an item can belong to only one order.

-- Create a function that returns the total price for a given order.
select sum(i.price) from product_orders as po
join items as i
on i.id = po.item_id
where po.id = 2;

Create function order_sum(order_num int)  
returns int  
language plpgsql  
as  
$$  
Declare  
 sum_by_order integer;  
Begin  
   select sum(i.price) 
   into sum_by_order
   from product_orders as po
   join items as i on i.id = po.item_id where po.id = order_num; 
   return sum_by_order;  
End;  
$$;  
SELECT * from order_sum(2);

-- Bonus :
-- Create a table called users.
-- There should be a one to many relationship between the users table and the product_orders table.
-- Create a function that returns the total price for a given order of a given user.