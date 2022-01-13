import React from "react";
import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="portfolio container d-flex justify-content-flex flex-column "
    >
      <div className="section-title">
        <h1 data-aos="fade-up">Portfolio</h1>
        {/* <p>
          Sit sint consectetur velit quisquam cupiditate impedit suscipit alias
        </p> */}
      </div>
      <div className="row text-dark">
        <PortfolioCard
          title="Laundry Cashier Application"
          img={require("./img/LaundryApp.png")}
          link="https://festive-swanson-438711.netlify.app/login"
          repo="https://github.com/gabrielraymond/LaundryApp/tree/master"
          desc="laundry cashier application is an application for administrative purposes in laundry with many features such as creating customers, laundry packages, payment methods, transactions and being able to print invoices and financial reports as desired. this application is made with MERN technology (MongoDB, Expressjs, Reactjs, Nodejs) and you can try with demo account (username : gabriel , password : gabriel)"
        />
        <PortfolioCard
          title="Laundry Landing Page"
          img={require("./img/LaundryLandingPage.png")}
          link="https://gabrielraymond.github.io/lndry_2.0/"
          repo="https://github.com/gabrielraymond/lndry_2.0/tree/master"
          desc='This website was created to fulfill the final project of an online course "Belajar Dasar Pemrograma" from dicoding but I developed it using React.js'
        />

        <PortfolioCard
          title="Tindog"
          img={require("./img/tindog.png")}
          link="https://gabrielraymond.github.io/tindog-with-bootstrap/"
          repo="https://github.com/gabrielraymond/tindog-with-bootstrap"
          desc="landing page for like tinder but good for pets. Technology: HTML + CSS + Javascript"
        />
        <PortfolioCard
          title="wTODO"
          img={require("./img/wTodo.png")}
          link="https://vigilant-kowalevski-874e41.netlify.app/login"
          repo="/"
          desc="wtodo is a todo application with additional authentication so that each user can maintain the confidentiality of the planned activities. Technology : MERN (MongoDB, Expressjs, Reactjs, Nodejs)"
        />
      </div>
    </section>
  );
};

export default Portfolio;
