import React, { useContext, useEffect, useState } from "react";
import "./Project.scss";
import { projectsSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

// Matches the previous column-count breakpoints (4/3/2/1).
function getColumnCount() {
  const width = window.innerWidth;
  if (width <= 768) return 1;
  if (width <= 1000) return 2;
  if (width <= 1400) return 3;
  return 4;
}

// Distributes items round-robin across columns (item 1 -> col 1, item 2 ->
// col 2, ...) so reading order goes left-to-right across a row before
// wrapping, while each column still stacks its own cards with no gaps.
function bucketizeRoundRobin(items, columnCount) {
  const columns = Array.from({ length: columnCount }, () => []);
  items.forEach((item, i) => {
    columns[i % columnCount].push(item);
  });
  return columns;
}

export default function Projects() {
  const { isDark } = useContext(StyleContext);
  const [columnCount, setColumnCount] = useState(getColumnCount);

  useEffect(() => {
    const handleResize = () => setColumnCount(getColumnCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!projectsSection.display) return null;

  const columns = bucketizeRoundRobin(projectsSection.projects, columnCount);

  return (
    <div className="main" id="portfolio">
      <h1 className="project-title">
        {projectsSection.title}
      </h1>

      <div className="repo-cards-div-main">
        {columns.map((columnProjects, colIndex) => (
          <div className="repo-cards-column" key={colIndex}>
            {columnProjects.map(project => (
              <ProjectCard
                key={project.projectName}
                project={project}
                isDark={isDark}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
