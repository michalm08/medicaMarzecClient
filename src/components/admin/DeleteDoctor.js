import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { showDoctors } from "../../actions/handle";
import spinner from "../../img/spinner.svg";
const DeleteDoctor = ({ showDoctors, doctors }) => {
  useEffect(() => {
    showDoctors();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      {!doctors ? (
        <div className="spinnerContainer">
          <img src={spinner} alt="spinner" />
        </div>
      ) : (
        <>
          <div className="doctorListSection">
            <div className="gHero-image"></div>
            <div className="gPopupParent">
              <div className="gPopup popup">
                <Link to="/adminDashboard">
                  <i className="fas fa-arrow-left"></i>
                </Link>
                <h1>Lista lekarzy</h1>
                <ul className="myList">
                  {doctors &&
                    doctors.map((doctor) => (
                      <li key={doctor._id}>
                        <p>
                          {doctor.name} {doctor.lastname}
                        </p>

                        <Link
                          to={{
                            pathname: "/confirmDelete",
                            state: {
                              doctor: doctor,
                            },
                          }}
                          className="btn"
                        >
                          X{/* <i className="fas fa-times"></i> */}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  doctors: state.handle.doctors,
});
export default connect(mapStateToProps, { showDoctors })(DeleteDoctor);
