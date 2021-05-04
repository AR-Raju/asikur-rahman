import React from "react";
import "./ProjectDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const ProjectDetails = (props) => {
  const { name, img, des, live, git } = props.project;
  return (
    <div className="container py-3">
      <div className="animation" class="card" style={{ width: "100%" }}>
        <div class="row no-gutters">
          <div class="col-sm-5">
            <img class="card-img" src={img} alt={name} />
          </div>
          <div class="col-sm-7">
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text">{des}</p>
              <div className="d-flex">
                <Link to={{ pathname: live }} target="_blank">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </Link>
                <Link className="px-3" to={{ pathname: git }} target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
