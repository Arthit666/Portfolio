import React from "react";
import "./project.css";
const Project = ({ img, link, name }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="pp-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <div className="p-name">{name}</div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Project;
