import React, { useState, useEffect } from "react";

import doctor1 from "../../img/doctor1.png";
import doctor2 from "../../img/doctor2.png";
import doctor3 from "../../img/doctor3.png";
import { connect } from "react-redux";
import { showDoctors } from "../../actions/handle";
import spinner from "../../img/spinner.svg";

const Doctors = ({ showDoctors, doctors }) => {
  useEffect(() => {
    showDoctors();
  }, []);
  return (
    <>
      {!doctors ? (
        <div className="spinnerContainer">
          <img src={spinner} alt="spinner" />
        </div>
      ) : (
        <div className="doctorsSection">
          <ul>
            {doctors.map((doctor) => (
              <li>
                <img src={doctor.doctor.img} alt="doktor3" />
                <div className="describe">
                  <h1>
                    {doctor.name} {doctor.lastname}
                  </h1>
                  <h3>{doctor.doctor.note}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  doctors: state.handle.doctors,
});
export default connect(mapStateToProps, { showDoctors })(Doctors);
