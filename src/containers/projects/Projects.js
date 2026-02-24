import React, { useContext } from "react";
import "./Project.scss";
import { projects } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  const { isDark } = useContext(StyleContext);

  if (!projects.display) return null;

  return (
    <div className="main" id="projects">
      <h1 className="project-title">{projects.title}</h1>
      <p>{projects.subtitle}</p>
      <div className="repo-cards-div-main">
        {projects.projects.map((project, i) => (
          <div key={i} className="project-card">
            <img src={project.image} alt={project.projectName} />
            <h2>{project.projectName}</h2>
            <p>{project.projectDesc}</p>
            {project.footerLink.map((link, j) => (
              <a key={j} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}