
import sqlite3
from pydantic import BaseModel

connection = sqlite3.connect("database.sqlite3")

cursor = connection.cursor()


class Product(BaseModel):
    name: str
    price: str
    description: str
    image: str


def create_product_db():
    command = "CREATE TABLE products (name VARCHAR(40), price VARCHAR(20), description VARCHAR(120), image VARCHAR(100))"
    cursor.execute(command)
    connection.commit()
    return "Table Created"


def create_product(name: str, price: str, description: str, image: str) -> Product:
    command = "INSERT INTO products VALUES (?, ?, ?, ?)"
    values = (name, price, description, image, )
    cursor.execute(command, values)
    connection.commit()
    return "Inserted"


def get_products():
    command = "SELECT * FROM products"
    products = cursor.execute(command).fetchall()
    return products


def get_product(name: str):
    command = "SELECT * FROM products WHERE name = ?"
    product = cursor.execute(command, (name, )).fetchone()
    return product


""" # create_product_db()

print(create_product("Nike AirMax", "$64.39", "It breaths",
                     "https://nike.com/bestshoes/shoe-that-breath"))
print(get_products())
print(get_product("Nike AirMax"))
 """
