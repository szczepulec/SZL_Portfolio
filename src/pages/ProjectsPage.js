import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "../containers/topbutton/Top";
import "./Projects.scss";

const ProjectsPage = () => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "60vh", padding: "40px", textAlign: "center" }}>
        <h1>Notes</h1>
        <p>Content coming soon.</p>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};
//      <ProjectsSection />
//      <StartupProject />
export default ProjectsPage;