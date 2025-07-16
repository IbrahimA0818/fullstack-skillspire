from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime,timezone


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///courses.db"

db = SQLAlchemy(app)

class Course(db.Model):
   id = db.Column(db.Integer, primary_key=True)
   name = db.Column(db.String(100), nullable = False)
   description = db.Column(db.String(1000), nullable = False)
   date_created = db.Column(db.DateTime, default= datetime.now(timezone.utc))


@app.route('/')
def index():
   courses = Course.query.all()
   return render_template("index.html", courses = courses)

@app.route('/addcourse', methods = ['POST'])
def addcourse():
   name = request.form['name']
   description = request.form['description']

   course = Course(name = name, description = description)

   db.session.add(course)

   try:
      db.session.commit()
   except Exception as e:
      db.session.rollback()
      print("Error:", e)

   return redirect('/')



@app.route('/display_course/<int:id>')
def display_course(id):
   course = Course.query.get(id)

   return render_template("delete_course.html", course = course)


@app.route('/delete_course/<int:id>')
def delete_course(id):
   course = Course.query.get(id)

   db.session.delete(course)

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

