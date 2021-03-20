import React, { useState } from "react";


//redux
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import { alert } from "../../actions/alert";
import Alert from "../layout/Alert";

const Register = ({ register, alert }) => {
  const [myuser, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    birth: "",
    city: "",
    password: "",
    password2: "",
    type: "patient",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(myuser);
    if (myuser.password === myuser.password2) {
      // console.log("hasla sie zgadzaja");
      // teraz wysylam to state uzrytkonika
      register(myuser);
    } else {
      console.log("hasla nie sie zgadzaja");
      alert("hasla nie sie zgadzaja", "negative");
    }
  };
  return (
    <>
      <div className="noneSection">
        <div className="gHero-image"></div>
        <div className="gPopupParent">
          <div className="gPopup popup">
            <Alert />
            <h1>Zarejestruj się</h1>
            <form action="" onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Podaj Imie"
                className="MarginBottom"
                // required
                value={myuser.name}
                onChange={(e) => setUser({ ...myuser, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Podaj Nazwisko"
                className="MarginBottom"
                value={myuser.lastname}
                // required
                onChange={(e) =>
                  setUser({ ...myuser, lastname: e.target.value })
                }
              />
              <input
                // type="email"
                type="text"
                placeholder="Podaj email"
                className="MarginBottom"
                value={myuser.email}
                // required
                onChange={(e) => setUser({ ...myuser, email: e.target.value })}
              />
              <input
                type="text"
                // type="date"
                onFocus={(e) => (e.target.type = "date")}
                // onBlur={(e) => (e.target.type = "text")}
                placeholder="Podaj date urodzenia"
                className="MarginBottom"
                value={myuser.birth}
                // required
                onChange={(e) => setUser({ ...myuser, birth: e.target.value })}
                min="1920-01-01"
                max="2020-03-08"
              />

              <input
                type="text"
                placeholder="Podaj miasto zamieszkania"
                className="MarginBottom"
                value={myuser.city}
                // required
                onChange={(e) => setUser({ ...myuser, city: e.target.value })}
              />
              <input
                type="password"
                placeholder="Podaj haslo"
                className="MarginBottom"
                value={myuser.password}
                // minlength="6"
                // required
                onChange={(e) =>
                  setUser({ ...myuser, password: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Powtórz haslo"
                className="MarginBottom"
                value={myuser.password2}
                // minlength="6"
                // required
                onChange={(e) =>
                  setUser({ ...myuser, password2: e.target.value })
                }
              />
              {/* <a className="btnSmall">Zarejestruj</a> */}
              {/* cos z czcionka sie zmienilo jak zmienilem z a na button oczbaic to */}
              <input type="submit" className="btnSmall" value="Zarejestruj" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { register, alert })(Register);
