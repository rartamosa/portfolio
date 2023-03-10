import React from "react";
import uniqid from "uniqid";

import { WebsiteIcon, GitIcon } from "../styled-components/Icons.js";

const SingleMobileProject = ({
  image,
  name,
  technologies,
  site,
  github,
  theme,
}) => {
  return (
    <div className="single-mobile-project__container">
      <img
        src={image}
        className="singleMobileProject_img"
        title="mobile project"
        alt="mobile project"
      />
      <div
        className={`single-mobile-project__details ${
          theme === "light" ? "single-project__details-light" : ""
        }`}
      >
        <div className="single-project__description">
          <h3 className="single-project__description-title">{name}</h3>
          <ul className="single-project__description-list">
            {technologies.map((technology) => (
              <li key={uniqid()}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="single-mobile-project__icon-container">
        <a
          href={site}
          target="_blank"
          rel="noreferrer"
          className="single-project__icon-container_single-icon"
        >
          <WebsiteIcon darktheme={Boolean(theme === "dark")} />
          <span>live site</span>
        </a>
        <hr
          className={`single-project__icon-container_line ${
            theme === "light" ? "single-project__icon-container_line-dark" : ""
          }`}
        />
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="single-project__icon-container_single-icon"
        >
          <GitIcon darktheme={Boolean(theme === "dark")} />
          <span>github</span>
        </a>
      </div>
    </div>
  );
};

export default SingleMobileProject;
