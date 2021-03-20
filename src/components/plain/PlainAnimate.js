import React, { useState } from "react";
import MyPlain1 from "./MyPlain1";
import MyPlain2 from "./MyPlain2";
import MyPlain3 from "./MyPlain3";
import MyPlain4 from "./MyPlain4";
import MyPlain5 from "./MyPlain5";
const Plain = () => {
  const [move1, setMove1] = useState("centerPosition");
  const [move2, setMove2] = useState("rightPosition");
  const [move3, setMove3] = useState("rightPosition");
  const [move4, setMove4] = useState("rightPosition");
  const [move5, setMove5] = useState("rightPosition");
  const [visit, setVisit] = useState({
    visitName: "",
    doctor: "",
    day: "",
    hour: "",
  });

  const moveAction1 = (value) => {
    setVisit({ ...visit, visitName: value.target.textContent });
    setMove1("leftPosition");
    setMove2("centerPosition");
  };
  const moveAction2 = (value) => {
    setVisit({ ...visit, doctor: value.target.textContent });
    setMove2("leftPosition");
    setMove3("centerPosition");
  };
  const moveAction2back = (value) => {
    setMove1("centerPosition");
    setMove2("rightPosition");
  };
  const moveAction3 = (value) => {
    setVisit({ ...visit, day: value.target.textContent });
    setMove3("leftPosition");
    setMove4("centerPosition");
  };
  const moveAction3back = (value) => {
    setMove2("centerPosition");
    setMove3("rightPosition");
  };
  const moveAction4 = (value) => {
    setVisit({ ...visit, hour: value.target.textContent });
    setMove4("leftPosition");
    setMove5("centerPosition");
  };
  const moveAction4back = (value) => {
    setMove3("centerPosition");
    setMove4("rightPosition");
  };
  const moveAction5back = (value) => {
    setMove4("centerPosition");
    setMove5("rightPosition");
  };
  return (
    <>
      

      <div className={`plainSection plainAnimate`}>
        <div className="gHero-image"></div>
        <div className="gPopupParent">
          <MyPlain1 move={move1} action={moveAction1} />
          <MyPlain2
            move={move2}
            action={moveAction2}
            actionBack={moveAction2back}
          />
          <MyPlain3
            move={move3}
            action={moveAction3}
            actionBack={moveAction3back}
          />
          <MyPlain4
            move={move4}
            action={moveAction4}
            actionBack={moveAction4back}
          />
          <MyPlain5 move={move5} visit={visit} actionBack={moveAction5back} />
        </div>
      </div>
    </>
  );
};

export default Plain;
