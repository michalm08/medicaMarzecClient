import React from "react";

const MyPlain1 = ({ move, action }) => {
  return (
    <div className={`gPopup ${move}`}>
      <h1>Zaplanuj wizyte</h1>
      <div className="progress">
        <div className="circle num1 full"></div>
        <div className="circle num2"></div>
        <div className="circle num3"></div>
        <div className="circle num4"></div>
        <div className="circle num5"></div>
      </div>
      <ul className="myList">
        <li onClick={action}>Wizyta kontrolna</li>
        <li onClick={action}>Szczotkowanie</li>
        <li onClick={action}>Piaskowanie</li>
        <li onClick={action}>Wyrywanie zęba</li>
        <li onClick={action}>Dentysta</li>
      </ul>
    </div>
  );
};

export default MyPlain1;
