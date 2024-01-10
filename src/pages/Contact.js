import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderThree from "../common/header/HeaderThree";
import ContactDetail from "../components/iletişim/IletisimDetail";
import ContactMap from "../components/iletişim/IletisimMap";
import ContactForm from "../components/iletişim/IletisimForm";

const Contact = () => {
  return (
    <>
      <HeaderThree />
      <ContactDetail />
      <ContactMap />
      <ContactForm />
      
      <FooterOne />
    </>
  );
};

export default Contact;
