export default function ResearchCard({ project, onClick }) {
  return (
    <div className="research-card">
      <img src={project.previewImage} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.shortDescription}</p>
      <button onClick={onClick}>Read More</button>
    </div>
  );
}