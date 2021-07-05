import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

const Navigation = (props) => {
  return (
    <header className="main-header">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favoritos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
