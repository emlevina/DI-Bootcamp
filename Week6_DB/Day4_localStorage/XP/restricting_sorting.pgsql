-- Write a query to display the first_name, last_name and salary of all employees whose salary is between $10,000 and $15,000.
select first_name, last_name, salary from employees where salary between 10000 and 15000;
-- Write a query to display the first_name, last_name and hire date of all employees who were hired in 1987.
select first_name, last_name, hire_date from employees where extract('year' from hire_date) = '1987';
-- Write a query to get the all employees whose first_name has both the letters ‘c’ and ‘e’.
select * from employees where first_name ilike '%c%' and first_name ilike '%e%';
-- Write a query to display the last_name, job, and salary of all the employees who don’t work as Programmers or Shipping Clerks, and who don’t receive a salary equal to $4,500, $10,000, or $15,000.
select last_name, job_id, salary from employees 
where job_id not in (select job_id from jobs where job_title in ('Programmer', 'Shipping Clerk'))
and salary not in (4500, 10000, 15000);
-- Write a query to display the last names of all employees whose last name contains exactly six characters.
select last_name from employees where length(last_name) = 6;
-- Write a query to display the last name of all employees who have the letter ‘e’ as the third character in the name.
select last_name from employees where last_name like '__e%';
-- Write a query to display the jobs title appearing in the employees table.
select e.first_name, e.last_name, j.job_title from employees as e
join jobs as j
on j.job_id = e.job_id;
-- Write a query to select all information of employees whose last name is either ‘JONES’ or ‘BLAKE’ or ‘SCOTT’ or ‘KING’ or ‘FORD’.
select * from employees where upper(last_name) in ('JONES', 'BLAKE', 'SCOTT','KING', 'FORD');