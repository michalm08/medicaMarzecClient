import React from "react";

import { Link } from "react-router-dom";
const AddDiagnosis = () => {
  return (
    <>
      
      <div className="noneSection">
        <div className="gHero-image"></div>
        <div className="gPopupParent">
          <div className="gPopup">
            <h1>Dodaj diagnoze</h1>
            {/* <h5>na podany adres zaraz przyjdzie nowe haslo</h5> */}
            {/* zmienie zaraz na textarea */}
            <textarea
              placeholder="Podaj diagnoze"
              rows="4"
              className="MarginBottom"
            ></textarea>
            <Link
              to={{
                pathname: "/alertConfirm",
                state: {
                  text: "Diagnozę dodano!",
                },
              }}
              className="btnSmall"
            >
              OK
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDiagnosis;
