import React from "react";
import "./ProjectLanding.css";
import ProjectCard from "../project-card/ProjectCard";
import content from '../../lib/content';

function ProjectLanding() {
  return (
    <div className="project-landing">
      <div className="project-container">
        <div className="projects-welcome">
          <h1>My Projects</h1>
        </div>
        {content.projects.map((item, index) => {
          return (
            <ProjectCard
              image={item.image}
              name={item.title}
              content={item.description}
              reverse={index%2}
              link={item.link}
              idx={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectLanding;
