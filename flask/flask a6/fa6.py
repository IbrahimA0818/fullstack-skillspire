# To test your knowledge on session. Create a program that displays a number.
# This number will start at 0 when you first visit your webpage.
# Every time you refresh the page the counter should increment by one.
# When you visit localhost:5000/addtwo the counter should increment by two.
# When you visit localhost:5000/reset the counter should reset back to 0.

from flask import Flask, render_template, redirect, request, session, url_for

app = Flask(__name__)
app.secret_key = 'secret'

@app.route('/')
def index():
    if "counter" not in session:
        session['counter'] = 1
    else:
        session['counter'] += 1
    return render_template('index.html')
@app.route('/addtwo')
def addtwo():
    if "counter" not in session:
        session ['counter'] = 1
    else:
        session['counter'] += 2
    return render_template('index.html')
@app.route('/reset')
def reset():
    if "counter" not in session:
        session ['counter'] = 1
    else:
        session ['counter'] = 0
    return redirect(url_for('index'))


if __name__ == "__main__":
    app.run(debug=True)
