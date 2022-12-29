import React from "react";

import { BIO_DESCRIPTION } from "./utils/commons";
import { GitIcon, LinkedinIcon, EmailIcon } from "../styled-components/Icons";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-container__header">contact</h2>
      <div className="contact-container__description-box">
        <div className="contact-container__description-box-bio">
          {BIO_DESCRIPTION}
        </div>
        <img
          src="./assets/bio_image.jpg"
          className="contact-container__description-box-image"
        ></img>
      </div>
      <div className="contact-container__icons">
        <div className="contact-container__icons_single-icon-container">
          <a href="https://github.com/rartamosa" a target="_blank">
            <GitIcon sx={{ height: "30px", width: "30px" }} />
          </a>
          <span>rartamosa</span>
        </div>

        <div className="contact-container__icons_single-icon-container">
          <a href="https://www.linkedin.com/in/marta-rosa/" a target="_blank">
            {" "}
            <LinkedinIcon />
          </a>
          <span>marta-rosa</span>
        </div>

        <div className="contact-container__icons_single-icon-container">
          <a href="mailto: rartamosa@gmail.com">
            <EmailIcon />
          </a>
          <span>rartamosa@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
