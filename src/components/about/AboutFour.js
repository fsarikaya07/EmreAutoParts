import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { aboutUs } from "../../data/Data";
import { useAutoContext } from "../../Context/Context";

const AboutFour = () => {
  const { lang } = useAutoContext();
  const data = aboutUs.find((item) => item.lang === lang).data;

  console.log("object", data);

  useEffect(() => {
    const $ = window.$;

    if ($(".video-popup").length) {
      $(".video-popup").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: true,

        fixedContentPos: false,
      });
    }
  }, []);

  return (
    <>
      <div className="about-three">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-three__img">
                <div className="inner">
                  <img src={data.images} alt="#" />
                  <div
                    className="about-three__img-video wow zoomIn"
                    data-wow-delay="100ms"
                  >
                    <a href={data.video} className="video-popup">
                      <div className="about-three__img-video-icon">
                        <span className="fa fa-play"></span>
                        <i className="ripple"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="about-three__content">
                <div className="sec-title">
                  <div className="sec-title__tagline">
                    <h6> {data.title} </h6> <span className="right"></span>
                  </div>
                  <h2 className="sec-title__title">{data.title2}</h2>
                </div>

                <div className="about-three__content-inner">
                  <div className="text1">
                    <p>{data.content}</p>
                  </div>
                  <div className="text2">
                    <h4>{data.content2}</h4>
                  </div>
                  {/* <ul></ul> */}
                  <div className="about-three__content-btn">
                    <Link
                      href={`/${data.slug}`}
                      className="thm-btn"
                      data-text={data.button}
                    >
                      {data.button}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutFour;
