from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route ('/contact', methods=['POST'])
def contact():
    data= request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    print(f"Received message from {name ({email}):{message}}")
    return jsonify({"message": "Message received successfully!"})

if __name__ == '__main__':
    app.run(debug=True)