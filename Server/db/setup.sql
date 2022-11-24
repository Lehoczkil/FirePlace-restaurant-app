DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS meals;
DROP TABLE IF EXISTS orders;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255) NOT NULL
);

CREATE TABLE meals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER
    total FLOAT NOT NULL,
);

ALTER TABLE ONLY orders
    ADD CONSTRAINT fk_orders_customer_id 
        FOREIGN KEY (customer_id) 
        REFERENCES customers (id);
