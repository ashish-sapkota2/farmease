#!/usr/bin/env python
# coding: utf-8

# In[32]:


import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier


# In[33]:


data = pd.read_csv("fertilizer_recommendation.csv")


# In[34]:


le_soil = LabelEncoder()
data['Soil Type'] = le_soil.fit_transform(data['Soil Type'])
le_crop = LabelEncoder()
data['Crop Type'] = le_crop.fit_transform(data['Crop Type'])


# In[35]:


X = data.iloc[:, :8]
y = data.iloc[:, -1]


# In[36]:


dtc = DecisionTreeClassifier(random_state=0)
dtc.fit(X, y)


# In[37]:


def recommend_fertilizer(temperature, humidity, soil_moisture, soil_type, crop_type, nitrogen, potassium, phosphorous):
    soil_enc = le_soil.transform([soil_type])[0]
    crop_enc = le_crop.transform([crop_type])[0]

    user_input = [[temperature, humidity, soil_moisture, soil_enc, crop_enc, nitrogen, potassium, phosphorous]]

    fertilizer_name = dtc.predict(user_input)

    return fertilizer_name[0]


# In[38]:


temperature = 20
humidity = 55
soil_moisture = 40
soil_type = 'Sandy'
crop_type = 'Wheat'
nitrogen = 20
potassium = 10
phosphorous = 30

recommended_fertilizer = recommend_fertilizer(temperature, humidity, soil_moisture, soil_type, crop_type, nitrogen, potassium, phosphorous)
print("Recommended Fertilizer:", recommended_fertilizer)


# In[46]:


# Split the data into training and testing subsets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)


# In[51]:


from sklearn.metrics import accuracy_score

classifiers = [DecisionTreeClassifier(random_state=0),
               RandomForestClassifier(random_state=0),
               LogisticRegression(random_state=0, solver='liblinear', max_iter=1000),
               SVC(random_state=0),
               KNeighborsClassifier(),
               GradientBoostingClassifier(random_state=0)]

accuracies = []

for classifier in classifiers:
    classifier.fit(X_train, y_train)
    y_pred = classifier.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    accuracies.append(accuracy)

# Print the accuracies
for i, classifier in enumerate(classifiers):
     print(f"Accuracy of {classifier.__class__.__name__}: {accuracies[i]:.3f}")


# In[52]:


import matplotlib.pyplot as plt

classifiers = [DecisionTreeClassifier(random_state=0),
               RandomForestClassifier(random_state=0),
               LogisticRegression(random_state=0, solver='liblinear', max_iter=1000),
               SVC(random_state=0),
               KNeighborsClassifier(),
               GradientBoostingClassifier(random_state=0)]

accuracies = []

for classifier in classifiers:
    classifier.fit(X_train, y_train)
    y_pred = classifier.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    accuracies.append(accuracy)

# Plot the accuracies
class_names = [classifier.__class__.__name__ for classifier in classifiers]

plt.figure(figsize=(10, 6))
plt.bar(class_names, accuracies)
plt.xlabel('Classifier')
plt.ylabel('Accuracy')
plt.title('Classifier Accuracies')
plt.ylim(0, 1.0)
plt.xticks(rotation=45)
plt.show()


# In[ ]:




