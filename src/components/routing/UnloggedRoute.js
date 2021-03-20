import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const UnloggedRoute = ({ type, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={() => {
      switch (type) {
        case "admin":
          return <Redirect to="/adminDashboard" />;
        case "doctor":
          return <Redirect to="/doctorDashboard" />;
        case "patient":
          return <Redirect to="/clientDashboard" />;
        default:
          return <Component />;
      }
    }}
  />
);

const mapStateToProps = (state) => {
  return {
    type: state.auth.user.type,
  };
};

export default connect(mapStateToProps)(UnloggedRoute);
