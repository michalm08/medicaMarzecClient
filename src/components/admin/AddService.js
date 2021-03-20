import React, { useState } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { addService } from "../../actions/handle";

const AddService = ({ addService }) => {
  const [data, setData] = useState({
    text: "",
    price: "",
  });

  return (
    <>
      <div className="notExistsSection">
        <div className="gHero-image"></div>
        <div className="gPopupParent">
          <div className="gPopup popup">
            <Link to="/changePrices">
              <i
                className="fas fa-arrow-left"
                onClick={() => console.log("poerot")}
              ></i>
            </Link>
            <h1 onClick={addService}>Nowa Usługa</h1>
            <h3>Nazwa usługi</h3>
            <input
              type="text"
              className="MarginBottom"
              value={data.text}
              onChange={(e) => setData({ ...data, text: e.target.value })}
            />
            <div className="">
              <input
                type="number"
                value={data.price}
                onChange={(e) => setData({ ...data, price: e.target.value })}
              />
              <span>PLN</span>
            </div>
            {/*wroc to='/changePrices' */}
            <Link
              onClick={() => addService(data)}
              to={{
                pathname: "/alertConfirm",
                state: {
                  text: "Dodano Usługe !",
                },
              }}
              className="btnSmall"
            >
              Dodaj Usługe
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { addService })(AddService);
