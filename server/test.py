
import requests

base_url = "http://127.0.0.1:5000/"

products = requests.get(base_url+"getproducts")
print(products.content)
