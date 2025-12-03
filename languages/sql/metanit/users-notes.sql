/* General SQL notes & practice --> */

/* Multiline comment */
-- Inline Comment

/* 
.schema
.open
.exit & .quit
*/

/* Companies table */
CREATE TABLE companies
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    CONSTRAINt name_ch CHECK(name != '')
);

/* Users table */
CREATE TABLE IF EXISTS users 
(
id INTEGER PRIMARY KEY AUTOINCREMENT,
username TEXT NOT NULL,
email TEXT UNIQUE NOT NULL, 
age INTEGER NOT NULL,
company_id INTEGER,
FOREIGN KEY (company_id) REFERENCES companies (id),
CONSTRAINT username_ch CHECK(username != ''),
CONSTRAINT age_chk CHECK(age > 0 AND age < 100)
);

INSERT INTO users(username, email, age, company_id) VALUES 
('Alex', 'alex@gmail.com', 22, 1),
('Sam', 'sam@gmail.com', 19, 1),
('John', 'john@gmail.com', 42, 3),
('Alex', 'alex2@gmail.com', 17, 1),
('Alex', 'alex3@gmail.com', 19, 2),
('Mark', 'mark@mail.ru', 30, NULL),
('Elon', 'elon@protonmail.com', 27, NULL);

/* Products table */
CREATE TABLE products 
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    company_id INTEGER NOT NULL,
    product_count INTEGER DEFAULT 0,
    price INTEGER,
    FOREIGN KEY (company_id) REFERENCES companies (id)
);

INSERT INTO products (name, company_id, product_count, price) VALUES
('IPhone', 3, 300, 500),
('MacBook', 3, 100, 1500),
('IPods', 3, 1000, 50),
('Pixel', 2, 100, 500);



/* Replace row*/
REPLACE INTO users (username, email, age, company_id) VALUES
('Alex', 'alex@gmail.com', 90, 1);

/* Drop table */
DROP TABLE IF EXISTS users;

/* Attach Table */
ATTACH DATABASE "jobs.db" AS jobs;

SELECT * FROM jobs.jobs ;

/* Select all */
SELECT * FROM users;

SELECT DISTINCT username FROM users;

SELECT username FROM users WHERE username IN ('Alex', 'Sam');

SELECT username, email FROM users WHERE age BETWEEN 18 AND 25;

SELECT username FROM users WHERE email LIKE '%gmail.com';

SELECT username FROM users WHERE email GLOB '*gmail*';

SELECT username FROM users WHERE age IS NOT NULL;

/* Update table*/
ALTER TABLE users RENAME TO people;

ALTER TABLE people RENAME TO users;

ALTER TABLE users ADD COLUMN email_2 text;

ALTER TABLE users RENAME COLUMN email_2 TO email_reserve;

ALTER TABLE users DROP COLUMN email_reserve;

/* Filtering */
SELECT name FROM products WHERE company_id = 3; 

SELECT name, product_count * price FROM products WHERE product_count * price > 100000 AND company_id = 3;

SELECT name FROM products WHERE product_count * price < 100000 OR company_id = 3;

SELECT name FROM products WHERE NOT company_id = 3;

/* Update rows */
UPDATE products
SET price = price - 100;

UPDATE products
SET Price = price - 50
WHERE company_id = 3;

/* Delete rows */
DELETE FROM products
WHERE company_id = 2;



/* Order */
SELECT username, age FROM users ORDER BY age DESC;

SELECT name, product_count * price AS sum FROM products ORDER BY sum;

/* Limit */
SELECT * FROM users LIMIT 2;

/* Functions */
SELECT AVG(price) AS avg_price FROM products;
SELECT AVG(price * product_count) AS avg_price FROM products;

SELECT COUNT(*) FROM users;
SELECT COUNT(DISTINCT username) FROM users;

SELECT MIN(age), MAX(age) FROM users;

SELECT SUM(product_count) FROM products;

/* Group */
SELECT username, COUNT(username) from users GROUP BY username;

/* Comands order */
/*
SELECT company, COUNT(*) AS models_count
FROM products
WHERE price > 40000
GROUP BY company
ORDER BY models_count DESC;
*/

/* Group filter */
HAVING

/* Subqueries */
SELECT username FROM users WHERE company_id = (SELECT id FROM companies WHERE name = 'Apple');

SELECT * FROM users WHERE age > (SELECT AVG(age) from users);

/* --> Correlated subquery */
SELECT username, (SELECT name FROM companies WHERE companies.id = users.company_id) AS company FROM users;

/* Exist */
SELECT EXISTS(SELECT * FROM users WHERE username = 'Daniil');

/* Not exists */
NOT EXISTS



/* Table connect */
SELECT username, companies.name FROM users, companies WHERE users.company_id = companies.id;

SELECT username, companies.name FROM users /*INNER*/ JOIN companies ON companies.id = users.company_id;

SELECT username, companies.name FROM users LEFT JOIN companies ON companies.id = users.company_id;

/* Union */
SELECT username FROM users
UNION SELECT name FROM products;

/* Except */
SELECT username FROM users
EXCEPT SELECT name FROM products;

/* Intersect */
SELECT username FROM users
INTERSECT SELECT name FROM products;



/* Case */
SELECT name, product_count,
CASE
    WHEN product_count = 1
        THEN 'Very low'
    WHEN product_count = 2
        THEN 'Low'
    WHEN product_count = 2
        THEN 'Enough'
    ELSE 'Many'
END AS category
FROM products;

/* If */
SELECT name, product_count,
    IIF(product_count > 2, 'Many', 'Low') AS status
FROM products;

/* Functions for numbers */

SELECT ROUND(123.12);
SELECT ABS(-123);
SELECT RANDOM();
SELECT MAX(324,64,234,6346436);
SELECT MIN(324,64,234,6346436);

/* Functions for stings */

SELECT LENGTH('sdfsdfsdfsdf');
SELECT TRIM('    Hmm    ');
SUBSTR LOWER UPPER INSTR



/* Functions for dates */
...
SELECT DATE();
SELECT TIME();
...

/* Store dates */
As TEXT
As FLOAT
As INTEGER