from os import environ
from backend import app

if __name__ == "__main__":
    HOST = environ.get('SERVER_HOST', 'localhost')
    PORT = int(environ.get('SERVER_PORT', '5555'))
    app.run(HOST, PORT, debug=True)
