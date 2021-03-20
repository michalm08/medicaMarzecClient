import React, { useState } from "react";

import { Link } from "react-router-dom";
import { login } from "../../actions/auth";
import { connect } from "react-redux";
import Navbar from "../nav/Navbar";

const Login = ({ login, type }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    login(data.email, data.password);
  };

  return (
    <>
      {/* {(type && type === "patient" && <Redirect to="/clientDashboard" />) ||
        (type === "admin" && <Redirect to="/adminDashboard" />)} */}
      <Navbar />
      <div className="noneSection">
        <div className="gHero-image"></div>
        <div className="gPopupParent">
          <div className="gPopup">
            <h1 onClick={() => console.log(localStorage.getItem("myToken"))}>
              Zaloguj się
            </h1>
            <form action="" onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Podaj email"
                className="MarginBottom"
                value={data.email}
                // onChange={}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="Podaj haslo"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              <Link to="/forgotPassword">
                <h6 className="pointer">Zapomniałeś hasła?</h6>
              </Link>

              <input type="submit" className="btnSmall" value="Login" />
            </form>
            <br />
            <Link to="/clientDashboard">Client</Link>
            <Link to="/adminDashboard">Admin</Link>
            <Link to="/doctorDashboard">Doctor</Link>
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

export default connect(mapStateToProps, { login })(Login);
