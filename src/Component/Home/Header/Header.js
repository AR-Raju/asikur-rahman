import React from "react";
import Particle from "../Particles/Particle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="background">
        <Particle></Particle>
        <div className="txt">
          <h2>
            Hello this is <span className="text-warning">Asikur Rahman</span>
          </h2>
          <a href="#about">
            {" "}
            <button className="btn btn-info">
              Get More Info
              <FontAwesomeIcon className="mx-2" icon={faArrowDown} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
