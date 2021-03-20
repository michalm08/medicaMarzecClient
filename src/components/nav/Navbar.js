import React from "react";
import { connect } from "react-redux";
import NavAdmin from "./NavAdmin";
import NavDoctor from "./NavDoctor";
import NavPatient from "./NavPatient";
import NavUnlogged from "./NavUnlogged";

const Navbar = ({ type }) => {
  false && console.log("koko");

  if (type === "admin") {
    return <NavAdmin />;
  } else if (type === "doctor") {
    return <NavDoctor />;
  } else if (type === "patient") {
    return <NavPatient />;
  } else {
    return <NavUnlogged />;
  }
};

const mapStateToProps = (state) => {
  return {
    type: state.auth.user.type,
  };
};

export default connect(mapStateToProps)(Navbar);
