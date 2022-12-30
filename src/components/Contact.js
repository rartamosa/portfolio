import React from "react";

import { BIO_DESCRIPTION } from "./utils/commons";
import { GitIcon, LinkedinIcon, EmailIcon } from "../styled-components/Icons";
import Skills from "./Skills";

const Contact = ({ theme }) => {
  return (
    <>
      <div className="contact-container" id="contact">
        <h2 className="contact-container__header">contact</h2>
        <div className="contact-container__description-box">
          <div className="contact-container__description-box-bio">
            {BIO_DESCRIPTION}
          </div>
          <img
            src="./assets/bio_image.jpg"
            className="contact-container__description-box-image"
            title="bio"
            alt="bio"
          ></img>
        </div>
        <div className="contact-container__icons">
          <div className="contact-container__icons_single-icon-container">
            <a
              href="https://github.com/rartamosa"
              a
              target="_blank"
              rel="noreferrer"
            >
              <GitIcon
                darktheme={Boolean(theme === "dark")}
                sx={{ height: "30px", width: "30px" }}
              />
            </a>
            <span>rartamosa</span>
          </div>

          <div className="contact-container__icons_single-icon-container">
            <a
              href="https://www.linkedin.com/in/marta-rosa/"
              a
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon darktheme={Boolean(theme === "dark")} />
            </a>
            <span>marta-rosa</span>
          </div>

          <div className="contact-container__icons_single-icon-container">
            <a href="mailto: rartamosa@gmail.com">
              <EmailIcon darktheme={Boolean(theme === "dark")} />
            </a>
            <span>rartamosa@gmail.com</span>
          </div>
        </div>
      </div>
      <Skills theme={theme} />
    </>
  );
};

export default Contact;
