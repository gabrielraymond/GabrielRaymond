import React from "react";

const Skill = (props) => {
  return (
    <div className="progress" id="progres">
      <span className="skill">
        {props.skill} <i className="val">{props.progress}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          data-aos="fade-right"
          className="progress-bar"
          role="progressbar"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${props.progress}%`, height: "10px" }}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
