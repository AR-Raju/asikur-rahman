import React from "react";
import "./Connect.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <div className="bg-dark text-center">
      <a href="#" className="box1 mb-5">
        <FontAwesomeIcon icon={faAngleDoubleUp} />
      </a>
      <div className="container pt-5">
        <div className="d-flex justify-content-center">
          <Link
            className="px-3 box hvr-sweep-to-bottom"
            to={{
              pathname: "https://www.linkedin.com/in/asikur-rahman-53028a164/",
            }}
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
          <Link
            className="px-3 box hvr-sweep-to-bottom"
            to={{
              pathname: "https://www.facebook.com/asikurrahman.raju.3",
            }}
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Connect;
