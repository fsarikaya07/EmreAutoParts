import React from "react";

const WhatsApp = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <a
        href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
        className="float"
        target="_blank"
      >
        <i className="fa fa-whatsapp my-float" />
      </a>
    </>
  );
};

export default WhatsApp;
