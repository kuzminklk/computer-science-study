/* Tables merge practice --> */

CREATE TABLE clients
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL DEFAULT 18,
    account_sum INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE employees
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL DEFAULT 18
);

/* Union */
SELECT name, age FROM clients
UNION SELECT name, age FROM employees;

/* Except (Исклюбчение) */
SELECT name, age FROM clients
EXCEPT SELECT name, age FROM employees;

/* Intersect (Пересечение) */
SELECT name, age FROM clients
INTERSECT SELECT name, age FROM employees;