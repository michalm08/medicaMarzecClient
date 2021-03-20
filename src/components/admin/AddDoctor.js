import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { registerDoctor } from "../../actions/auth";
import FileBase64 from "react-file-base64";
//Przy podyfikacji to doktor chyba bedize musial wybrac specjalizacje z listy konkretnej jakiejs
const AddDoctor = ({ registerDoctor }) => {
  const [data, setData] = useState({
    name: "",
    lastname: "",
    special: [],
    note: "",
    email: "",
    password1: "",
    password2: "",
    img: "",
  });

  const [sent, setSent] = useState(false);
  const { password1, password2 } = data;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    if (password1 !== password2) {
      console.log("nie wyslano bo inne hasla");
    } else {
      registerDoctor(data);
      console.log("wyslano");
      setSent(true);
    }
  };
  const onDone = (base64) => {
    console.log("ondone");
    // console.log(e);
    console.log(base64);
    console.log(base64.length)

    // console.log(b);
    setData({ ...data, img: base64 });
  };
  // const onDone = (param) => (e) => {
  //   console.log(e);
  //   console.log(param);
  // };

  return (
    <>
      {sent && (
        <Redirect
          to={{
            pathname: "/alertConfirm",
            state: {
              text: "Dodano Lekarza!",
            },
          }}
        />
      )}
      <div className="formSection">
        <div className="gHero-image"></div>
        <div className="gPopupParent">
          <div className="gPopup popup">
            <Link to="/adminDashboard">
              <i
                className="fas fa-arrow-left"
                onClick={() => console.log("poerot")}
              ></i>
            </Link>
            <h1>Dodaj Lekarza</h1>
            <form action="" onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Podaj Imie"
                className="MarginBottom"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Podaj Nazwisko"
                className="MarginBottom"
                value={data.lastname}
                onChange={(e) => setData({ ...data, lastname: e.target.value })}
              />
              <input
                type="text"
                placeholder="Podaj Specjalizacje po przecinku"
                className="MarginBottom"
                value={data.special}
                onChange={(e) => setData({ ...data, special: e.target.value })}
              />

              <textarea
                placeholder="Podaj Opis"
                rows="4"
                className="MarginBottom"
                value={data.note}
                onChange={(e) => setData({ ...data, note: e.target.value })}
              ></textarea>
              <input
                type="text"
                placeholder="Podaj email"
                className="MarginBottom"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="Podaj haslo"
                className="MarginBottom"
                value={data.password1}
                onChange={(e) =>
                  setData({ ...data, password1: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Powtórz haslo"
                className="MarginBottom"
                value={data.password2}
                onChange={(e) =>
                  setData({ ...data, password2: e.target.value })
                }
              />
              <FileBase64
                type="file"
                // onDone={({ base64 }) => onDone(base64)}

                onDone={({ base64 })=> onDone(base64)}
                // onDone={onDone({base64})}
              />
              <input type="submit" value="Dodaj" className="btnSmall" />
            </form>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { registerDoctor })(AddDoctor);
