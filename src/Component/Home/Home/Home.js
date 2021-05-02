import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Project from "../Project/Project";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <Project></Project>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
};

export default Home;
