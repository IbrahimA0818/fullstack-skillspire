from flask import Flask

app = Flask(__name__)

@app.route("/")

def homepage():
  return "Paws Rescue Center 🐾"

@app.route("/about")

def about():
  return """<h1>About us</h1><br><h2>We are a non-profit organization working as an animal rescue center.

  We aim to help you connect with purrfect furbaby for you! 

  The animals you find at our website are rescue animals which have been       rehabilitated. 

  Our mission is to promote the ideology of "Adopt, don't Shop"! </h2>"""

if __name__ == "__main__":

 app.run(debug=True, host="0.0.0.0", port=3000)