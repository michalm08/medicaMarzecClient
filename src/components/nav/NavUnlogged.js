import React from "react";
import { Link } from "react-router-dom";

const NavUnlogged = () => {
  return (
    <nav>
      <Link to="/">
        <h1>MedicaUnlogged</h1>
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
          <Link to="/login" className="nav_elem line">
            Zaloguj
          </Link>
        </li>
        <li>
          <Link to="/register" className="nav_elem">
            Zarejestruj
          </Link>
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

export default NavUnlogged;
