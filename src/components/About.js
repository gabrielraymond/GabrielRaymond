import React from "react";
import "./About.css";
import Skill from "./Skill";

const About = () => {
  return (
    <section
      id="about"
      className="about container d-flex justify-content-flex flex-column "
    >
      <div className="section-title">
        <h1 data-aos="fade-up" data-aos-duration="3000">
          About Me
        </h1>
        {/* <p data-aos="fade-up" data-aos-duration="3000">
          What I think about myself
        </p> */}
      </div>
      <div className="row text-start bio">
        <div className="image col-sm-4" data-aos="fade-up"></div>
        <div className="col-sm-8">
          <p className="ps-3 bio-desc" data-aos="fade-up">
            Hello! my name is Gabriel Raymond Dimpudus and I really enjoy
            creating things in technology. i am a graduate of electronics
            engineering and my interest in web development started in 2020 when
            i tried to make the web and found the combination of art and
            technology on the Web.
          </p>
          <p className="ps-3 bio-desc" data-aos="fade-up">
            I am currently accepting freelance projects to increase my
            experience in the field of web development and looking for a
            full-time job
          </p>
          <div className="row mt-3" data-aos="fade-up">
            <div className="col-sm-6">
              <ul>
                <li className="mb-3">
                  <i className="fas fa-chevron-right"></i>
                  <strong>Name: </strong>
                  <span>Gabriel Raymond Dimpudus</span>
                </li>
                <li className="mb-3">
                  <i className="fas fa-chevron-right"></i>
                  <strong>Website: </strong>
                  <span>...</span>
                </li>
                <li className="mb-3">
                  <i className="fas fa-chevron-right"></i>
                  <strong>Phone: </strong>
                  <span>+62 899 5432 207</span>
                </li>

                <li className="mb-3">
                  <i className="fas fa-chevron-right"></i>
                  <strong>City: </strong>
                  <span>Jakarta || Manado, Indonesia</span>
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul>
                <li className="mb-3">
                  <i className="fas fa-chevron-right"></i>
                  <strong>Birthday: </strong>
                  <span>15 November 1996</span>
                </li>
                <li className="mb-3">
                  <i className="fas fa-chevron-right"></i>
                  <strong>Degree: </strong>
                  <span>Bachelor</span>
                </li>
                <li className="mb-3">
                  <i className="fas fa-chevron-right"></i>
                  <strong>Full-Time: </strong>
                  <span>Available</span>
                </li>
                <li className="mb-3">
                  <i className="fas fa-chevron-right"></i>
                  <strong>Freelance: </strong>
                  <span>Available</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="skills-content ps-3" data-aos="fade-up">
            <Skill skill="HTML+CSS" progress={100} />
            <Skill skill="Javascript" progress={80} />
            <Skill skill="Figma" progress={70} />
            <Skill skill="React.js" progress={70} />
            <Skill skill="Node.js" progress={60} />
            <Skill skill="MongoDB" progress={70} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
