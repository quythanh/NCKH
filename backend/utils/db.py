import sqlite3

db_path = 'db.sqlite3'

def execute(query, params = ()):
    con = sqlite3.connect(db_path)
    cur = con.execute(query, params)
    con.commit()
    con.close()
    return cur.rowcount


def checkAuth(username, password):
    query = "SELECT id FROM Users WHERE password = ? AND "
    query += 'email' if "@" in username else 'username'
    query += " = ?"

    con = sqlite3.connect(db_path)
    cur = con.execute(query, (password, username))
    listId = []
    for i in cur:
        listId.append({"id": i[0], "username": username})
    con.commit()
    con.close()

    if len(listId) == 1:
        return listId[0]
    return None
