from flask import request, redirect, render_template

from backend import app
from api.users import Users

@app.route('/api/users/register', methods=['POST'])
def Register():
    username = request.form.get('username')
    password = request.form.get('password')
    email = request.form.get('email')

    if Users.post(username, password, email) == True:
        return redirect('/sign-in')
    return 'Error'


@app.route('/api/users/auth', methods=['POST'])
def Auth():
    username = request.form.get('username')
    password = request.form.get('password')

    user = Users.auth(username, password)

    if user != None:
        return render_template('setLogin.html', user=user)
    return 'Error'