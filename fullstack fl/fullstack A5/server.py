from flask import Flask, render_template, request, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime,timezone


app = Flask(__name__)
app.secret_key = "bazinga"

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///courses.db"

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.now(timezone.utc))

class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    content = db.Column(db.Text, nullable=False)
    author = db.Column(db.String(100), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.now(timezone.utc))

@app.route('/')
def index():
    return render_template("index.html")

@app.route("/create_account", methods=['GET', 'POST'])
def create_account():
    if request.method == "POST":
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']

        new_user = User(username=username, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()


        session['username'] = username
        return redirect(url_for("home"))
    else:
        return render_template("create_account.html")
@app.route('/home')
def home():
    posts = Posts.query.order_by(Posts.date_created.desc()).all()
    return render_template("home.html", posts=posts)

@app.route("/create_post", methods=["GET", "POST"])
def create_posts():
    if 'username' not in session:
        return redirect(url_for("create_account"))

    if request.method=="POST":
        title = request.form['title']
        author = session['username']
        content = request.form['content']

        new_posts = Posts(title=title, author=author, content=content)
        db.session.add(new_posts)
        db.session.commit()
        return redirect(url_for("home"))
    else:
        return render_template("create_post.html", username=session['username'])
    
if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
