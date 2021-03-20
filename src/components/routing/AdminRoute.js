import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({
  types,
  loading,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={() =>
        types !== "admin" && !loading ? (
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

export default connect(mapStateToProps)(AdminRoute);
