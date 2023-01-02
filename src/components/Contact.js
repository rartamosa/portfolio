import React from "react";

import { GitIcon, LinkedinIcon, EmailIcon } from "../styled-components/Icons";
import Skills from "./Skills";

const Contact = ({ theme }) => {
  return (
    <>
      <div className="contact-container" id="contact">
        <h2 className="contact-container__header">contact</h2>
        <div className="contact-container__description-box">
          <div className="contact-container__description-box-bio">
            As a project manager, I have honed my skills in project planning,
            cross-functional team management, and communication. Looking to
            pivot my career into front-end development, I am excited to bring my
            strong attention to detail and ability to deliver projects on time
            to a new role. I am currently completing a front-end bootcamp and am
            eager to apply my skills in a junior developer position.
            <br /> <br />
            After a time of managing projects, I’m ready to start creating them
            - one line of code at a time.
          </div>
          <img
            src="./assets/bio_image.jpg"
            className="contact-container__description-box-image"
            title="bio"
            alt="bio"
          ></img>
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
      </div>
      <Skills theme={theme} />
    </>
  );
};

export default Contact;
