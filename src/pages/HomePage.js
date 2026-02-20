import React from "react";
import Header from "../components/header/Header";
import Greeting from "../containers/greeting/Greeting";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "../containers/topbutton/Top";
import "./Home.scss";

const HomePage = () => {
  return (
    <>
      <Header />
      <Greeting />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default HomePage;