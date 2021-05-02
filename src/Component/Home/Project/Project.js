import React from "react";
import "./Project.css";
import solutionMakers from "../../../images/solutionMakers.JPG";
import myGrocery from "../../../images/myGrocery.JPG";
import privateTeam from "../../../images/privateTeam.JPG";
import penguin from "../../../images/penguin fasion.JPG";

const Project = () => {
  return (
    <div className="bg-secondary">
      <div className="container">
        <div className="row">
          <h2 className="text-center py-5">Project</h2>
          <div className="col-md-6">
            <div id="solution">
              <img
                className="image"
                style={{ height: "auto", width: "80%" }}
                src={solutionMakers}
                alt=""
              />
              <div className="middle">
                <div className="text">solution maker</div>
              </div>
            </div>

            <div id="grocery">
              <img
                className="py-3 image"
                style={{ height: "auto", width: "80%" }}
                src={myGrocery}
                alt=""
              />
              <div className="middle">
                <div className="text">My Grocery</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <img
              className="image"
              style={{ height: "auto", width: "80%" }}
              src={privateTeam}
              alt=""
            />
            <img
              className="py-3 image"
              style={{ height: "auto", width: "80%" }}
              src={penguin}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
