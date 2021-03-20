import React, { useState } from "react";

import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { editData } from "../../actions/auth";

const ChangePassword = ({ editData }) => {
  const [sent, setSent] = useState(false);
  const [password, setPassword] = useState({ password1: "", password2: "" });
  const onSubmit = (e) => {
    e.preventDefault();

    if (password.password1 !== password.password2) {
      e.target[1].setCustomValidity("Hasła się nie zgadzają");
    } else if (password.password1 === "") {
      console.log("wpisz cos");
    } else {
      editData(null, null, null, null, password.password1);
      setSent(true);
    }
  };

  return (
    <>
      {sent && (
        <Redirect
          to={{
            pathname: "/alertConfirm",
            state: {
              text: "Hasło zmienione",
            },
          }}
        />
      )}
      <div className="noneSection">
        <div className="gHero-image"></div>
        <div className="gPopupParent">
          <div className="gPopup">
            <Link to="/doctorDashboard">
              <i className="fas fa-arrow-left"></i>
            </Link>
            <h1>Zmień hasło</h1>
            {/* <h5>na podany adres zaraz przyjdzie nowe haslo</h5> */}
            <form action="" onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Wpisz nowe hasło"
                required
                className="MarginBottom"
                // value='nono'
                value={password.password1}
                onChange={(e) =>
                  setPassword({
                    ...password,
                    password1: e.target.value,
                  })
                }
              />
              <input
                type="text"
                required
                placeholder="Potwierdź nowe hasło"
                value={password.password2}
                onChange={(e) =>
                  setPassword({
                    ...password,
                    password2: e.target.value,
                  })
                }
              />
              {/* Hasło zmienione ! */}
              <input className="btnSmall" type="submit" value="OK" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { editData })(ChangePassword);
