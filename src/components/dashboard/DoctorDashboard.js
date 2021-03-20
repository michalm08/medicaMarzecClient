import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

const DoctorDashboard = () => {
  return (
    <div>
      <div className="adminSection dashboardSection">
        <div className="gHero-image"></div>
        <div className="gPopupParent">
          <div className="gPopupWide">
            <h1>Witaj się doktorze</h1>
            <ul className="myList">
              <li>
                <h2 className="nonActive">pobierz liste zapisanych wczoraj</h2>
              </li>
              <li>
                <Link to="/findPatient">
                  <h2>wyszukaj pasjenta</h2>
                </Link>
              </li>
              <li>
                <Link to="/todayMeetings">
                  <h2 className="nonActive">dzisiejsze spotkania lista</h2>
                </Link>
              </li>
              <li>
                <Link to="/changePassword">
                  <h2>zmien haslo</h2>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {})(DoctorDashboard);
