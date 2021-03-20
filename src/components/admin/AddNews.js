import React, { useState } from "react";
import { createNews } from "../../actions/handle";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
const AddNews = ({ createNews }) => {
  const [data, setData] = useState({
    topic: "",
    value: "",
  });
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    createNews(data);
    setSent(true);
  };
  return (
    <>
      {sent && (
        <Redirect
          to={{
            pathname: "/alertConfirm",
            state: {
              text: "Dodano news !",
            },
          }}
        />
      )}
      <div className="notExistsSection">
        <div className="gHero-image"></div>
        <div className="gPopupParent">
          <div className="gPopup popup">
            <Link to="/adminDashboard">
              <i
                className="fas fa-arrow-left"
                onClick={() => console.log("poerot")}
              ></i>
            </Link>
            <h1 className="MarginBottom" onClick={createNews}>
              Nowy news
            </h1>
            <form action="" onSubmit={onSubmit}>
              <h3>Temat</h3>
              <input
                type="text"
                className="MarginBottom"
                value={data.topic}
                onChange={(e) => setData({ ...data, topic: e.target.value })}
              />
              <h3>Treść</h3>
              <textarea
                name=""
                id=""
                rows="8"
                value={data.value}
                onChange={(e) => setData({ ...data, value: e.target.value })}
              ></textarea>
              <input type="submit" value="Dodaj news" className="btnSmall" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { createNews })(AddNews);
