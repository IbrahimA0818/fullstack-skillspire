from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy  
from datetime import datetime, timezone

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///demo.db"

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(10), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.now(timezone.utc))


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/adduser')
def adduser():
    new_user = User(name = "test name", email = "testemail", password ="password")


    db.session.add(new_user)

    db.session.commit()

    return "test"

@app.route('/retrieve_user')
def retrieveusers():
    for user in user:
      print(f"Name:{user.name}, Email:{user.email}")
    return "Test"


if __name__ == "__main__": 
    with app.app_context(): 
        db.create_all()
        app.run(debug=True)