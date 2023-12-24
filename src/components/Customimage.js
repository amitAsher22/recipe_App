import React from "react";

function Customimage({ imgSrc, pt }) {
  return (
    <div className="custom-image" style={{ paddingTop: pt }}>
      <img src={imgSrc} alt="food" />
    </div>
  );
}

export default Customimage;
