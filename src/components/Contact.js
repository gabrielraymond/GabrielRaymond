import React from "react";
import emailjs from "emailjs-com"
import "./Contact.css";

const Contact = () => {

  const sendEmail =(e) => {
    e.preventDefault();
    emailjs.sendForm('gmail','template_n721uhe',e.target,"user_HX91zDmvOhjjYTusOfRfK").then(res => {
      console.log(res)
    }).catch(err=> console.log(err));
  }

  return (
    <section
      id="contact"
      className="contact container d-flex justify-content-flex flex-column "
    >
      <div className="section-title">
        <h1 data-aos="fade-up">Contact Me</h1>
        {/* <p data-aos="fade-up">
          Sit sint consectetur velit quisquam cupiditate impedit suscipit alias
        </p> */}
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="row ">
            <div className="col-md-12" data-aos="fade-up">
              <div className="info-box border pt-4 pb-4 contact-form">
                <i className="fas fa-share-alt"></i>
                <h3 className="mt-2">Social Profiles</h3>
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
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up">
              <div className="info-box mt-4 pt-3 pb-3 border contact-form">
                <i className="far fa-envelope"></i>
                <h3 className="mt-2">Email Me</h3>
                <p>gabrielraymond.grd@gmail.com</p>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up">
              <div className="info-box mt-4 pt-3 pb-3 border contact-form">
                <i className="fas fa-phone-alt"></i>
                <h3 className="mt-2">Call Me</h3>
                <p>+62 899 5432 207</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up">
          <div className="contact-form border">
            <form onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                  ></input>
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="form-control"
                  ></input>
                </div>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control mt-3"
              ></input>
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                className="form-control mt-3"
              ></textarea>
              <div className="text-center">
                <button type="submit" className="btn btn-secondary mt-3">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
