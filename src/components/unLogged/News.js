import React, { useEffect } from "react";
import { connect } from "react-redux";
import { showNews, deleteNews } from "../../actions/handle";
import { Link } from "react-router-dom";
import spinner from "../../img/spinner.svg";
const News = ({ showNews, news, type, deleteNews }) => {
  useEffect(() => {
    showNews();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      {!news ? (
        <div className="spinnerContainer">
          <img src={spinner} alt="spinner" />
        </div>
      ) : (
        <div className="newsSection">
          <div className="gHero-image"></div>
          <div className="gPopupParent">
            <div className="gPopupWide">
              <h1>Aktualności</h1>
              <ul className="myList">
                {news
                  .reverse()
                  .map((oneNews) => (
                    <li key={oneNews._id}>
                      <Link
                        to={{
                          pathname: "/alertConfirm",
                          state: {
                            text: "Usunieto news!",
                          },
                        }}
                      >
                        {type === "admin" && (
                          <i
                            className="fas fa-times"
                            onClick={() => deleteNews(oneNews._id)}
                          ></i>
                        )}
                      </Link>

                      <h2>{oneNews.topic}</h2>
                      <h6>{oneNews.date}</h6>
                      <h4>{oneNews.text}</h4>
                    </li>
                  ))
                  .reverse()}
              </ul>
              <div className="end"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  news: state.handle.news,
  type: state.auth.user.type,
});
export default connect(mapStateToProps, { showNews, deleteNews })(News);
