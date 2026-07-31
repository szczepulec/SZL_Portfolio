import { useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import StyleContext from "../../contexts/StyleContext";
import "./ProjectModal.scss";

export default function ProjectModal({ project, onClose }) {
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const { content } = project.modalContent;

  // Group content into ordered sections so full-width blocks can be
  // placed above or below column blocks just by reordering the data.
  const sections = [];
  content.forEach(block => {
    const kind = block.fullWidth ? "fullWidth" : "columns";
    const lastSection = sections[sections.length - 1];
    if (!lastSection || lastSection.kind !== kind) {
      sections.push({ kind, blocks: [block] });
    } else {
      lastSection.blocks.push(block);
    }
  });

  const renderBlock = (block, index) => {
    const classNames = ["modal-block"];

    if (block.fullWidth) classNames.push("full-width");
    if (block.column === "left") classNames.push("left-column");
    if (block.column === "right") classNames.push("right-column");

    switch (block.type) {
      case "text":
        return (
          <div key={index} className={classNames.join(" ")}>
            {block.value.split("\n\n").map((paragraph, i) => (
              <p key={i} className="modal-text">
                {paragraph}
              </p>
            ))}
          </div>
        );

      case "image":
        return (
          <div key={index} className={classNames.join(" ")}>
            <figure className="modal-figure">
              <img
                src={block.src}
                alt="project"
                className="modal-image"
              />
              {block.caption && (
                <figcaption className="modal-caption">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          </div>
        );

      case "pdf":
        return (
          <div key={index} className={classNames.join(" ")}>
            <iframe
              src={block.src}
              title="Project PDF"
              className="modal-pdf"
            />
          </div>
        );

      case "video":
        return (
          <div key={index} className={classNames.join(" ")}>
            <figure className="modal-figure">
              {block.embed ? (
                <iframe
                  src={block.src}
                  className="modal-video"
                  title="Video"
                  allowFullScreen
                />
              ) : (
                <video
                  src={block.src}
                  className="modal-video"
                  controls
                />
              )}

              {block.caption && (
                <figcaption className="modal-caption">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          </div>
        );

      default:
        return null;
    }
  };

  const modal = (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={
          isDark
            ? "modal-content modal-dark dark-mode"
            : "modal-content modal-light"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className="project-modal-top-actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-modal-github-link"
            >
              View on GitHub
            </a>
          )}
          <button className="project-modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-header">
          <div className="modal-header-inner">
            <h2>{project.projectName}</h2>
          </div>
        </div>

        <div className="modal-body">
          {sections.map((section, sectionIndex) => {
            if (section.kind === "fullWidth") {
              return (
                <div className="full-width-container" key={sectionIndex}>
                  {section.blocks.map((block, i) =>
                    renderBlock(block, `${sectionIndex}-${i}`)
                  )}
                </div>
              );
            }

            const leftBlocks = section.blocks.filter(
              block => block.column === "left" || !block.column
            );
            const rightBlocks = section.blocks.filter(
              block => block.column === "right"
            );

            return (
              <div className="two-column" key={sectionIndex}>
                <div className="modal-column left">
                  {leftBlocks.map((block, i) =>
                    renderBlock(block, `${sectionIndex}-l-${i}`)
                  )}
                </div>

                <div className="modal-column right">
                  {rightBlocks.map((block, i) =>
                    renderBlock(block, `${sectionIndex}-r-${i}`)
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}