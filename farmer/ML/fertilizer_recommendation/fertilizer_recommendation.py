import pandas as pd
import joblib
import numpy as np
import matplotlib.pyplot as plt
from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix
from sklearn.metrics import cohen_kappa_score
from sklearn import metrics
from sklearn import tree
import sys
import json
import warnings
from sklearn.preprocessing import LabelEncoder, OneHotEncoder
warnings.filterwarnings('ignore')

jsonn = sys.argv[1]
jsonp = sys.argv[2]
jsonk = sys.argv[3]
jsont = sys.argv[4]
jsonh = sys.argv[5]
jsonsm = sys.argv[6]
jsonsoil = sys.argv[7]
jsoncrop = sys.argv[8]

n_params = json.loads(jsonn)
p_params = json.loads(jsonp)
k_params = json.loads(jsonk)
t_params = json.loads(jsont)
h_params = json.loads(jsonh)
sm_params = json.loads(jsonsm)



# Load the label encoders for soil type and crop type
with open('ML/fertilizer_recommendation/label_encoder.pkl', 'rb') as f:
    le_soil, le_crop = joblib.load(f)

# Perform label encoding on soil type and crop type
st_encoded = le_soil.transform([jsonsoil])[0]
c_encoded = le_crop.transform([jsoncrop])[0]


with open('ML/fertilizer_recommendation/fertilizerrecommendation.pkl', 'rb') as f:
    fm = joblib.load(f)

data = np.array([[t_params, h_params, sm_params, st_encoded, c_encoded, n_params, p_params, k_params]])
prediction = fm.predict(data)

print(str(prediction[0]))


