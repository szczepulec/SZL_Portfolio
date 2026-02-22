import React, { useContext } from "react";
import "./Project.scss";
import { projectsSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function Projects() {
  const { isDark } = useContext(StyleContext);

  if (!projectsSection.display) return null;

  return (
    <div className="main" id="portfolio">
      <h1 className="project-title">
        {projectsSection.title}
      </h1>

      <div className="repo-cards-div-main">
        {projectsSection.projects.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            isDark={isDark}
          />
        ))}
      </div>
    </div>
  );
}