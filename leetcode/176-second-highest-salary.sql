-- @block
  Create table If Not Exists Employee (id int, salary int)
-- @block
  Truncate table Employee
-- @block
  insert into Employee (id, salary) values ('1', '100')
-- @block
  insert into Employee (id, salary) values ('2', '200')
-- @block
  insert into Employee (id, salary) values ('3', '300')

-- @block solution-query
SELECT max(salary) AS SecondHighestSalary
FROM Employee
WHERE salary < (SELECT max(salary) FROM Employee)