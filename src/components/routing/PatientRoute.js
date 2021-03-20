import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// type == "doctor" || type == "admin" || type == "patient"
const PatientRoute = ({ types, loading, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={() =>
        types !== "admin" &&
        types !== "doctor" &&
        types !== "patient" &&
        !loading ? (
          <Redirect to="/niezalogowany" />
        ) : (
          <Component />
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    types: state.auth.user.type,
    loading: state.auth.loading,
  };
};

export default connect(mapStateToProps)(PatientRoute);
