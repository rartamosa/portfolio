import React from "react";
import uniqid from "uniqid";

import { WebsiteIcon, GitIcon } from "../styled-components/Icons.js";

const SingleProject = ({ image, name, technologies, site, github, theme }) => {
  return (
    <div className="single-project__container">
      <img src={image} className="single-project__laptop-img" />
      <div
        className={`single-project__details ${
          theme === "light" ? "single-project__details-light" : ""
        }`}
      >
        <div>
          <h3 className="single-project__description-title">{name}</h3>
          <ul className="single-project__description-list">
            {technologies.map((technology) => (
              <li key={uniqid()}>{technology}</li>
            ))}
          </ul>
        </div>
        <div className="single-project__icon-container">
          <div className="single-project__icon-container_single-icon">
            <WebsiteIcon />
            <a href={site} target="_blank">
              live site
            </a>
          </div>
          <hr className="single-project__icon-container_line" />
          <div className="single-project__icon-container_single-icon">
            <GitIcon />
            <a href={github} target="_blank">
              github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
