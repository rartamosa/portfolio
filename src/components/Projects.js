import React from "react";

import projects from "./utils/projects";

import SingleMobileProject from "./SingleMobileProject";
import SingleProject from "./SingleProject";

const Projects = ({ theme }) => {
  const PWAprojectsList = projects.filter((project) => project.mobile);

  const projectsList = projects.filter((project) => !project.mobile);

  return (
    <>
      <div className="projects__yellow-cirlce"></div>
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
      <div className="projects__orange-circle"></div>
      {projectsList.map((project) => (
        <SingleProject
          key={project._id}
          image={project.image}
          name={project.name}
          technologies={project.technologies}
          site={project.site}
          github={project.github}
          theme={theme}
        />
      ))}
    </>
  );
};

export default Projects;
