import __future__ 
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
warnings.filterwarnings('ignore')

jsonn = sys.argv[1]
jsonp = sys.argv[2]
jsonk = sys.argv[3]
jsont = sys.argv[4]
jsonh = sys.argv[5]
jsonph = sys.argv[6]
jsonr = sys.argv[7]

n_params = json.loads(jsonn)
p_params = json.loads(jsonp)
k_params = json.loads(jsonk)
t_params = json.loads(jsont)
h_params = json.loads(jsonh)
ph_params = json.loads(jsonph)
r_params = json.loads(jsonr)

with open('ML/crop_recommendation/croprecommendation.pkl','rb') as f:
    fm= joblib.load(f)
data= np.array([[n_params,p_params,k_params,t_params,h_params,ph_params,r_params]])
prediction=fm.predict(data)

print(str(prediction[0]))