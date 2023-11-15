import React from "react";
import "../styles/index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Siderbar({ links, close }) {
  return (
    <div className="sidebar" onClick={close}>
      {links.map((link) => {
        return (
          <a className="sidebar-link" href="#!" key={link.name}>
            <FontAwesomeIcon icon={link.icon} />
            {link.name}
          </a>
        );
      })}
    </div>
  );
}

export default Siderbar;
