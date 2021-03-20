import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

const Landing = ({ type }) => {
  return (
    <>
      {/* {(type && type === "client" && <Redirect to="/clientDashboard" />) ||
        (type === "admin" && <Redirect to="/adminDashboard" />)} */}
      <div className="landingSection">
        <div className="gHero-image sharpHero-image"></div>
        <div className="gPopupParent">
          <div>
            {/* <a href="" className="btnBig1"> */}
            <Link to="/login" className="btnBig1">
              Zaloguj
            </Link>

            <Link to="/plainanimate" className="btnBig2">
              Zaplanuj wizyte
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    type: state.auth.user.type,
  };
};

export default connect(mapStateToProps)(Landing);
