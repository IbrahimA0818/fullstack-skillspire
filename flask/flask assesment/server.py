from flask import Flask, render_template, redirect, request, session, url_for

app = Flask(__name__)
app.secret_key = 'secret'

# #part 1
@app.route('/')
def home():
    return render_template("home.html")

@app.route('/about')
def about():
    return render_template("about.html")

# part 2/3
@app.route('/contact')
def index():
    return render_template('index.html')


@app.route('/formdata', methods=["GET", "POST"])
def formdata():
    if request.method == "POST":
        session['Lastname'] = request.form.get('Lastname')
        session['Firstname'] = request.form.get('Fname')
        session['Email'] = request.form.get('email')
        session['City'] = request.form.get('city')
        session['State'] = request.form.get('state')
        session['Zipcode'] = request.form.get('Zipcode')

        return redirect(url_for('Show'))
    else:
        return "This route expects a POST request."

@app.route('/result', methods=["GET"])
def Show():
    if 'Lastname' not in session:
        return redirect(url_for("index"))
    
    user = {
        "Lastname": session.get("Lastname"),
        "Firstname": session.get("Firstname"),
        "Email": session.get("Email"),
        "City": session.get("City"),
        "State": session.get("State"),
        "Zipcode": session.get("Zipcode")
    }
    return render_template("result.html", user=user)

#part 4
@app.route('/login', methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get('username')
        password = request.form.get('password')
        
        if username == "admin" and password == "password":
            session['logged_in'] = True
            return redirect(url_for("admin"))
        else:
            return render_template("login.html", error = "invalid username or password. Please try again")
    return render_template("login.html")    

@app.route('/admin')
def admin():
    if session.get("logged_in"):
        return render_template("admin.html", logged_in = True)
    else:
        return render_template("admin.html", logged_in = False)
@app.route('/logout')
def logout():
    session.pop('logged_in', None)  
    return redirect(url_for("login"))

if __name__ == "__main__":
    app.run(debug=True)