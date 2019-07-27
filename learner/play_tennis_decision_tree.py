import pandas as pd
import pickle
from sklearn.tree import DecisionTreeClassifier

data = pd.read_csv('data/play_tennis_encoded.csv', index_col=None, header=0)

X = data.drop('play_tennis?', 1).copy().values
y = data['play_tennis?'].copy().values

clf = DecisionTreeClassifier(criterion="entropy")
clf.fit(X, y)
score = clf.score(X, y)

# Expecting 100% accuracy
assert(int(score) == 1)

# Save model to disk
with open('model/play_tennis_classifier.pkl', 'wb') as fid:
    pickle.dump(clf, fid)
