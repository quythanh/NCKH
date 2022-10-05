from os import path

from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def create_database(app):
    if not path.exists('src/database/db.sqlite3'):
        db.create_all(app=app)
        print("CREATE DATABASE !!!")


def create_app():
    app = Flask(__name__)

    # config
    app.config['SECRET_KEY'] = 'secret'
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database/db.sqlite3"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True

    # database
    db.init_app(app)

    # define url prefix
    from src.api.users import users
    from src.api.tables import tables

    app.register_blueprint(users, url_prefix='/api/users')
    app.register_blueprint(tables, url_prefix='/api/tables')

    CORS(app)

    create_database(app=app)

    return app
