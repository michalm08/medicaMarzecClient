import React from "react";

const MyPlain5 = ({ move, visit, actionBack }) => {
  return (
    <div className={`gPopup ${move}`}>
      <i className="fas fa-arrow-left" onClick={actionBack}></i>
      <h1>Twoja wizyta</h1>
      <div className="progress">
        <div className="circle num1"></div>
        <div className="circle num2"></div>
        <div className="circle num3"></div>
        <div className="circle num4"></div>
        <div className="circle num5 full"></div>
      </div>
      <div className="elems">
        <div className="elem1">Doktor</div>
        <div className="elem2"></div>
        <div className="elem3">{visit.doctor}</div>
      </div>
      <div className="elems">
        <div className="elem1">Rodzaj wizyty</div>
        <div className="elem2"></div>
        <div className="elem3">{visit.visitName}</div>
      </div>
      <div className="elems">
        <div className="elem1">Data</div>
        <div className="elem2"></div>
        <div className="elem3">{visit.day}</div>
      </div>
      <div className="elems">
        <div className="elem1">Godzina</div>
        <div className="elem2"></div>
        <div className="elem3">{visit.hour}</div>
      </div>
      {/* <a className="btnSmall">Zatwierdź</a> */}
      <button className="btnSmall">Zatwierdź</button>
    </div>
  );
};

export default MyPlain5;
