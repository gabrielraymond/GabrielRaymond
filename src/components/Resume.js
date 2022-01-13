import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section
      id="resume"
      className="resume container d-flex justify-content-flex flex-column "
    >
      <div className="section-title">
        <h1>My Resume</h1>
        <p>
          Sit sint consectetur velit quisquam cupiditate impedit suscipit alias
        </p>
      </div>
      <div className="row text-start">
        <div className="col-sm-6">
          <h3>Summary</h3>
          <div className="resume-item pb-0">
            <h4>ALICE BARKLEY</h4>
            <p>
              <em>
                Innovative and deadline-driven Graphic Designer with 3+ years of
                experience designing and developing user-centered digital/print
                marketing material from initial concept to final, polished
                deliverable.
              </em>
            </p>
            <ul>
              <li>Tondano, Sulawesi Utara</li>
              <li>08995432207</li>
              <li>gabrielraymond.grd@gmail.com</li>
            </ul>
          </div>
          <h3>Education</h3>
          <div className="resume-item">
            <h4>BACHELOR OF ELECTRONICS ENGINEERING</h4>
            <h5>2015-2020</h5>
            <p>
              <em>Salatiga, West Java, INDONESIA</em>
            </p>
          </div>
          <h3>Professional Experience</h3>
          <div className="resume-item ">
            <h4>Web developer for Freelance Project in Debora Laundry</h4>
            <h5>Nov 2021-Des 2021</h5>
            <p>
              <em>Manado, North Sulawesi</em>
            </p>
            <ul>
              <li>
                Create a laundry cashier web application that has features for
                creating customers, laundry packages, methods payments,
                transactions and can print invoices and financial reports as
                desired.
              </li>
              <li>
                Aplikasi web dapat berjalan secara online dan dibuat melalui
                teknologi MERN (MongoDB, Expressjs, Reactjs, dan Nodejs)
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="resume-item pb-0">
            <h4>
              Assistant Lecturer for Digital Strand IN SATYA WACANA CHRISTIAN
              UNIVERSITY
            </h4>
            <h5>Aug 2019-Des 2019</h5>
            <p>
              <em>Salatiga, Middle Java</em>
            </p>
            <ul>
              <li>
                Responsible for assisting students during practicum and
                explaining the aims and objectives of the practice carried out
                in the laboratory.
              </li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>
              Staff Intern Research and Development IN SATYA WACANA CHRISTIAN
              UNIVERSITY
            </h4>
            <h5>2015-2020</h5>
            <p>
            <em>Salatiga, Middle Java</em>
            </p>
            <ul>
              <li>
                Responsible for researching and developing an Internet of Things
                tool to monitor and control plantations using a remote wireless
                network (LoRa/LongRange).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
