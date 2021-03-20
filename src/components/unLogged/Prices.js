import React, { useEffect } from "react";

import { connect } from "react-redux";
import { showPrices } from "../../actions/handle";
import spinner from "../../img/spinner.svg";

const Prices = ({ showPrices, prices }) => {
  useEffect(() => {
    showPrices();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      {!prices ? (
        <div className="spinnerContainer">
          <img src={spinner} alt="spinner" />
        </div>
      ) : (
        <div className="pricesSection">
          <div className="gHero-image"></div>
          <div className="gPopupParent">
            <div className="gPopup popup">
              <h1>Usługi</h1>
              <ul>
                {prices.map((price) => (
                  <li key={price._id}>
                    <p>{price.text}</p>
                    <p>{price.price}PLN</p>
                  </li>
                ))}
              </ul>
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
export default connect(mapStateToProps, { showPrices })(Prices);
