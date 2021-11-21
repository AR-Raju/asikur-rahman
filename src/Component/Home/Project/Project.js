import React from "react";
import "./Project.css";
import solutionMakers from "../../../images/solutionMakers.JPG";
import myGrocery from "../../../images/myGrocery.JPG";
import privateTeam from "../../../images/privateTeam.JPG";
import penguin from "../../../images/penguin fasion.JPG";
import ebuying from "../../../images/e-buying.png";
import { Link } from "react-router-dom";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

const Project = () => {
  const projects = [
    {
      name: "E-Buying",
      img: ebuying,
      des: "This is an ecommerce website where some one can add product to cart, review items, proceed order and his infomation will be saved in the mongodb database.",
      live: "https://e-buying-f3f9b.web.app/",
      git: "https://github.com/AR-Raju/e-buying",
    },
    {
      name: "Solution Makers",
      img: solutionMakers,
      des: "There are many sections in the home page. sevice and reviews are dynamic part rest are static.In admin panel there are add service, add review and add admin part",
      live: "https://my-solution-makers.web.app/",
      git: "https://github.com/AR-Raju/solution-makers",
    },
    {
      name: "My Grocery",
      img: myGrocery,
      des: "In this app all my data are from my rajudb database and products collection. first of all there is a home page where products are displayed and if we click on buy now we can access that product only. There is an Admin option where any loggedIn person can add product.",
      live: "https://raju-agro.web.app",
      git: "https://github.com/AR-Raju/my-grocery",
    },
    {
      name: "Private Team Detective",
      img: privateTeam,
      des: "In the home page we can see lots of football team by clicking the Explore button we can see the details of that particular team",
      live: "https://vibrant-yalow-9ec8a0.netlify.app/",
      git: "https://github.com/AR-Raju/football-team",
    },
    {
      name: "Penguin Fasion",
      img: penguin,
      des: "This an ecommerse site. Its just an design done with html and css.",
      live: "https://ar-raju.github.io/penguin-fasion/",
      git: "https://github.com/AR-Raju/penguin-fasion",
    },
  ];
  return (
    <div className="bg" id="project">
      <div className="container py-5">
        <div className="row">
          <h1 className="text-center pt-5 pb-3">PORTFOLIO</h1>
          <div className="py-5">
            {projects.map((prj) => (
              <ProjectDetails project={prj}></ProjectDetails>
            ))}
          </div>
          {/* <div className="col-md-6"> */}

          {/* <div id="solution">
              <img
                className="image"
                style={{ height: "auto", width: "80%" }}
                src={solutionMakers}
                alt=""
              />
              <div className="middle">
                <div className="text">
                  <Link
                    to={{ pathname: "https://my-solution-makers.web.app/" }}
                    target="_blank"
                  >
                    solution maker
                  </Link>
                </div>
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
                <div className="text">
                  <Link
                    to={{ pathname: "https://raju-agro.web.app" }}
                    target="_blank"
                  >
                    My Grocery
                  </Link>
                </div>
              </div>
            </div> */}
          {/* </div> */}
          {/* <div className="col-md-6 ">
            <div id="private">
              <img
                className="image"
                style={{ height: "auto", width: "80%" }}
                src={privateTeam}
                alt=""
              />
              <div className="middle">
                <div className="text">
                  <Link
                    to={{
                      pathname: "https://vibrant-yalow-9ec8a0.netlify.app/",
                    }}
                    target="_blank"
                  >
                    Private Team Detective
                  </Link>
                </div>
              </div>
            </div>
            <div id="penguin">
              <img
                className="py-3 image"
                style={{ height: "auto", width: "80%" }}
                src={penguin}
                alt=""
              />
              <div className="middle">
                <div className="text">
                  <Link
                    to={{
                      pathname: "https://ar-raju.github.io/penguin-fasion/",
                    }}
                    target="_blank"
                  >
                    Penguin Fasion
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Project;
