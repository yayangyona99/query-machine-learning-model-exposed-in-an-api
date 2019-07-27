import pickle
from subprocess import call
import matplotlib.pyplot as plt
from sklearn.tree import export_graphviz, DecisionTreeClassifier
import matplotlib
matplotlib.use('TkAgg')


clf = None
with open('model/play_tennis_classifier.pkl', 'rb') as fid:
    clf = pickle.load(fid)

export_graphviz(
    clf,
    out_file="model/tree.dot",
    feature_names=[
        'outlook', 
        'temperature',
        'humidity',
        'wind'
        ],
    rounded=True,
    proportion=False,
    filled=True)

call(['dot', '-Tpng', 'model/tree.dot', '-o', 'images/tree.png', '-Gdpi=600'])


