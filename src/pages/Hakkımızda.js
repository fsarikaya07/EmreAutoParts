import React from "react";
import HeaderThree from "../common/header/HeaderThree";

import WhyChooseFour from "../components/why-choose-us/WhyChooseFour";

import FooterOne from "../common/footer/FooterOne";
import AboutUsDetail from "../components/iletişim/HakkimizdaDetail";


const AboutUs = () => {
  return (
    <>
      <HeaderThree />
      <AboutUsDetail />
      <WhyChooseFour />
      <FooterOne />
    </>
  );
};

export default AboutUs;
