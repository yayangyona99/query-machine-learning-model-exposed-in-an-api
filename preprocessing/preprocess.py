import pandas as pd
from sklearn.preprocessing import LabelEncoder

df = pd.read_csv('data/play_tennis.csv', index_col=None, header=0)

le = LabelEncoder()

df_encoded = pd.DataFrame()
key_value = []
for column_name in df.columns:
    df_encoded[column_name] = le.fit_transform(df[column_name])
    for idx, value_name in enumerate(le.classes_ ):
        key_value.append([value_name, idx])

pd.DataFrame(key_value).to_csv('data/encoded_mappings.csv', index=None, header=None)
df_encoded.to_csv('data/play_tennis_encoded.csv', index=None)
