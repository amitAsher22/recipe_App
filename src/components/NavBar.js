import React, { useState } from "react";

function NavBar() {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="navbar container">
      <a href="#!" className="logo">
        F<span>oo</span>dHubFast
      </a>
      <div className="nav-links">
        <a href="#!">Home</a>
        <a href="#!">Recipes</a>
        <a href="#!">Settings</a>
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
  );
}

export default NavBar;
