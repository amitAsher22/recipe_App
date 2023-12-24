import React from "react";
import Customimage from "./Customimage";
// import img from "../img/chief_1.jpg";

function RecipeCard({ reciep }) {
  return (
    <div className="recipe-card">
      <Customimage imgSrc={reciep.image} pt="65%" />
      <div className="recipe-card-info">
        <img className="auther-img" src={reciep.authoImg} alt="img" />
        <p className="reciep-title">{reciep.title}</p>
        <p className="reciep-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to
        </p>
        <a className="view-btn" href="#">
          VIEW RECIEP
        </a>
      </div>
    </div>
  );
}

export default RecipeCard;
