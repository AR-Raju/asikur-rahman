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
        </div>
      </div>
    </div>
  );
};

export default Header;
