import React, { useState } from "react";

const Skills = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <h3 className="skills__header">skills</h3>
      <div className="skills__container">
        <div
          className="skills__container-single-skill"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src="./assets/html5_icon.png" title="html5" alt="html5" />
          {isHovering && <span>html5</span>}
        </div>

        <div
          className="skills__container-single-skill"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src="./assets/css3_icon.png" title="css3" alt="css3" />
          {isHovering && <span>css3</span>}
        </div>

        <div
          className="skills__container-single-skill"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src="./assets/JS_icon.png" title="JS" alt="JS" />
          {isHovering && <span>js + es6</span>}
        </div>

        <div
          className="skills__container-single-skill"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img
            src="./assets/restapi_icon.png"
            title="rest apis"
            alt="rest apis"
          />
          {isHovering && <span>rest apis</span>}
        </div>

        <div
          className="skills__container-single-skill"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src="./assets/react_icon.png" title="react" alt="react" />
          {isHovering && <span>react</span>}
        </div>

        <div
          className="skills__container-single-skill"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src="./assets/redux_icon.png" title="redux" alt="redux" />
          {isHovering && <span>redux</span>}
        </div>

        <div
          className="skills__container-single-skill"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src="./assets/gitflow_icon.png" title="git" alt="git" />
          {isHovering && <span>git</span>}
        </div>

        <div
          className="skills__container-single-skill"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img
            src="./assets/terminal_icon.png"
            title="terminal"
            alt="terminal"
          />
          {isHovering && <span>terminal</span>}
        </div>

        <div
          className="skills__container-single-skill"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img
            src="./assets/RWD_icon.png"
            title="responsive design"
            alt="responsive design"
          />
          {isHovering && <span>responsive design</span>}
        </div>

        <div
          className="skills__container-single-skill"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src="./assets/figma_icon.png" title="figma" alt="figma" />
          {isHovering && <span>figma</span>}
        </div>
      </div>
    </>
  );
};

export default Skills;
