import React from "react";
import Customimage from "./Customimage";
import img1 from "../img/img_1.jpg";
import img2 from "../img/img_2.jpg";
import img3 from "../img/img_3.jpg";
import img4 from "../img/img_4.jpg";
import img5 from "../img/img_5.jpg";
import img6 from "../img/img_6.jpg";
import img7 from "../img/img_7.jpg";
import img8 from "../img/img_8.jpg";
import img9 from "../img/img_9.jpg";

function HeroSection() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <div className="section hero">
      <div className="col typeraphy">
        <h1 className="title">What Are We About</h1>
        <p className="info">
          Food hubs offer an exciting bridge between food producers and
          consumers, providing a mutually beneficial relationship across both
          ends of the food system. As defined by the National Food Hub
          Collaboration, “a food hub is a business or organization that actively
          manages the aggregation, distribution, and marketing of
          source-identified food products primarily from local and regional
          producers in order to satisfy wholesale, retail, and institutional
          demand.”
        </p>
        <button className="btn">explore now</button>
      </div>
      <div className="col gallery">
        {images.map((src, index) => (
          <Customimage key={index} imgSrc={src} pt={"90%"} />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
