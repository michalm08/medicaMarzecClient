import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {logout} from '../../actions/auth'

const NavDoctor = ({ logout }) => {
  return (
    <nav>
      <Link to="/">
        <h1>MedicaDoctor</h1>
      </Link>
      <ul>
        <li>
          <Link to="/news" className="nav_elem">
            Aktualności
          </Link>
        </li>
        <li>
          <Link to="/prices" className="nav_elem">
            Cennik
          </Link>
        </li>
        <li>
          <Link to="/doctorDashboard" className="nav_elem line">
            Mój panel
          </Link>
        </li>
        <li>
          <a className="nav_elem" onClick={logout} href="/#">
            Wyloguj
          </a>
        </li>
      </ul>
    </nav>
  );
};

// const mapStateToProps = state=>{
//   return{
//     logout:
//   }
// }

export default connect(null, { logout })(NavDoctor);
