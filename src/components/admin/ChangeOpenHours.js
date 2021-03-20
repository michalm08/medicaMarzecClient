import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { changeOpenHours } from "../../actions/handle";
import { takeOpenHours } from "../../actions/handle";

const ChangeOpenHours = ({ changeOpenHours, takeOpenHours, state_hours }) => {
  useEffect(() => {
    takeOpenHours();
    //eslint-disable-next-line
  }, []);

  const [sent, setSent] = useState(false);
  const [hours, setHours] = useState({
    //tutaj musza byc dane pobrane z baze ze state

    monday: { start: state_hours.monday.start, end: state_hours.monday.end },
    tuesday: { start: state_hours.tuesday.start, end: state_hours.tuesday.end },
    wednesday: {
      start: state_hours.wednesday.start,
      end: state_hours.wednesday.end,
    },
    thursday: {
      start: state_hours.thursday.start,
      end: state_hours.thursday.end,
    },
    friday: { start: state_hours.friday.start, end: state_hours.friday.end },
    saturday: {
      start: state_hours.saturday.start,
      end: state_hours.saturday.end,
    },
    sunday: { start: state_hours.sunday.start, end: state_hours.sunday.end },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    changeOpenHours(hours);
    setSent(true);
  };
  return (
    <>
      {sent && (
        <Redirect
          to={{
            pathname: "/alertConfirm",
            state: {
              text: "Zaktualizowano godziny otwarcia!",
            },
          }}
        />
      )}

      {state_hours && (
        <div className="noneSection">
          <div className="gHero-image"></div>
          <div className="gPopupParent">
            <div className="gPopup popup">
              <Link to="/adminDashboard">
                <i className="fas fa-arrow-left"></i>
              </Link>
              <h1>Godziny otwarcia Kliniki</h1>
              <form action="" onSubmit={onSubmit}>
                <h3>
                  Poniedziałek od{" "}
                  <input
                    type="time"
                    value={hours.monday.start}
                    onChange={(e) =>
                      setHours({
                        ...hours,
                        monday: {
                          start: e.target.value,
                          end: hours.monday.end,
                        },
                      })
                    }
                  />
                  do
                  <input
                    type="time"
                    className="MarginTop"
                    value={hours.monday.end}
                    onChange={(e) =>
                      setHours({
                        ...hours,
                        monday: {
                          start: hours.monday.start,
                          end: e.target.value,
                        },
                      })
                    }
                  />
                </h3>
                <h3>
                  Wtorek od
                  <input
                    type="time"
                    className="MarginTop"
                    value={hours.tuesday.start}
                    onChange={(e) =>
                      setHours({
                        ...hours,
                        tuesday: {
                          start: e.target.value,
                          end: hours.tuesday.end,
                        },
                      })
                    }
                  />{" "}
                  do
                  <input
                    type="time"
                    value={hours.tuesday.end}
                    onChange={(e) =>
                      setHours({
                        ...hours,
                        tuesday: {
                          start: hours.tuesday.start,
                          end: e.target.value,
                        },
                      })
                    }
                  />
                </h3>
                <h3>
                  Środa od
                  <input
                    type="time"
                    className="MarginTop"
                    value={hours.wednesday.start}
                    onChange={(e) =>
                      setHours({
                        ...hours,
                        wednesday: {
                          start: e.target.value,
                          end: hours.wednesday.end,
                        },
                      })
                    }
                  />{" "}
                  do
                  <input
                    type="time"
                    value={hours.wednesday.end}
                    onChange={(e) =>
                      setHours({
                        ...hours,
                        wednesday: {
                          start: hours.wednesday.start,
                          end: e.target.value,
                        },
                      })
                    }
                  />
                </h3>
                <h3>
                  Czwartek od
                  <input
                    type="time"
                    className="MarginTop"
                    value={hours.thursday.start}
                    onChange={(e) =>
                      setHours({
                        ...hours,
                        thursday: {
                          start: e.target.value,
                          end: hours.thursday.end,
                        },
                      })
                    }
                  />{" "}
                  do
                  <input
                    type="time"
                    value={hours.thursday.end}
                    onChange={(e) =>
                      setHours({
                        ...hours,
                        thursday: {
                          start: hours.thursday.start,
                          end: e.target.value,
                        },
                      })
                    }
                  />
                </h3>
                <h3>
                  Piątek od
                  <input
                    type="time"
                    className="MarginTop"
                    value={hours.friday.start}
                    onChange={(e) =>
                      setHours({
                        ...hours,
                        friday: {
                          start: e.target.value,
                          end: hours.friday.end,
                        },
                      })
                    }
                  />{" "}
                  do
                  <input
                    type="time"
                    value={hours.friday.end}
                    onChange={(e) =>
                      setHours({
                        ...hours,
                        friday: {
                          start: hours.friday.start,
                          end: e.target.value,
                        },
                      })
                    }
                  />
                </h3>
                <h3>
                  Sobota od
                  <input
                    type="time"
                    className="MarginTop"
                    value={hours.saturday.start}
                    onChange={(e) =>
                      setHours({
                        ...hours,
                        saturday: {
                          start: e.target.value,
                          end: hours.saturday.end,
                        },
                      })
                    }
                  />{" "}
                  do
                  <input
                    type="time"
                    value={hours.saturday.end}
                    onChange={(e) =>
                      setHours({
                        ...hours,
                        saturday: {
                          start: hours.saturday.start,
                          end: e.target.value,
                        },
                      })
                    }
                  />
                </h3>
                <h3>
                  Niedziela od
                  <input
                    type="time"
                    className="MarginTop"
                    value={hours.sunday.start}
                    onChange={(e) =>
                      setHours({
                        ...hours,
                        sunday: {
                          start: e.target.value,
                          end: hours.sunday.end,
                        },
                      })
                    }
                  />{" "}
                  do
                  <input
                    type="time"
                    value={hours.sunday.end}
                    onChange={(e) =>
                      setHours({
                        ...hours,
                        sunday: {
                          start: hours.sunday.start,
                          end: e.target.value,
                        },
                      })
                    }
                  />
                </h3>

                <input type="submit" className="btnSmall" value="Zatwierdz" />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  state_hours: state.handle.hours,
});

export default connect(mapStateToProps, { changeOpenHours, takeOpenHours })(
  ChangeOpenHours
);
