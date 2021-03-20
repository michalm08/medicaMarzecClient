import React, { useState } from "react";

import { Link } from "react-router-dom";
const TodayMeetings = () => {
  const [date, setDate] = useState(12);

  const prev = () => {
    console.log("prev");

    setDate(date - 1);
  };
  const next = () => {
    console.log("next");
    if (date !== 12) {
      setDate(date + 1);
    }
  };
  return (
    <>
      
      <div className="plainSection doctorListSection todayMeetingsSection">
        <div className="gHero-image"></div>
        <div className="gPopupParent">
          <div className="gPopupWide">
            <Link to="/doctorDashboard">
              <i className="fas fa-arrow-left"></i>
            </Link>

            <h1>
              Dzisiejsze spotkania (moze na inne dni tez wpakowac tam meetingi)
            </h1>
            <div className="date">
              <i className="fas fa-arrow-left" onClick={prev}></i>
              <span>{date}.03.2020 </span>
              <i
                className="fas fa-arrow-right"
                onClick={next}
                style={date === 12 ? { color: "grey", cursor: "default" } : {}}
              ></i>
            </div>
            <ul className="myListTop">
              <li className="top">
                <p>Godzina</p>
                <p>Zabieg</p>
                <p>Pacjent</p>
              </li>
            </ul>
            <ul className="myList">
              <li>
                <p>16:00</p>
                <p>
                  <Link to="/clientFutureVisits">Wyrywanie zęba</Link>
                </p>
                <p>
                  <Link to="/clientDashboard">Tomasz zając</Link>
                </p>
              </li>
              <li>
                <p>16:00</p>
                <p>
                  <Link to="/clientFutureVisits">Wyrywanie zęba</Link>
                </p>
                <p>
                  <Link to="/clientDashboard">Tomasz zając</Link>
                </p>
              </li>
              <li>
                <p>16:00</p>
                <p>
                  <Link to="/clientFutureVisits">Wyrywanie zęba</Link>
                </p>
                <p>
                  <Link to="/clientDashboard">Tomasz zając</Link>
                </p>
              </li>
              <li>
                <p>16:00</p>
                <p>
                  <Link to="/clientFutureVisits">Wyrywanie zęba</Link>
                </p>
                <p>
                  <Link to="/clientDashboard">Tomasz zając</Link>
                </p>
              </li>
              <li>
                <p>16:00</p>
                <p>
                  <Link to="/clientFutureVisits">Wyrywanie zęba</Link>
                </p>
                <p>
                  <Link to="/clientDashboard">Tomasz zając</Link>
                </p>
              </li>
              <li>
                <p>16:00</p>
                <p>
                  <Link to="/clientFutureVisits">Wyrywanie zęba</Link>
                </p>
                <p>
                  <Link to="/clientDashboard">Tomasz zając</Link>
                </p>
              </li>
              <li>
                <p>16:00</p>
                <p>
                  <Link to="/clientFutureVisits">Wyrywanie zęba</Link>
                </p>
                <p>
                  <Link to="/clientDashboard">Tomasz zając</Link>
                </p>
              </li>
            </ul>
            {/* <div className="end"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayMeetings;
