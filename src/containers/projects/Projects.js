import React, { useContext } from "react";
import "./Project.scss";
import { projects } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  const { isDark } = useContext(StyleContext);

  if (!projects.display) return null;

  return (
    <div className="projects-section">
      {projects.categories.map((category, cIdx) => (
        <div key={cIdx} className="project-category">
          <h2 className="category-title">{category.title}</h2>

          <div className="repo-cards-div-main">
            {category.projects.map((project, i) => (
              <div key={i} className="project-card">
                <img src={project.image} alt={project.projectName} />
                <h2>{project.projectName}</h2>
                <p>{project.projectDesc}</p>

                <div className="project-links">
                  {project.footerLink.map((link, j) => (
                    <a
                      key={j}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}