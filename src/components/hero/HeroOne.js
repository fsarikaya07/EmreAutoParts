import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAutoContext } from "../../Context/Context";
import { slider } from "../../data/Data";

const HeroOne = () => {
  const { lang } = useAutoContext();
  const data = slider.find((item) => item.lang === lang).data;
  console.log("slider", data);

  useEffect(() => {
    const $ = window.$;

    if ($(".slider-carousel").length) {
      $(".slider-carousel").owlCarousel({
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        loop: true,
        margin: 0,
        nav: false,
        singleItem: true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 6000,
        navText: [
          '<span class="icon-right-arrow"></span>',
          '<span class="icon-right-arrow"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1024: {
            items: 1,
          },
        },
      });
    }
  }, []);
  
  return (
    <>
      <section className="slider-one-sec style3">
        <div className="slider-carousel owl-carousel owl-theme">
          {/* Start Slider One Single */}
          {data.map((item, index) => {
            return (
              <div className="slider-one__single" key={index}>
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: `url(${item.images})`,
                  }}
                ></div>
                <div className="container">
                  <div className="row clearfix">
                    <div className="col-xl-12">
                      <div className="slider-one__single-content">
                        <h3>{item.title}</h3>
                        <h2>{item.title2}</h2>
                        <p>{item.content}</p>
                        {/* <div className="btn-box">
                          <Link
                            to={process.env.PUBLIC_URL + `/`}
                            className="thm-btn"
                            data-text="Read More +"
                          >
                            Read More +
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* End Slider One Single */}
        </div>
      </section>
    </>
  );
};
export default HeroOne;
