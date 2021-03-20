import React, { useEffect, useState } from "react";

import { Redirect } from "react-router-dom";
const AlertConfirm = (props) => {
  const { text } = props.location.state;
  const [redirectMe, SetRedirectMe] = useState(false);
  useEffect(() => {
    setTimeout(() => SetRedirectMe(true), 1000);
  }, []);

  return (
    <>
      {redirectMe ? <Redirect to="/" /> : <></>}
      
      <div className="noneSection">
        <div className="gHero-image"></div>
        <div className="gPopupParent">
          <div className="gPopup">
            <h1>{text}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertConfirm;
