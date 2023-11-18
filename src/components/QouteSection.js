import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "../styles/index.scss";
function QouteSection() {
  return (
    <div className="section quote">
      <p className="qoute-text">
        <FontAwesomeIcon icon={faQuoteLeft} />
        Food is everything we are. it's an extention of nationalist feeling.
        ethnic feeling your personal history your province your region your
        tribe.
      </p>
      <p className="qoute-auther">-Anthony Bourdain</p>
    </div>
  );
}

export default QouteSection;
