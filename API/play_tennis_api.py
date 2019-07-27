import pickle
from sklearn.tree import DecisionTreeClassifier
from flask import Flask
from flask import request
from flask import jsonify
from gevent.pywsgi import WSGIServer

app = Flask(__name__,
            static_url_path='',
            static_folder='../web-app/dist/web-app',
            template_folder='../web-app/dist/web-app')

clf = None
with open('model/play_tennis_classifier.pkl', 'rb') as fid:
    clf = pickle.load(fid)

@app.route("/api/play-tennis", methods=['POST'])
def classify():
    response = jsonify(classification=-1)
    vector = request.get_json()['vector']
    
    if vector and type(vector) is type([]) and len(vector) == 4:
        classification = int(clf.predict([vector])[0])
        response = jsonify(classification=classification)
    
    return response

@app.route('/', methods=['GET'])
def index():
    return app.send_static_file('index.html')

if __name__ == "__main__":
    http_server = WSGIServer(('', 5000), app)
    http_server.serve_forever()
