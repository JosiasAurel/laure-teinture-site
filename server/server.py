from flask import Flask
from .database import get_product, get_products, create_product

server = Flask(__name__)


@server.route("/", methods=["GET"])
def _index_route():
    return {
        "data": "This is the index route"
    }


@server.route("/getproducts", methods=["GET"])
def fetch_products_():
    products = get_products()
    prods = [{"name": products[i][0], "price": products[i][1],
              "description": products[i][2], "image": products[i][3]} for i in products]
    return prods


if __name__ == "__main__":
    server.run(debug=True, threaded=True)
