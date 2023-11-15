import { useState } from "react";
import "./VitalInput.css";
import { BarGraphIcon, SettingsIcon, UserIcon } from "../../icons/";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faGear, faChartLine } from "@fortawesome/free-solid-svg-icons";

function Logo() {
  return (
    <Link to="/" className="logo-type">
      Sepsig
    </Link>
  );
}

function Header() {
  return (
    <div>
      <h1>Input your vitals:</h1>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer">© 2023 Sepsig. All rights reserved.</div>
    </footer>
  );
}

function InputBox(props) {
  return (
    <div className="input-box">
      <label for={props.name}>{props.name}: </label>
      <input type="number" id={props.id} />
    </div>
  );
}

function VitalInput() {
  return (
    <>
      <Logo />
      <Header />
      <div>
        <InputBox name="Heart Rate" id="heartRate" />
        <InputBox name="Respitory Rate" id="respiratoryRate" />
        <InputBox name="Body Temperature" id="bodyTemperature" />
        <InputBox name="Systolic Blood Pressure" id="sysBloodPressure" />
        <InputBox name="Diastolic Blood Pressure" id="diaBloodPressure" />
      </div>
      <div className="card">
        <button className="update-data" onClick={() => null}>
          UPDATE DATA
        </button>
      </div>
      <Link to="/visualize">
        <BarGraphIcon className="icon-bar-graph" />
      </Link>
      <SettingsIcon className="icon-settings" />
      <UserIcon className="icon-user" />
      {/* <FontAwesomeIcon className="icon-user" icon={faUser} /> */}
      <Footer />
    </>
  );
}

export default VitalInput;
