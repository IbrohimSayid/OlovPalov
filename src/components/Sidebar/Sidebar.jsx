import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoColorFill, IoStatsChart } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoIosRocket } from "react-icons/io";

function Sidebar() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  const fullname = userData?.fullname || "Mehmon";
  const avatar = userData?.avatar || "https://via.placeholder.com/150";

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUserData(null);
    navigate("/signup");
  };

  return (
    <>
      <div className="sidebarContainer">
        <div className="profile">
          {avatar && <img src={avatar} alt="Avatar" className="userAvatar" />}
          <h4>{fullname}</h4>
        </div>
        <hr />
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/dashboard">
                <IoMdHome className="icon" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">
                <IoStatsChart className="icon" />
                Products
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="comment">
          <h3>ACCOUNT PAGE</h3>
        </div>
        <div className="accountMenu">
          <ul>
            <li>
              <NavLink to="/signup">
                <IoNewspaperOutline className="icon" />
                Sign Up
              </NavLink>
            </li>
            <li>
              <div className="logout" onClick={handleLogout}>
                <IoIosRocket className="icon" />
                <p>Log out</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
