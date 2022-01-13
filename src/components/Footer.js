import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container" data-aos="zoom-in">
        <h3>Gabriel Raymond</h3>
        {/* <p>
          Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
          eligendi fuga maxime saepe commodi placeat.
        </p> */}
        <div className="social-links">
          <span className="twitter m-2">
            <a
              style={{ display: "table-cell" }}
              href="https://twitter.com/GabrielR1596"
              target="_blank"
              className=""
              rel="noreferrer noopener"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </span>
          <span className="facebook m-2">
            <a
              style={{ display: "table-cell" }}
              href="https://www.facebook.com/gabdork/"
              target="_blank"
              className=""
              rel="noreferrer noopener"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </span>
          <span className="instagram m-2">
            <a
              style={{ display: "table-cell" }}
              href="https://www.instagram.com/gabrielraymond_/"
              target="_blank"
              className=""
              rel="noreferrer noopener"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </span>
          <span className="github m-2">
            <a
              style={{ display: "table-cell" }}
              href="https://github.com/gabrielraymond"
              target="_blank"
              className=""
              rel="noreferrer noopener"
            >
              <i className="fab fa-github"></i>
            </a>
          </span>
          <span className="linkedin m-2">
            <a
              style={{ display: "table-cell" }}
              href="https://www.linkedin.com/in/gabriel-dimpudus/"
              target="_blank"
              className=""
              rel="noreferrer noopener"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </span>
        </div>
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>GabrielRaymond</span>
          </strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
