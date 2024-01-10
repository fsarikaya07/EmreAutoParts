import React from "react";

const ContactMap = () => {
  return (
    <>
      <div className="contact-page-google-map">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <iframe
                title="Address"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83725.49060826753!2d11.954452573518983!3d49.02158834448992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479fc19872222ef7%3A0x41d25a40937cb10!2sRegensburg%2C%20Almanya!5e0!3m2!1str!2str!4v1704910321434!5m2!1str!2str"
                className="contact-page-google-map__one"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactMap;
