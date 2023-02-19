-- Add the following items to the items table:
-- 1 - Small Desk – 100 (ie. price)
-- 2 - Large desk – 300
-- 3 - Fan – 80

INSERT INTO items (item_name, price) 
VALUES ('Small desk', 100), 
('Large desk', 300), 
('Fan', 80);

-- Add 5 new customers to the customers table:
-- 1 - Greg - Jones
-- 2 - Sandra - Jones
-- 3 - Scott - Scott
-- 4 - Trevor - Green
-- 5 - Melanie - Johnson

INSERT INTO customers (first_name, last_name) 
VALUES
('Greg', 'Jones'), 
('Sandra', 'Jones'), 
('Scott', 'Scott'), 
('Trevor', 'Green'), 
('Melanie', 'Johnson');