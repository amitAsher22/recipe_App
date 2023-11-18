import React from "react";
import ChiefCard from "../components/ChiefCard";
import "../styles/index.scss";
import img1 from "../img/chief_1.jpg";
import img2 from "../img/chief_2.jpg";
import img3 from "../img/chief_3.jpg";
import img4 from "../img/chief_4.jpg";
import img5 from "../img/chief_5.jpg";
import img6 from "../img/chief_6.jpg";

function ChiefsSection() {
  const chiefs = [
    {
      name: "Juan Carols",
      img: img1,
      recipesCount: "10",
      cuisine: "Maxican",
    },
    {
      name: "John Doe",
      img: img2,
      recipesCount: "05",
      cuisine: "Maxican",
    },
    {
      name: "Juan Carols",
      img: img3,
      recipesCount: "07",
      cuisine: "American",
    },
    {
      name: "Erich Maria ",
      img: img4,
      recipesCount: "13",
      cuisine: "Italian",
    },
    {
      name: "Blake Lively ",
      img: img5,
      recipesCount: "09",
      cuisine: "Franch",
    },
    {
      name: "Amit Cohen ",
      img: img6,
      recipesCount: "04",
      cuisine: "Israel",
    },
  ];

  return (
    <div className="section chiefs">
      <h1 className="title">Out Title Chiefs</h1>
      <div className="top-chiefs-container">
        {chiefs.map((chief) => (
          <ChiefCard key={chief.name} chief={chief} />
        ))}
      </div>
    </div>
  );
}

export default ChiefsSection;
