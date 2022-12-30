import React, { useState } from "react";

import { BIO_DESCRIPTION } from "./utils/commons";
import { GitIcon, LinkedinIcon, EmailIcon } from "../styled-components/Icons";
import Skills from "./Skills";

const Contact = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    // e.preventDefault();
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    // e.stopPropagation();
    setIsHovering(false);
  };

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
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <GitIcon sx={{ height: "30px", width: "30px" }} />
            </a>
            <span className={isHovering ? "visible" : ""}>rartamosa</span>
          </div>

          <div className="contact-container__icons_single-icon-container">
            <a
              href="https://www.linkedin.com/in/marta-rosa/"
              a
              target="_blank"
              rel="noreferrer"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <LinkedinIcon />
            </a>
            {/* {isHovering && <span>marta-rosa</span>} */}
            <span className={isHovering ? "visible" : ""}>marta-rosa</span>
          </div>

          <div className="contact-container__icons_single-icon-container">
            <a
              href="mailto: rartamosa@gmail.com"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <EmailIcon />
            </a>
            {/* {isHovering && <span>rartamosa@gmail.com</span>} */}
            <span className={isHovering ? "visible" : ""}>
              rartamosa@gmail.com
            </span>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default Contact;
