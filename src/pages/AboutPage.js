import React from "react";
import Header from "../components/header/Header";
import Skills from "../containers/skills/Skills";
// import News from "../containers/News/News";
import WorkExperience from "../containers/workExperience/WorkExperience";
import Education from "../containers/education/Education";
import ScrollToTopButton from "../containers/topbutton/Top";
import Footer from "../components/footer/Footer";
import "./About.scss";

const AboutPage = () => {
  return (
    <>
      <Header />
      {/* <News /> */}
      <Education />
      <WorkExperience />
      <Skills />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default AboutPage;