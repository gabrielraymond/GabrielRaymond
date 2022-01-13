import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 100 ? setStickyClass("bg-dark") : setStickyClass("");
    }
  };

  return (
    <header
      id="header"
      className={`fixed text-center fixed-top ${stickyClass}`}
    >
      <nav className="navbar nav-masthead justify-content-center ">
        <div className="d-flex" data-aos="zoom-in">
          <a className="nav-link" href="#hero">
            Home
          </a>
          <a className="nav-link" href="#about">
            About
          </a>
          {/* <a className="nav-link" href="#resume">
            Resume
          </a> */}
          <a className="nav-link" href="#portfolio">
            Portfolio
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
