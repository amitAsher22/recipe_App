import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function PreviousSearch() {
  const searches = [
    "pizza",
    "burger",
    "cookies",
    "juice",
    "biriyani",
    "salad",
    "ice creame",
    "lasagna",
    "pudding",
    "soup",
  ];
  return (
    <div className="previous-searches">
      <h2>Previous Searches</h2>
      <div className="previous-searches-container">
        {searches.map((search, index) => {
          return (
            <div
              key={index}
              style={{ animationDelay: index * 0.1 + "s" }}
              className="search-item"
            >
              {search}
            </div>
          );
        })}
      </div>
      <div className="search-box">
        <input type="text" placeholder="search for recipe"></input>
        <button className="btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}

export default PreviousSearch;
