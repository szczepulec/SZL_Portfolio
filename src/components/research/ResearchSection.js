import React, { useState, useContext } from "react";
import "./ResearchCard.scss"; // reuse existing styling
import { researchSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import ResearchModal from "./ResearchModal";

export default function ResearchSection() {
  const { isDark } = useContext(StyleContext);
  const [activeProject, setActiveProject] = useState(null);

  if (!researchSection.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="research">
        <div>
          <h1 className="skills-heading">
            {researchSection.title}
          </h1>

          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {researchSection.subtitle}
          </p>

          <div className="projects-container">
            {researchSection.projects.map((project, i) => (
              <div
                key={i}
                className={
                  isDark
                    ? "dark-mode project-card project-card-dark"
                    : "project-card project-card-light"
                }
              >
                {project.image && (
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.projectName}
                      className="card-image"
                    />
                  </div>
                )}

                <div className="project-detail">
                  <h5
                    className={
                      isDark
                        ? "dark-mode card-title"
                        : "card-title"
                    }
                  >
                    {project.projectName}
                  </h5>

                  <p
                    className={
                      isDark
                        ? "dark-mode card-subtitle"
                        : "card-subtitle"
                    }
                  >
                    {project.projectDesc}
                  </p>

                  <div className="project-card-footer">
                    <span
                      className={
                        isDark
                          ? "dark-mode project-tag"
                          : "project-tag"
                      }
                      onClick={() =>
                        setActiveProject(project)
                      }
                    >
                      Read More
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {activeProject && (
          <ResearchModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </div>
    </Fade>
  );
}