/* Tables merge practice --> */

CREATE TABLE products
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    company TEXT NOT NULL,
    items_count INTEGER DEFAULT 0,
    price iNTEGER
);

CREATE TABLE customers 
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

CREATE TABLE orders
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    customer_id INTEGER NOT NULL,
    created_at TEXT NOT_NULL,
    items_count INTEGER DEFAULT 1,
    price INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);

/* Data */

INSERT INTO products (name, company, items_count, price)
VALUES
('iPhone 13', 'Apple', 3, 76000),
('iPhone 12', 'Apple', 2, 51000),
('Galaxy S21', 'Samsung', 2, 56000),
('Galaxy S20', 'Samsung', 1, 41000),
('P40 Pro', 'Huawei', 5, 36000);

INSERT INTO customers(name) VALUES ('Tom'), ('Bob'),('Sam');

INSERT INTO orders (product_id, customer_id, created_at, items_count, price)
VALUES
( 
    (SELECT id FROM products WHERE name='Galaxy S21'),
    (SELECT id FROM customers WHERE name='Tom'),
    '2021-11-30', 
    2, 
    (SELECT price FROM products WHERE name='Galaxy S21')
),
( 
    (SELECT id FROM products WHERE name='iPhone 12'),
    (SELECT id FROM customers WHERE name='Tom'),
    '2021-11-29',  
    1, 
    (SELECT price FROM products WHERE name='iPhone 12')
),
( 
    (SELECT id FROM products WHERE name='iPhone 12'),
    (SELECT id FROM customers WHERE name='Bob'),
    '2021-11-29',  
    1, 
    (SELECT price FROM products WHERE name='iPhone 12')
);



/* Querries */

/* Where */
SELECT customers.name, products.name, orders.created_at 
FROM orders, customers, products
WHERE orders.customer_id = customers.id AND orders.product_id = products.id;

/* Join */
SELECT orders.created_at, orders.items_count, products.name
FROM orders
JOIN products ON products.id = orders.product_id;

/* Left Join */



/* Views */
CREATE VIEW IF NOT EXISTS orders_products_customers AS
SELECT orders.created_at AS order_date,
    customers.name AS customer,
    products.name AS product
FROM orders
JOIN products ON orders.product_id = products.id
JOIN customers ON orders.customer_id = customers.id;

SELECT * FROM orders_products_customers;

DROP VIEW IF EXISTS orders_products_customers;