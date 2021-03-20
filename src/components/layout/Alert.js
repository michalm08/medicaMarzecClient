import React from "react";
import { connect } from "react-redux";
const Alert = ({ alert }) => {
  // console.log(alert);
  return (
    <div className="alerts">
      {/* alert && alert.length > 0 */}
      {alert ? (
        alert.map((item) => (
          <div className={`alert ${item.kind}`}>
            <h5>{item.value}</h5>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps)(Alert);
