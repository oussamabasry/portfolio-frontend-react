import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../../actions/loginAction";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./SideBar.css";
import { IconContext } from "react-icons";

function SideBar() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const showSidebar = () => setSidebar(!sidebar);

  const onLogout = () => {
    dispatch(logoutUser());
    history.push("/");
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="sidebar" >
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="sidebar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  {item.title === "Logout" ? (
                    <Link onClick={onLogout} to="/">
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  ) : (
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;
