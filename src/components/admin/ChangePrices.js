import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { showPrices, updatePrices, deleteService } from "../../actions/handle";

const ChangePrices = ({ showPrices, prices, updatePrices, deleteService }) => {
  useEffect(() => {
    showPrices();
    //eslint-disable-next-line
  }, []);

  const [myPrices, setMyPrices] = useState(prices);
  // const [priz, setPriz]

  const onChange = (e) => {
    let moveMyPrices = [...myPrices];
    for (let i = 0; i < moveMyPrices.length; i++) {
      if (moveMyPrices[i]._id === e.target.id) {
        let newObject = {
          _id: moveMyPrices[i]._id,
          text: moveMyPrices[i].text,
          price: e.target.value,
        };
        moveMyPrices.splice(i, 1, newObject);
      }
    }
    setMyPrices(moveMyPrices);
  };
  const onUpdate = () => {
    console.log("hejo");
    updatePrices(myPrices);
  };

  return (
    //jesli odwierze f5 to wraca do dashboard??@@@@@@@@@@@@@@
    <>
      {prices && (
        <div className="pricesSection">
          <div className="gHero-image"></div>
          <div className="gPopupParent">
            <div className="gPopup popup">
              <Link to="/adminDashboard">
                <i className="fas fa-arrow-left"></i>
              </Link>
              <h1>Usługi edit i usun tez</h1>
              {/* <h1>{myPrices[0].price}</h1> */}
              <ul>
                {myPrices.map((price) => (
                  <li key={price._id}>
                    <p>{price.text}</p>
                    <p>
                      <input
                        id={price._id}
                        type="number"
                        value={price.price}
                        onChange={onChange}
                      />{" "}
                      PLN
                      <Link to="/deleteService">
                        <i
                          className="fas fa-times"
                          onClick={() => deleteService(price._id)}
                        ></i>
                      </Link>
                    </p>
                  </li>
                ))}
              </ul>
              <Link to="/addService" className="btnSmall">
                Dodaj Usługę
              </Link>
              <Link
                onClick={onUpdate}
                to={{
                  pathname: "/alertConfirm",
                  state: {
                    text: "Zaktualizowano cennik!",
                  },
                }}
                className="btnSmall"
              >
                Aktualizuj
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  prices: state.handle.prices,
});
export default connect(mapStateToProps, {
  showPrices,
  updatePrices,
  deleteService,
})(ChangePrices);
