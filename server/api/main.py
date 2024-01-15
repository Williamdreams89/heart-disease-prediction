from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import json
import numpy as np
from sklearn.preprocessing import StandardScaler


with open("../model/diabetes_pred_model-0.1.0.sav", "rb") as f:
    heart_prediction_model = pickle.load(f)

app = FastAPI()


class ModelInputParams(BaseModel):
    age: int
    sex: int
    pain_type: int
    bp: int
    cholestrol: int
    fbs: int
    ekg: int
    max_hr: int
    angina: int
    depression: float
    slope: int
    vessels: int
    thallium: int

@app.get("/")
def home():
    return "Health check: Every thing is working well"

@app.post('/predict')
def prediction(input_params:ModelInputParams):
    input_data = input_params.json()
    input_dictionary = json.loads(input_data)
    age = input_dictionary["age"]
    sex = input_dictionary["sex"]
    pain_type = input_dictionary["pain_type"]
    bp = input_dictionary["bp"]
    cholestrol = input_dictionary["cholestrol"]
    fbs = input_dictionary["fbs"]
    ekg = input_dictionary["ekg"]
    max_hr = input_dictionary["max_hr"]
    angina = input_dictionary["angina"]
    depression = input_dictionary["depression"]
    slope = input_dictionary["slope"]
    vessels = input_dictionary["vessels"]
    thallium = input_dictionary["thallium"]

    input_list = (age, sex, pain_type, bp, cholestrol, fbs, ekg,max_hr, angina, depression, slope, vessels, thallium)

    # Convert data into numpy array
    input_list_as_array = np.asarray(input_list)

    # Reshape the data for single prediction
    reshaped_data = input_list_as_array.reshape(1, -1)

    # Standardize the data
    std_data = StandardScaler().fit_transform(reshaped_data)

    # predict the standard data 
    model_prediction = heart_prediction_model.predict(std_data) 

    if str(model_prediction) =="['Absence']":
        return "The person does not have a heart disease"
    else:
        "The person have a heart disease"

    


