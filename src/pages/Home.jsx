import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Service from "../components/Services";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Service></Service>
      <Blogs></Blogs>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
