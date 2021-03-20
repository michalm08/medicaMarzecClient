import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {logout} from '../../actions/auth'

const NavPatient = ({logout}) => {
  return (
    <nav>
      <Link to="/">
        <h1>MedicaPatient</h1>
      </Link>
      <ul>
        <li>
          <Link to="/aboutus" className="nav_elem">
            O nas
          </Link>
        </li>
        <li>
          <Link to="/doctors" className="nav_elem">
            Lekarze
          </Link>
        </li>
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
          <Link to="/clientDashboard" className="nav_elem line">
            Mój panel
          </Link>
        </li>
        <li>
        <a className="nav_elem" onClick={logout} href="/#">
            Wyloguj
          </a>
        </li>

        <li>
          <Link to="/plainanimate" className="nav_plain">
            Zaplanuj wizyte
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default connect(null, { logout })(NavPatient);