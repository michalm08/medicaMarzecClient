import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteMe } from "../../actions/auth";
import { deleteDoctor } from "../../actions/auth";

const ConfirmDelete = (props) => {
  const { deleteMe, deleteDoctor, type } = props;
  let doctor = {};
  if (type === "admin") {
    doctor = props.location.state.doctor;
  }
  return (
    <>
      <div className="noneSection">
        <div className="gHero-image"></div>
        <div className="gPopupParent">
          <div className="gPopup">
            {type === "admin" && (
              <h1>
                {doctor.name} {doctor.lastname}
              </h1>
            )}

            <h3>Napewno chcesz usunac ten profil?</h3>

            <Link
              to={{
                pathname: "/alertConfirm",
                state: {
                  text: "Profil nie został usunięty!",
                },
              }}
              className="btnSmall"
            >
              Nie
            </Link>

            {/* {type === "admin" ?onClick={() => deleteDoctor(doctor._id)}:onClick={deleteMe}} */}
            <Link
              onClick={
                type === "admin" ? () => deleteDoctor(doctor._id) : deleteMe
              }
              to={{
                pathname: "/alertConfirm",
                state: {
                  text: "Profil został usunięty!",
                },
              }}
              className="btnSmall btnNegative"
            >
              Tak
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  type: state.auth.user.type,
});
export default connect(mapStateToProps, { deleteMe, deleteDoctor })(
  ConfirmDelete
);
