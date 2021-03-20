import React from "react";

const MyPlain5 = ({ move, action, actionBack }) => {
  return (
    <div className={`gPopup ${move}`}>
      <i className="fas fa-arrow-left" onClick={actionBack}></i>
      <h1>Wybierz Godzine</h1>
      <div className="progress">
        <div className="circle num1"></div>
        <div className="circle num2"></div>
        <div className="circle num3"></div>
        <div className="circle num4 full"></div>
        <div className="circle num5"></div>
      </div>
      <ul className="myList">
        <li onClick={action}>9:00</li>
        <li onClick={action}>10:00</li>
        <li onClick={action}>11:00</li>
        <li onClick={action}>12:00</li>
        <li onClick={action}>13:00</li>
        <li onClick={action}>14:00</li>
        <li onClick={action}>15:00</li>
        <li onClick={action}>16:00</li>
        <li onClick={action}>17:00</li>
        <li onClick={action}>18:00</li>
        <li onClick={action}>19:00</li>
        <li onClick={action}>20:00</li>
        <li onClick={action}>21:00</li>
      </ul>
    </div>
  );
};

export default MyPlain5;
