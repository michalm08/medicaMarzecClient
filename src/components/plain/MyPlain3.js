import React from "react";

const MyPlain3 = ({ move, action, actionBack }) => {
  return (
    <div className={`gPopup ${move}`}>
      <i className="fas fa-arrow-left" onClick={actionBack}></i>
      <h1>Wybierz Dzień tygodnia</h1>
      <div className="progress">
        <div className="circle num1"></div>
        <div className="circle num2"></div>
        <div className="circle num3 full"></div>
        <div className="circle num4"></div>
        <div className="circle num5"></div>
      </div>
      <ul className="myList">
        <li onClick={action}>Poniedziałek 22.01</li>
        <li onClick={action}>Wtorek 23.01</li>
        <li onClick={action}>Środa 24.01</li>
        <li onClick={action}>Czwartek 25.01</li>
        <li onClick={action}>Piątek 26.01</li>
        <li onClick={action}>Sobota 27.01</li>
        <li onClick={action}>Niedziela 28.01</li>
      </ul>
    </div>
  );
};

export default MyPlain3;
