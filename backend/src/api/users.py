from flask import Blueprint, request, redirect, render_template

from src.models.users import ModelUsers

users = Blueprint('users', __name__)

@users.route('/register', methods=['POST'])
def User_Register():
    username = request.form.get('username')
    password = request.form.get('password')
    email = request.form.get('email')

    if ModelUsers.create(username=username, password=password, email=email):
        return redirect('/sign-in')
    return 'Error'


@users.route('/auth', methods=['POST'])
def User_Auth():
    username = request.form.get('username')
    password = request.form.get('password')

    data = ModelUsers.get_user(username, password)
    if (len(data) == 1):
        user = {"id": data[0][0], "username": data[0][1]}
        return render_template('setLogin.html', user=user)
    return 'Error'
