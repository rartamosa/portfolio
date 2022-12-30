import React from "react";

const Skills = ({ theme }) => {
  return (
    <>
      <h3 className="skills__header">skills</h3>
      <div className="skills__container">
        <div className="skills__container-single-skill">
          <img
            src={
              theme === "dark"
                ? "./assets/html5_icon.png"
                : "./assets/html5_icon_dark.png"
            }
            title="html5"
            alt="html5"
          />
          <span>html5</span>
        </div>

        <div className="skills__container-single-skill">
          <img
            src={
              theme === "dark"
                ? "./assets/css3_icon.png"
                : "./assets/css3_icon_dark.png"
            }
            title="css3"
            alt="css3"
          />
          <span>css3</span>
        </div>

        <div className="skills__container-single-skill">
          <img
            src={
              theme === "dark"
                ? "./assets/JS_icon.png"
                : "./assets/JS_icon_dark.png"
            }
            title="JS"
            alt="JS"
          />
          <span>js + es6</span>
        </div>

        <div className="skills__container-single-skill">
          <img
            src={
              theme === "dark"
                ? "./assets/restapi_icon.png"
                : "./assets/restapi_icon_dark.png"
            }
            title="rest apis"
            alt="rest apis"
          />
          <span>rest apis</span>
        </div>

        <div className="skills__container-single-skill">
          <img
            src={
              theme === "dark"
                ? "./assets/react_icon.png"
                : "./assets/react_icon_dark.png"
            }
            title="react"
            alt="react"
          />
          <span>react</span>
        </div>

        <div className="skills__container-single-skill">
          <img
            src={
              theme === "dark"
                ? "./assets/redux_icon.png"
                : "./assets/redux_icon_dark.png"
            }
            title="redux"
            alt="redux"
          />
          <span>redux</span>
        </div>

        <div className="skills__container-single-skill">
          <img
            src={
              theme === "dark"
                ? "./assets/gitflow_icon.png"
                : "./assets/gitflow_icon_dark.png"
            }
            title="git"
            alt="git"
          />
          <span>git</span>
        </div>

        <div className="skills__container-single-skill">
          <img
            src={
              theme === "dark"
                ? "./assets/terminal_icon.png"
                : "./assets/terminal_icon_dark.png"
            }
            title="terminal"
            alt="terminal"
          />
          <span>terminal</span>
        </div>

        <div className="skills__container-single-skill">
          <img
            src={
              theme === "dark"
                ? "./assets/RWD_icon.png"
                : "./assets/RWD_icon_dark.png"
            }
            title="responsive design"
            alt="responsive design"
          />
          <span>responsive design</span>
        </div>

        <div className="skills__container-single-skill">
          <img
            src={
              theme === "dark"
                ? "./assets/figma_icon.png"
                : "./assets/figma_icon_dark.png"
            }
            title="figma"
            alt="figma"
          />
          <span>figma</span>
        </div>
      </div>
    </>
  );
};

export default Skills;
