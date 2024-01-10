import React from "react";
import { contact } from "../../data/Data";
import { useAutoContext } from "../../Context/Context";
import { LangWords } from "../../data/LangData";

const ContactForm = () => {
  const { lang } = useAutoContext();
  const data = contact.find((item) => item.lang === lang).data;
  const dataLAng = LangWords.find((item) => item.lang === lang).data;

  return (
    <>
      <div className="contact-page">
        <div className="container">
          <div className="row">
            <div className="sec-title text-center">
              <h1>{data.firma}</h1>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-5">
              <br />
              <div className="contact-page__content">
                <div className="contact-page__content-single">
                  <div className="contact-page__content-single-inner">
                    <div className="icon-box">
                      <span className="icon-pin"></span>
                    </div>

                    <div className="content-box">
                      <h3>Adresse</h3>
                      <p>{data.adres}</p>
                    </div>
                  </div>
                </div>

                <div className="contact-page__content-single">
                  <div className="contact-page__content-single-inner">
                    <div className="icon-box">
                      <span className="icon-phone-call-1"></span>
                    </div>

                    <div className="content-box">
                      <h3>Telefon</h3>
                      <p className="number1">
                        <a href={`tel:${data.iletişim}`}>{data.iletişim}</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-page__content-single">
                  <div className="contact-page__content-single-inner">
                    <div className="icon-box">
                      <span className="icon-email"></span>
                    </div>

                    <div className="content-box">
                      <h3>Email </h3>
                      <p className="email1">
                        <a href={`mailto:${data.email}`}>{data.email}</a>
                      </p>
                      <p className="email2">
                        <a href={`mailto:${data.email}`}>{data.email}</a>
                      </p>
                      <h6 className="email3">
                        <a href={`mailto:${data.email}`}>
                          Dış Ticaret Satış Yetkilisi:
                        </a>
                      </h6>
                      <p className="email3">
                        <a href={`mailto:${data.email}`}>{data.email}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8 col-md-7">
              <div className="contact-page__form">
                <form
                  action="#"
                  className="comment-one__form contact-form-validated"
                  novalidate="novalidate"
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Full name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="email"
                          placeholder="Email address"
                          name="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input type="text" placeholder="Phone" name="phone" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div className="comment-form__input-box text-message-box">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                        ></textarea>
                      </div>

                      <button
                        className="thm-btn comment-form__btn"
                        data-text={dataLAng.sendmessage}
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        {dataLAng.sendmessage}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactForm;
