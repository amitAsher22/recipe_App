import React from "react";
import "../styles/index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

function Siderbar({ links, close }) {
  const loction = useLocation();
  return (
    <div className="sidebar" onClick={close}>
      {links.map((link) => {
        return (
          <Link
            to={link.path}
            className={
              loction.pathname === link.path
                ? " sidebar-link active"
                : "sidebar-link"
            }
            href="#!"
            key={link.name}
          >
            <FontAwesomeIcon icon={link.icon} />
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}

export default Siderbar;
