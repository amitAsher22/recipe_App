import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/index.scss";

function ChiefCard({ chief }) {
  return (
    <div className="chief-card">
      <div className="chief-card-image">
        <img src={chief.img} alt={chief.name} />
      </div>
      <div className="chief-card-info">
        <h3 className="chief-crd-name">{chief.name}</h3>
        <p className="chief-recipe-count">
          Recipes: <b>{chief.recipesCount}</b>
        </p>
        <p className="chief-cuisine">
          Cuisine: <b>{chief.cuisine}</b>
        </p>
        <p className="cheif-icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </p>
      </div>
    </div>
  );
}

export default ChiefCard;
