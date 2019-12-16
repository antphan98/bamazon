DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INTEGER NOT NULL,
PRIMARY KEY (item_id);

);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike Hat", "Clothing", 21.99, 20),
("Cheerios", "Food & Produce", 4.99, 74),
("Bluetooth Headphones", "Electronics", 34.99, 49),
("Pokemon Sword/Shield", "Video Games", 59.99, 63),
("Paderno Frying Pan", "Kitchen", 29.99, 81),
("Plaid Throw Blanket", "Home", 23.99, 13),
("Champion 6-Pack Socks", "Clothing", 9.99, 39),
("Lay's Classic Chips", "Food & Produce", 3.86, 98),
("PlayStation 4 Console", "Electronics", 260.86, 17),
("Milk-Bone Dog Treats", "Pet Supplies", 5.69, 68);