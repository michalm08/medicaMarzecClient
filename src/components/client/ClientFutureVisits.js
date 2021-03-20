import React from "react";

import { Link } from "react-router-dom";
const ClientFutureVisits = () => {
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
                    <h3>Data: 12.03.2021</h3>
                  </li>
                  <li>
                    <h3>Godzina: 16:00</h3>
                  </li>
                  <li>
                    <h3>Lekarz: Dr Zembrowski</h3>
                  </li>
                  <li>
                    <h3>
                      Potwierdzona: <span>Tak</span>
                    </h3>
                  </li>
                  {/* <Link to="/cancelVisit" className="btnSmall btnNegative"> */}
                  <Link to="/cancelVisit" className="btnSmall btnNegative btnNonActive">
                    Odwołaj wizyte
                  </Link>

                  <Link to="/addDiagnosis" className="btnSmall ">
                    Dodaj diagnoze
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFutureVisits;
