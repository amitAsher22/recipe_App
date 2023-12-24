import React from "react";
import "../styles/index.scss";

function Footer() {
  return (
    <div className="footer  container">
      <div className="footer-section">
        <p className="title">FoodiesHub.com</p>
        <p>
          Foodhub was started in 2017 by Stoke-on-Trent school friends Ardian
          Mula and Mohammed Shakil.
        </p>
        <p> &copy; 2023 | All Right Service</p>
      </div>
      <div className="footer-section">
        <p className="title">Conect Us</p>
        <p>foodihub@gmail.com</p>
        <p>+972-523-315-7737</p>
        <p>347 Bar , Israel</p>
      </div>
      <div className="footer-section">
        <p className="title">Social</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
    </div>
  );
}

export default Footer;
