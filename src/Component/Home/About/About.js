import React from "react";
import img from "../../../images/profile-2.png";
import Skillbar from "../Skillbar/Skillbar";

const About = () => {
  return (
    <div className="container pb-5">
      <h2 className="text-center py-5">About</h2>
      <div className="row">
        <div className="col-md-5">
          <img style={{ height: "auto", width: "20vw" }} src={img} alt="" />
          <h3 className="text-center py-3">Who is this guy?</h3>
          <p>
            I'm a Front-End Developer for ChowNow in Los Angeles, CA.
            <br /> I have serious passion for UI effects, animations and
            creating intuitive, dynamic user experiences.
            <br /> Let's make something special.
          </p>
        </div>
        <div className="col-md-7">
          <Skillbar></Skillbar>
        </div>
      </div>
    </div>
  );
};

export default About;
