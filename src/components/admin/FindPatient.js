import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import spinner from "../../img/spinner.svg";
import { patientsAction } from "../../actions/handle";

const FindPatient = ({ patients, patientsAction, type }) => {
  useEffect(() => {
    patientsAction();
    //eslint-disable-next-line
  }, []);
  // const [myPatients, setMyPatients] = useState('');
  const [myPatients, setMyPatients] = useState({ id: "", name: "" });

  const [word, setWord] = useState("");

  const onChange = (e) => {
    setWord(e.target.value);

    //nowy obiekt z idy i imienionswisko
    let newPatients = patients.map((patient) => ({
      id: patient._id,
      name: patient.name + " " + patient.lastname,
    }));
    console.log(newPatients);

    //filtrujemy
    newPatients = newPatients.filter(
      (patient) => patient.name.toLowerCase().indexOf(e.target.value) !== -1
    );
    console.log(newPatients);

    setMyPatients(newPatients);
  };

  return (
    <>
      {/* {!patients ? (
      <div className="spinnerContainer">
        <img src={spinner} alt="spinner" />
      </div>
    ) : (<p></p>)} */}
      {patients.length===0 ? (
        <div className="spinnerContainer">
          <img src={spinner} alt="spinner" />
        </div>
      ) : (
        <div className="noneSection">
          <div className="gHero-image"></div>
          <div className="gPopupParent">
            <div className="gPopup popup">
              {type === "admin" ? (
                <Link to="/adminDashboard">
                  <i className="fas fa-arrow-left"></i>
                </Link>
              ) : (
                <Link to="/doctorDashboard">
                  <i className="fas fa-arrow-left"></i>
                </Link>
              )}
              <h1>Znajdź pacjenta</h1>
              <input
                type="text"
                placeholder="Wpisz imie osoby której szukasz"
                value={word}
                onChange={onChange}
              />
              <ul className="myList">
                {myPatients.name === ""
                  ? patients.map((patient) => (
                      <li key={patient._id}>
                        <Link
                          to={`/clientDashboard/${patient._id}`}
                          key={patient._id}
                        >
                          {patient.name} {patient.lastname}
                        </Link>
                      </li>
                    ))
                  : myPatients.map((patient) => (
                      <li>
                        <Link
                          to={`/clientDashboard/${patient.id}`}
                          key={patient.id}
                        >
                          {patient.name}
                        </Link>
                      </li>
                    ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  patients: state.handle.patients,
  type: state.auth.user.type,
});
export default connect(mapStateToProps, { patientsAction })(FindPatient);
