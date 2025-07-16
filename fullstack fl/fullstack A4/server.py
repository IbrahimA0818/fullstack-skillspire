from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime,timezone


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///courses.db"

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    date_created = db.Column(db.DateTime, default = datetime.now(timezone.utc))

@app.route('/')
def index():
    users = User.query.all()
    return render_template("index.html", users=users)

@app.route('/addusers', methods=["POST"])
def addusers():
    name = request.form["name"]
    email = request.form["email"]

    user = User(name=name, email=email)

    db.session.add(user)

    try:
        db.session.commit()
    except Exception as e:
      db.session.rollback()
      print("Error:", e)

    return redirect('/')

@app.route('/display_user/<int:id>')
def display_user(id):
    user = User.query.get(id)
    if not user: 
        return redirect('/')
    return render_template("delete.html", user=user)

@app.route('/show_user/<int:id>')
def show_user(id):
    user = User.query.get(id)
    if not user: 
        return redirect('/')
    return render_template("show_user.html", user=user)

@app.route('/edit_user/<int:id>')
def edit_user(id):
    user = User.query.get(id)
    if not user:
        return redirect('/')
    return render_template("edit_user.html", user=user)

@app.route('/update_user/<int:id>', methods=["POST"])
def update_user(id):
    user = User.query.get(id)
    if not user:
        return redirect('/')
    
    user.name = request.form["name"]
    user.email = request.form["email"]

    try:
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        print("Error:", e)
    
    return redirect('/')

@app.route('/delete_user/<int:id>')
def delete_user(id):
    user = User.query.get(id)
    if not user:
        return redirect('/')
    db.session.delete(user)

    try:
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        print("Error:", e)
    return redirect('/')

if __name__ == "__main__":
   with app.app_context():
        db.create_all()
        app.run(debug=True)
