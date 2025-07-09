from flask import Flask

app = Flask(__name__)

@app.route("/")

def homepage():
  return "Fisrt Name: Ibrahim. " \
  "Last name: Ajebna " \
  "fav food: pizza " \
  "places i want to go: japan "


if __name__ == "__main__":

 app.run(debug=True, host="0.0.0.0", port=3000)