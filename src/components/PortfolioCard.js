import React from 'react'

const PortfolioCard = (props) => {
    return (
        <div className="col-lg-4" data-aos="fade-up">
          <div className="card mb-3">
            {/* <div className="card-img-top img"></div> */}
            <img
              src={props.img}
              className="card-img-top img"
              alt="laundryApp"
            />
            <div className="card-body">
              <h5 className="card-title">{props.title || "Title"}</h5>
              <p className="card-text">
                {props.desc}
              </p>
              <a href={props.link} className="btn btn-primary" target="_blank" rel="noreferrer noopener">
                Project
              </a>
              <a href={props.repo} className="btn btn-secondary" target="_blank" rel="noreferrer noopener">
                Code
              </a>
            </div>
          </div>
        </div>
    )
}

export default PortfolioCard
