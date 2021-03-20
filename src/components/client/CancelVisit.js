import React from "react";

import { Link } from "react-router-dom";
const CancelVisit = () => {
  return (
    <>
      
      <div className="noneSection">
        <div className="gHero-image"></div>
        <div className="gPopupParent">
          <div className="gPopup">
            <h1>Napewno chcesz odwołać wizyte?</h1>

            <Link
              to={{
                pathname: "/alertConfirm",
                state: {
                  text: "Wizyta odwołana!",
                },
              }}
              className="btnSmall"
            >
              Tak
            </Link>
            <Link
              to={{
                pathname: "/alertConfirm",
                state: {
                  text: "Wizyta nie odwołana!",
                },
              }}
              className="btnSmall"
            >
              Nie
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancelVisit;
