import { useEffect, useState, useContext } from "react";

import { LOGO_URL } from "../utils/constants";

import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [buttonLabel, setbuttonLabel] = useState("Login");
  const isOnline = useOnlineStatus();

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    console.log("Header is called");
  }, [buttonLabel]);

  return (
    <div className="flex justify-between items-center">
      <div className="logo-container">
        <img
          className="w-30 bg-transparent mix-blend-multiply"
          src={LOGO_URL}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 items-center">
          <li className="px-4">
            <span
              className={`inline-block w-3 h-3 rounded-full ${
                isOnline ? "bg-green-500" : "bg-red-500"
              }`}
              title={isOnline ? "Online" : "Offline"}
            ></span>
          </li>
          <li className="px-4">
            <NavLink
              to="grocery"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-blue-600 border-b-2 border-blue-600"
                  : "font-medium text-gray-700 hover:text-blue-600 transition-colors"
              }
            >
              Grocery
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-blue-600 border-b-2 border-blue-600"
                  : "font-medium text-gray-700 hover:text-blue-600 transition-colors"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-blue-600 border-b-2 border-blue-600"
                  : "font-medium text-gray-700 hover:text-blue-600 transition-colors"
              }
            >
              About
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-blue-600 border-b-2 border-blue-600"
                  : "font-medium text-gray-700 hover:text-blue-600 transition-colors"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>Cart</li>
          <button
            className="px-4"
            onClick={() => {
              if (buttonLabel === "Login") {
                setUser("Mahi");
                setbuttonLabel("Logout");
              } else {
                setUser("Default User");
                setbuttonLabel("Login");
              }
            }}
          >
            {buttonLabel}
          </button>
          <li className="flex items-center ml-4">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-blue-400 object-cover mr-2"
            />
            <span>{user}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
