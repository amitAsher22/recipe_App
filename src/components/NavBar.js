import React, { useState } from "react";
import Siderbar from "./Siderbar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [showSidebar, setShowSidebar] = useState(true);
  const links = [
    { name: "Home", path: "/", icon: faHome },
    { name: "Recipes", path: "/recipes", icon: faList },
    { name: "Settigs", path: "/settings", icon: faCog },
  ];

  function closeSiderbar() {
    setShowSidebar(false);
  }

  return (
    <>
      <div className="navbar container">
        <a href="#!" className="logo">
          F<span>oo</span>dHubFast
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a href="#!" key={link.name}>
              {link.name}
            </a>
          ))}
        </div>
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn "}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Siderbar close={closeSiderbar} links={links} />}
    </>
  );
}

export default NavBar;
