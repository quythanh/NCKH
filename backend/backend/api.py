from backend import app

@app.route('/api/', methods=['GET'])
def index():
    return 'hello'

