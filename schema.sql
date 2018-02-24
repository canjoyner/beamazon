
CREATE DATABASE If NOT EXISTS beamazon;

USE beamazon;

CREATE TABLE products(
  item_ID INT NOT NULL ,
  product_name VARCHAR(100) NOT NULL,
  price VDECIMAL(45) NOT NULL,
  stock_quantity INT default 0,
  PRIMARY KEY (item_ID)
);
