
CREATE DATABASE IF NOT EXISTS beamazon;

USE beamazon;

drop table products;

CREATE TABLE products(
  item_ID INT NOT NULL ,
  product_name VARCHAR(100) NOT NULL,
  department VARCHAR(100),
  price DECIMAL(45) NOT NULL,
  stock_quantity INT default 0,
  PRIMARY KEY (item_ID)
);

SELECT * FROM products;