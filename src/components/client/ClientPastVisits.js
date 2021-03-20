import React from "react";

import { Link } from "react-router-dom";
const ClientPastVisits = () => {
  return (
    <div>
      
      <div className="multiLoggedSection">
        <div className="gHero-image"></div>
        <div className="gPopupParent">
          <div className="gPopupWide">
            <Link to="/clientDashboard">
              <i
                className="fas fa-arrow-left"
                onClick={() => console.log("poerot")}
              ></i>
            </Link>
            <h1>Wizyta Kontrolna 12.03.2021</h1>
            <div className="content">
              <div className="futureVisits">
                <ul>
                  <li>
                    <h3>Rodzaj Wizyty: Wizyta Kontrolna</h3>
                  </li>
                  <li>
                    <h3>Data: 12.03.2019</h3>
                  </li>
                  <li>
                    <h3>Godzina: 15:00</h3>
                  </li>
                  <li>
                    <h3>Lekarz: Dr Zembrowski</h3>
                  </li>
                  <li>
                    <h3>
                      Diagnoza: Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Quae sapiente modi molestiae
                      exercitationem quidem iure quas?
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPastVisits;
