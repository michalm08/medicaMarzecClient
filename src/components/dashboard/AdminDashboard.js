import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { takeOpenHours } from "../../actions/handle";
import { showPrices } from "../../actions/handle";

const AdminDashboard = ({ takeOpenHours, showPrices }) => {
  useEffect(() => {
    takeOpenHours();
    showPrices();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className="dashboardSection ">
        <div className="gHero-image"></div>
        <div className="gPopupParent">
          <div className="gPopupWide">
            <h1 className="MarginBottom">Witaj się adminie</h1>
            <ul className="myList">
              <li>
                <h2 className="nonActive">pobierz liste zapisanych wczoraj</h2>
              </li>
              <li>
                <Link to="/addDoctor">
                  <h2>dodaj lekarza</h2>
                </Link>
              </li>
              <li>
                <Link to="/deleteDoctor">
                  <h2>usun lekarza</h2>
                </Link>
              </li>
              <li>
                <Link to="/changeOpenHours" >
                  <h2>zmien godziny otwarcia</h2>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/addNews">
                  <h2>dodaj aktualnosc</h2>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/findPatient">
                  <h2>wyszukaj pasjenta(edytuj tam jego dane)</h2>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/changePrices">
                  <h2>Zmien cennik, dodaj usluge</h2>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { takeOpenHours, showPrices })(AdminDashboard);
