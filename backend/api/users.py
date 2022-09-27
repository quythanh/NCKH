from datetime import datetime

from utils.db import execute, checkAuth

class Users:
    def auth(username, password):
        data = checkAuth(username, password)
        return data

    def post(username, password, email):
        now = str(datetime.now())
        query = ('INSERT INTO Users(username, password, email, date_joined,'
            'is_superuser) VALUES(?, ?, ?, ?, ?)')
        params = (username, password, email, now, 0)

        try:
            execute(query, params)
            return True
        except Exception as error:
            print(error)
            return False
        