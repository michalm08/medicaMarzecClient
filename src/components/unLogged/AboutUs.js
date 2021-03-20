import React, { useEffect } from "react";
import { connect } from "react-redux";

import { takeOpenHours } from "../../actions/handle";

const AboutUs = ({ takeOpenHours,hours }) => {
  useEffect(() => {
    takeOpenHours();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      {hours&&(

      <div className="aboutSection">
        <h1>O nas</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi
          cupiditate nihil in quidem provident labore laborum ratione
          laboriosam. Cum quam debitis, ipsum accusantium magni animi
          consequatur in totam assumenda.
        </h3>
        <div className="contact">
          <div className="columnOne">
            <div className="openHours">
              <h2>Godziny otwarcia:</h2>
              <h3>
                Poniedziałek: <span>{hours.monday.start}</span>-<span>{hours.monday.end}</span>
              </h3>
              <h3>
                Wtorek: <span>{hours.tuesday.start}</span>-<span>{hours.tuesday.end}</span>
              </h3>
              <h3>
                Środa: <span>{hours.wednesday.start}</span>-<span>{hours.wednesday.end}</span>
              </h3>
              <h3>
                Czwartek: <span>{hours.thursday.start}</span>-<span>{hours.thursday.end}</span>
              </h3>
              <h3>
                Piątek: <span>{hours.friday.start}</span>-<span>{hours.friday.end}</span>
              </h3>
              <h3>
                Sobota: <span>{hours.saturday.start}</span>-<span>{hours.saturday.end}</span>
              </h3>
              <h3>
                Neidziela: <span>{hours.sunday.start}</span>-<span>{hours.sunday.end}</span>
              </h3>
            </div>
            <div className="adress">
              <h2>Gdzie nas znajdziesz:</h2>
              <h3>Wiatraczna 8</h3>
              <h3>Warszawa</h3>
              <h3>795 891 874</h3>
            </div>
          </div>

          {/* <img src="./img/map.png" alt="" /> */}
          {/* <img src={map} alt="map" /> */}
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4482.855881144678!2d21.010279536436947!3d52.24551187553757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc6727c9fd1f%3A0x4dc87fb2ff8f73c0!2sKino%20Kultura!5e0!3m2!1spl!2spl!4v1615045422568!5m2!1spl!2spl"
            width="500"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  hours: state.handle.hours,
});

// export default AboutUs;
export default connect(mapStateToProps, { takeOpenHours })(AboutUs);
// export default connect(mapStateToProps)(AboutUs);
