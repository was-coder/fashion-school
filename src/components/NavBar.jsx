import { React, Fragment } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? "#ffffff" : undefined,
    };
  };

  return (
    <Fragment>
      <div className="nav-container">
        <nav className="nav-link">
          <ul className="ul-link">
            <li className="li-link">
              <NavLink className="links" style={activeLink} to="/">
                Home
              </NavLink>
            </li>
            <li className="li-link">
              <NavLink className="links" style={activeLink} to="/about">
                About
              </NavLink>
            </li>
            <li className="li-link">
              <NavLink className="links" style={activeLink} to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="li-link">
              <NavLink className="links" style={activeLink} to="/users">
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}
export default NavBar;
