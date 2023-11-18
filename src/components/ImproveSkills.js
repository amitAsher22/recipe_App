import React from "react";
import img from "../img/img_2.jpg";

function ImproveSkills() {
  const lists = [
    "Learn new Recepies",
    "Experiment with food ",
    "Write your own recepies",
    "Know nutrition facts",
    "Get cookies tips",
    "Get ranked",
  ];
  return (
    <div className="section improve-skills">
      <div className="col img">
        <img alt="imgFood" src={img} />
      </div>
      <div className="col typography">
        <h1 className="title">Improve Your Skills</h1>
        {lists.map((list, index) => {
          return (
            <p className="skill-item" key={index}>
              {list}
            </p>
          );
        })}
        <button className="btn">Sign Up mow</button>
      </div>
    </div>
  );
}

export default ImproveSkills;
