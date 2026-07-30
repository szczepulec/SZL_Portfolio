import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProjectsSection from "../containers/projects/Projects";
import ResearchSection from "../components/research/ResearchSection";
import ScrollToTopButton from "../containers/topbutton/Top";
import "./Projects.scss";

const ProjectsPage = () => {
  return (
    <>
      <Header />
      <ResearchSection />
      <ProjectsSection />
      <p className="page-last-updated">Last updated: 30.07.2026</p>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};
//      
//      
export default ProjectsPage;