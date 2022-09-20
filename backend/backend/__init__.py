from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = "TikTok App"
CORS(app)

# urls
import backend.api
import backend.test