import React from "react";
import './Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  AOS.init({duration :2000})
  return (
    <section id="hero" className="d-flex justify-content-flex align-items-center">
      <div className="container" data-aos="fade-up">
        <h1 >Gabriel Raymond</h1>
        <h2>I'm Web Developer and Web Designer</h2>
        <div className="mt-4">
            <a href={require("./resume/A4 - 1_A4 - 2_merged.pdf")} target="_blank" class="btn btn-info me-3" download="Gabriel_Raymond_Resume" rel="noreferrer noopener">Resume</a>
            <a href="#contact" className="btn btn-warning">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
