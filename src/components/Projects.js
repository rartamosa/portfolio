import React from "react";

import projects from "./utils/projects";

import SingleMobileProject from "./SingleMobileProject";
import SingleProject from "./SingleProject";

const Projects = ({ theme }) => {
  const PWAprojectsList = projects.filter((project) => project.mobile === true);

  const projectsList = projects.filter((project) => project.mobile === false);

  return (
    <>
      {PWAprojectsList.map((project) => (
        <SingleMobileProject
          key={project._id}
          image={project.image}
          name={project.name}
          technologies={project.technologies}
          site={project.site}
          github={project.github}
          theme={theme}
        />
      ))}
      <SingleProject />
    </>
  );
};

export default Projects;
