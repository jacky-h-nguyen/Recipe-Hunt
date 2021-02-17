from flask import request, Flask, jsonify
from flask_cors import CORS, cross_origin
import functions
from flask import request

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
def helloWorld():
    return "Hello World"


@app.route("/getRecipe", methods=["POST"])
def recipe():
    data = request.get_json()
    recipe = functions.recipeAPI(data["term"])
    return jsonify(recipe)


if __name__ == '__main__':
    app.run(host="localhost")