import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Prompt:wght@600&display=swap');
      </style>
      <div className="logo-type">Sepsig</div>
      <div>
        <h1>Vital Input Page</h1>
        <h2>Input Data</h2>
      </div>
      <div>
        <div className="input-box">
          <label for="Patient ID">Patient ID: </label>
          <input type="number" id="patientID" />
        </div>
        <div className="input-box">
          <label for="heart rate">Heart Rate: </label>
          <input type="number" id="heartRate" />
        </div>
        <div className="input-box">
          <label for="respitory rate">Respitory Rate: </label>
          <input type="number" id="respiratoryRate" />
        </div>
        <div className="input-box">
          <label for="body temperature">Body Temperature: </label>
          <input type="number" id="bodyTemperature" />
        </div>
        <div className="input-box">
          <label for="systolic blood pressure">Systolic Blood Pressure: </label>
          <input type="number" id="sysBloodPressure" />
        </div>
        <div className="input-box">
          <label for="diastolic blood pressure">
            Diastolic Blood Pressure:{" "}
          </label>
          <input type="number" id="diaBloodPressure" />
        </div>
      </div>
      <div className="card">
        <button>ADD PATIENT</button>
        <button>UPDATE DATA</button>
      </div>
    </>
  );
}

export default App;
