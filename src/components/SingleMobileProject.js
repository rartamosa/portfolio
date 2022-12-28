import React from "react";
import { styled } from "@mui/material";
import uniqid from "uniqid";

import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";

import { PRIMARY_ACCENT_COLOR } from "./utils/commons";

const SingleMobileProject = ({
  image,
  name,
  technologies,
  site,
  github,
  theme,
}) => {
  return (
    <div className="singleMobileProject_container">
      <img src={image} className="singleMobileProject_img" />
      <div
        className={`singleMobileProject_details ${
          theme === "light" ? "singleMobileProject_details-light" : ""
        }`}
      >
        <div className="singleMobileProject_description">
          <h3 className="singleMobileProject_description-title">{name}</h3>
          <ul className="singleMobileProject_description-list">
            {technologies.map((technology) => (
              <li key={uniqid()}>{technology}</li>
            ))}
          </ul>
        </div>
        <div className="singleMobileProject_icon-container">
          <div className="singleMobileProject_icon-container_single-icon">
            <WebsiteIcon />
            <a href={site} target="_blank">
              live site
            </a>
          </div>
          <hr className="singleMobileProject_icon-container_line" />
          <div className="singleMobileProject_icon-container_single-icon">
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

export default SingleMobileProject;

export const WebsiteIcon = styled(WebIcon)(() => ({
  color: PRIMARY_ACCENT_COLOR,
  width: "35px",
  height: "35px",
}));

export const GitIcon = styled(GitHubIcon)(() => ({
  color: PRIMARY_ACCENT_COLOR,
  width: "35px",
  height: "35px",
}));
