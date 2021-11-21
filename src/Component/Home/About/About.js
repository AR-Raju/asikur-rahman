import React from "react";
import img from "../../../images/profile-2.jpeg";
import Skillbar from "../Skillbar/Skillbar";
import { init } from "ityped";
import { useEffect } from "react";
import { useRef } from "react";
import "./About.css";

const About = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Front-End", "MERN Stack"],
    });
  }, []);
  return (
    <div className="container py-5" id="about">
      <h1 className="text-center pt-5 pb-3">ABOUT</h1>
      <div className="row py-5">
        <div className="col-md-5">
          <img style={{ height: "auto", width: "80%" }} src={img} alt="" />
          <h3 className="text-center py-3">Who is this guy?</h3>
          <h3>
            I'm a <span className="text-info" ref={textRef}></span> Developer.
          </h3>
          <p>
            {" "}
            I have serious passion for UI effects, problem solving and dynamic
            user experiences.
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
