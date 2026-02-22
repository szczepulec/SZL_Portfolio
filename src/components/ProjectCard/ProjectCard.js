import React, { useState } from "react";
import "./ProjectCard.scss";
import { Fade } from "react-reveal";
import ProjectModal from "../ProjectModal/ProjectModal";

export default function ProjectCard({ project, isDark }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* This div becomes the actual grid item */}
      <div className="project-card-wrapper">
        <Fade bottom duration={1000} distance="20px">
          <div
            className={
              isDark
                ? "dark-card-mode repo-card-div"
                : "repo-card-div"
            }
            onClick={() => setOpen(true)}
          >
            <div className="repo-name-div">
              <p className="repo-name">
                {project.projectName}
              </p>
            </div>

            {project.image && (
              project.image.endsWith(".mp4") ? (
                <video
                  src={project.image}
                  className="project-card-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.projectName}
                  className="project-card-image"
                />
              )
            )}

            <p className="repo-description">
              {project.projectDesc}
            </p>

            <div className="repo-stats">
              <div className="repo-left-stat">
                <span>
                  <div
                    className="language-color"
                    style={{
                      backgroundColor: project.color || "#ffffff"
                    }}
                  ></div>
                  <p>{project.language}</p>
                </span>
              </div>

              <div className="repo-right-stat">
                <p>{project.size}</p>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      {open && (
        <ProjectModal
          project={project}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}