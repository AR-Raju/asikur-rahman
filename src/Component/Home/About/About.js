import React from "react";
import img from "../../../images/profile-2.jpeg";
import Skillbar from "../Skillbar/Skillbar";

const About = () => {
  return (
    <div className="container py-5" id="about">
      <h1 className="text-center pt-5 pb-3">ABOUT</h1>
      <div className="row py-5">
        <div className="col-md-5">
          <img style={{ height: "auto", width: "80%" }} src={img} alt="" />
          <h3 className="text-center py-3">Who is this guy?</h3>
          <p>
            I'm a Front-End Developer.
            <br /> I have serious passion for UI effects, problem solving and
            dynamic user experiences.
            <br /> <a href="#contact">Let's make something special.</a>
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
