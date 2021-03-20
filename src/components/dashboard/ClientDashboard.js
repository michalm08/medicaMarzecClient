import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { onePatientAction } from "../../actions/handle";

const ClientDashboard = ({ user, onePatient, onePatientAction }) => {
  const { id } = useParams();
  useEffect(() => {
    (user.type === "doctor" || user.type === "admin") && onePatientAction(id);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="multiLoggedSection">
        <div className="gHero-image"></div>
        <div className="gPopupParent">
          <div className="gPopupWide">
            {user.type === "doctor" || user.type === "admin" ? (
              <Link to="/findPatient">
                <i className="fas fa-arrow-left"></i>
              </Link>
            ) : (
              <></>
            )}

            <h1>Mój panel uzytkownika</h1>
            <div className="content">
              <div className="myData">
                <h2>Moje dane</h2>

                <Link to="/clientEditData">
                  <h6 className="edit">Edytuj</h6>
                </Link>
                <h3>
                  {user.type === "doctor" || user.type === "admin"
                    ? onePatient.name
                    : user.name}
                </h3>
                <h6>Imie</h6>
                <h3>
                  {user.type === "doctor" || user.type === "admin"
                    ? onePatient.lastname
                    : user.lastname}
                </h3>
                <h6>Nazwisko</h6>
                <h3>
                  {user.type === "doctor" || user.type === "admin"
                    ? onePatient.patient.birth
                    : user.patient.birth}
                </h3>
                <h6>Data urodzenia</h6>
                <h3>
                  {user.type === "doctor" || user.type === "admin"
                    ? onePatient.patient.city
                    : user.patient.city}
                </h3>
                <h6>Miejsce zamieszkania</h6>
              </div>

              <div className="futureVisits">
                <h2>Przyszłe wizyty</h2>
                <ul>
                  <li>
                    <Link to="/clientFutureVisits">
                      <h3>Wizyta Kontrolna 12.03.2021</h3>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="pastVisits">
                <h2>Przeszłe wyzyty</h2>
                <ul>
                  <li>
                    <Link to="/clientPastVisits">
                      <h3>Wizyta Kontrolna 23.02.2021</h3>
                    </Link>
                  </li>
                  <li>
                    <Link to="/clientPastVisits">
                      <h3>Ortodonta 02.01.2021</h3>
                    </Link>
                  </li>
                  <li>
                    <Link to="/clientPastVisits">
                      <h3>Piaskowanie 18.10.2020</h3>
                    </Link>
                  </li>
                  <li>
                    <Link to="/clientPastVisits">
                      <h3>Piaskowanie 18.10.2020</h3>
                    </Link>
                  </li>
                  <li>
                    <Link to="/clientPastVisits">
                      <h3>Piaskowanie 18.10.2020</h3>
                    </Link>
                  </li>
                  <li>
                    <Link to="/clientPastVisits">
                      <h3>Piaskowanie 18.10.2020</h3>
                    </Link>
                  </li>
                  <li>
                    <Link to="/clientPastVisits">
                      <h3>Piaskowanie 18.10.2020</h3>
                    </Link>
                  </li>
                  <li>
                    <Link to="/clientPastVisits">
                      <h3>Piaskowanie 18.10.2020</h3>
                    </Link>
                  </li>
                  <li>
                    <Link to="/clientPastVisits">
                      <h3>Piaskowanie 18.10.2020</h3>
                    </Link>
                  </li>
                  <li>
                    <Link to="/clientPastVisits">
                      <h3>Piaskowanie 18.10.2020</h3>
                    </Link>
                  </li>
                  <li>
                    <Link to="/clientPastVisits">
                      <h3>Piaskowanie 18.10.2020</h3>
                    </Link>
                  </li>
                  <li>
                    <Link to="/clientPastVisits">
                      <h3>Piaskowanie 18.10.2020</h3>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  onePatient: state.handle.onePatient,
});

// const mapStateToProps = (state) => {
//   if (state.auth.user.type === "admin" || state.auth.user.type === "doctor") {
//     return { user: state.handle.onePatient };
//   } else {
//     return { user: state.auth.user };
//   }
// };

export default connect(mapStateToProps, { onePatientAction })(ClientDashboard);
