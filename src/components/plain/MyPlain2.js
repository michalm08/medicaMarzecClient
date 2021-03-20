import React from "react";

const MyPlain2 = ({ move, action, actionBack }) => {
  return (
    <div className={`gPopup ${move}`}>
      <i className="fas fa-arrow-left" onClick={actionBack}></i>
      <h1>Wybierz Ulubionego lekarza</h1>
      <div className="progress">
        <div className="circle num1"></div>
        <div className="circle num2 full"></div>
        <div className="circle num3"></div>
        <div className="circle num4"></div>
        <div className="circle num5"></div>
      </div>
      <ul className="myList">
        <li onClick={action}>Dr. Miałkowkski</li>
        <li onClick={action}>Dr. Filipiak</li>
        <li onClick={action}>Dr. House</li>
      </ul>
    </div>
  );
};

export default MyPlain2;
