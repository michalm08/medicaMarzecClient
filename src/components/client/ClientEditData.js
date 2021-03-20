import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { editData } from "../../actions/auth";

const ClientEditData = ({ editData, user }) => {
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({
    name: user.name,
    lastname: user.lastname,
    birth: user.patient.birth,
    city: user.patient.city,
    password1: "",
    password2: "",
  });
  const { name, lastname, date, city, password1, password2 } = data;
  const onSubmit = (e) => {
    e.preventDefault();
    if (password1 === password2) {
      editData(name, lastname, date, city, password1);
      setSent(true);
    } else {
      console.log("nie wyslano");
    }
  };

  return (
    <>
      {sent && <Redirect to="/clientDashboard" />}
      <div className="loggedMyDataSection">
        <div className="gHero-image"></div>
        <div className="gPopupParent">
          <div className="gPopup">
            <Link to="/clientDashboard">
              <i className="fas fa-arrow-left"></i>
            </Link>
            <h1>Edytuj moje dane</h1>
            <div className="content">
              <div className="myData">
                <form action="" onSubmit={onSubmit}>
                  <input
                    type="text"
                    value={data.name}
                    // value={user.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                  />
                  <h6>Imie</h6>
                  <input
                    type="text"
                    value={data.lastname}
                    onChange={(e) =>
                      setData({ ...data, lastname: e.target.value })
                    }
                    className="MarginTop"
                  />
                  <h6>Nazwisko</h6>
                  <input
                    type="date"
                    className="MarginTop"
                    min="1920-01-01"
                    max="2020-03-08"
                    value={data.birth}
                    onChange={(e) =>
                      setData({ ...data, birth: e.target.value })
                    }
                  />
                  <h6>Data urodzenia</h6>
                  <input
                    type="text"
                    value={data.city}
                    onChange={(e) => setData({ ...data, city: e.target.value })}
                    className="MarginTop"
                  />
                  <h6>Miejsce zamieszkania</h6>
                  <input
                    type="password"
                    value={data.password1}
                    className="MarginTop"
                    onChange={(e) =>
                      setData({ ...data, password1: e.target.value })
                    }
                  />
                  <h6>Wpisz nowe hasło</h6>
                  <input
                    type="password"
                    value={data.password2}
                    className="MarginTop"
                    onChange={(e) =>
                      setData({ ...data, password2: e.target.value })
                    }
                  />
                  <h6>Potwierdź nowe hasło</h6>
                  <input
                    type="submit"
                    className="btnSmall "
                    value="Zaktualizuj"
                  />
                </form>
              </div>
            </div>
            <Link className="btnSmall btnNegative" to="/confirmDelete">
              Usun profil
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  if (state.auth.user.type === "admin" || state.auth.user.type === "doctor") {
    return { user: state.handle.onePatient };
  } else {
    return { user: state.auth.user };
  }
};

export default connect(mapStateToProps, { editData })(ClientEditData);
