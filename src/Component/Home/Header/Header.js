import React from "react";
import Particle from "../Particles/Particle";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="background">
        <Particle></Particle>
        <div className="txt">
          <h2>Hello this is Asikur Rahman</h2>
          <a href="#about">
            {" "}
            <button className="btn btn-dark">Get More</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
