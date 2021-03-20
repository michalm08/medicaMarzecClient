import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const DoctorRoute = ({ types, loading, component: Component, ...rest }) => {
  console.log(types);
  console.log(loading);
  return (
    <Route
      {...rest}
      component={() =>
        types !== "admin" && types !== "doctor" && !loading ? (
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

export default connect(mapStateToProps)(DoctorRoute);
