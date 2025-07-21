import { useEffect, useState } from "react";

import { LOGO_URL } from "../utils/constants";

import { NavLink } from "react-router-dom";

const Header = () => {
  const [buttonLabel, setbuttonLabel] = useState("Login");
  console.log("Header is called");

  useEffect(() => {
    console.log("he this is called");
  }, [buttonLabel]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              if (buttonLabel === "Login") {
                setbuttonLabel("Logout");
              } else {
                setbuttonLabel("Login");
              }
            }}
          >
            {buttonLabel}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
