-- Write a query to display the names (first_name, last_name) using an alias name “First”, “Last” from the employee table.
select first_name as First, last_name as Last from employees;
-- Write a query to get unique departments ID from the employee table (ie. without duplicates).
select distinct department_id from employees;
-- Write a query to get the details of all employees from the employee table, do so in descending order by first name.
select * from employees order by first_name desc;
-- Write a query to get the names (first_name, last_name), salary and 15% of salary as PF (ie. alias) for all the employees.
select first_name, last_name, salary, salary * 0.15 as PF from employees;
-- Write a query to get the employee IDs, names (first_name, last_name) and salary in ascending order according to their salary.
select employee_id, first_name, last_name, salary from employees order by salary;
-- Write a query to get the total sum of all salaries paid to the employees.
select sum(salary) from employees;
-- Write a query to get the maximum and minimum salaries paid to the employees.
select min(salary), max(salary) from employees;
-- Write a query to get the average salary paid to the employees.
select avg(salary) from employees;
-- Write a query to get the number of employees working in the company.
select count(*) from employees;
-- Write a query to get all the first names from the employees table in upper case.
select upper(first_name) from employees;
-- Write a query to get the first three characters of each first name of all the employees in the employees table.
select substring(first_name for 3) from employees;
-- Write a query to get the full names of all the employees in the employees table. You have to include the first name and last name.
select first_name || ' ' || last_name as name from employees;
-- Write a query to get the first name, last name and the length of the full name of all the employees from the employees table.
select first_name, last_name, length(first_name || ' ' || last_name) from employees;
-- Write a query to check whether the first_name column of the employees table contains any numbers.
SELECT first_name from employees WHERE first_name ~ '^[0-9]+$';
-- Write a query to select the first ten records from a table.
select * from employees limit 10;