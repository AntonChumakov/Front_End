SELECT department_name
FROM departments
WHERE department_id NOT IN (
  SELECT department_id
  FROM employees
)

SELECT department_name
FROM departments
WHERE manager_id IN (
  SELECT employee_id
  FROM employees
  WHERE salary > 10000
)

SELECT employees.first_name, employees.last_name, departments.department_name, jobs.job_title
FROM employees
JOIN departments ON employees.department_id = departments.department_id
JOIN jobs ON employees.job_id = jobs.job_id
SELECT first_name, last_name, salary
FROM employees
WHERE employee_id IN (
  SELECT employee_id
  FROM locations
  WHERE city IN ('Oxford', 'San Francisco')
)

SELECT CUSTOMERS.cname, ORDERS.orderid
FROM CUSTOMERS
FULL JOIN ORDERS ON CUSTOMERS.CUSTID = ORDERS.CUSTID

SELECT E1.sname, (E1.commission - E2.commission) AS difference
FROM EMPLOYEES E1
LEFT JOIN EMPLOYEES E2 ON E1.bossid = E2.empid

SELECT S.sname, C.cname, C.city
FROM CUSTOMERS C
JOIN SALESMEN S ON C.salesmanid = S.salesmanid AND C.city = S.city
