-- Part 3 :
-- How many employees are in dept 10.
select count(*) from employee where department_code = 10;
-- How many employees are analyst in dept 10.
select count(*) from employee where department_code = 10 and job = 'ANALYST';
-- Display the names of each employees, their job and dept location
select e.empfname, e.emplname, e.job, d.location
from employee as e
join department as d on d.deptcode = e.department_code;
-- Create a query that displays EMPFNAME, EMPLNAME, Department_code, DEPTNAME, LOCATION from EMPLOYEE, and DEPARTMENT tables. Make sure the results are in the ascending order based on the EMPFNAME and LOCATION of the department.
select e.empfname, e.emplname,e.department_code, d.deptname, d.location
from employee as e
join department as d on d.deptcode = e.department_code
order by e.empfname, d.location;
-- Display EMPFNAME and "TOTAL SALARY" for each employee (commission and salary)
SELECT empfname, salary, commission, (salary + commission) as total_salary from employee;
-- Display MAX SALARY from the EMPLOYEE table.
select max(salary) from employee;
-- Find the avg salary of the software engineers 
select avg(salary) 
from employee 
where job = 'SOFTWARE ENGINEER'
;

-- Which join should we use to display the employee 9777 even if he has no deptcode?
select e.empcode, e.empfname, e.emplname, e.job, d.location
from employee as e
left join department as d on d.deptcode = e.department_code;