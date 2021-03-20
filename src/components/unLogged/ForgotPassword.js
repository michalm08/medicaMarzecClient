import React from "react";

import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <>
      
      <div className="noneSection">
        <div className="gHero-image"></div>
        <div className="gPopupParent">
          <div className="gPopup">
            <h1>Wpisz swoj email</h1>
            {/* <h5>na podany adres zaraz przyjdzie nowe haslo</h5> */}
            <input type="text" placeholder="email" />
            {/*wroc to='/' */}
            <Link
              to={{
                pathname: "/alertConfirm",
                state: {
                  text: "Sprawdz skrzynke mailową!",
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

export default ForgotPassword;
