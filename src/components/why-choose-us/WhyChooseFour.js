import React, { useEffect } from "react";
import { AboutUsData } from "../../data/Data";
import { useAutoContext } from "../../Context/Context";

const WhyChooseFour = () => {
    const { lang } = useAutoContext();
    const data = AboutUsData.find((item) => item.lang === lang).data;
    console.log("lang",data);
    
  useEffect(() => {
    const $ = window.$;

    if ($(".count-bar").length) {
      $(".count-bar").appear(
        function () {
          var el = $(this);
          var percent = el.data("percent");
          $(el).css("width", percent).addClass("counted");
        },
        {
          accY: -50,
        }
      );
    }

    if ($(".circle-progress").length) {
      $(".circle-progress").appear(function () {
        let circleProgress = $(".circle-progress");
        circleProgress.each(function () {
          let progress = $(this);
          let progressOptions = progress.data("options");
          progress.circleProgress(progressOptions);
        });
      });
    }
  }, []);

  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <>
      <section className="why-choose-two-sec why-choose-two-sec--services">
        <div
          className="shape1 wow slideInLeft"
          data-wow-delay="100ms"
          data-wow-duration="2500ms"
        >
          <img
            src={publicUrl + "assets/images/shapes/why-choose-v2-shape1.png"}
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            {/* Start Why Choose Two Content */}
            <div className="col-xl-6">
              <div className="why-choose-two__content">
                <div className="sec-title">
                  <div className="sec-title__tagline">
                    {/* <span className="right"></span>  */}
                    <h6>{data.title1}</h6>
                    {/* <span className="right"></span> */}
                  </div>
                  <h2 className="sec-title__title">{data.title2} </h2>
                </div>

                <div className="why-choose-two__content-progress">
                  {/* Start Why Choose Two Content Progress Single */}
                  <div className="why-choose-two__content-progress-single">
                    <div className="top">
                      <h3>{data.altTitle1}</h3>
                      <div className="count-text">100%</div>
                    </div>
                    <div className="bar">
                      <div
                        className="bar-inner count-bar"
                        data-percent="100%"
                      ></div>
                    </div>
                  </div>
                  {/* End Why Choose Two Content Progress Single */}

                  {/* Start Why Choose Two Content Progress Single */}
                  <div className="why-choose-two__content-progress-single">
                    <div className="top">
                      <h3>{data.altTitle2} </h3>
                      <div className="count-text">100</div>
                    </div>
                    <div className="bar">
                      <div
                        className="bar-inner count-bar"
                        data-percent="100%"
                      ></div>
                    </div>
                  </div>
                  {/* End Why Choose Two Content Progress Single */}

                  {/* Start Why Choose Two Content Progress Single */}
                  <div className="why-choose-two__content-progress-single mar0">
                    <div className="top">
                      <h3>{data.altTitle2} </h3>
                      <div className="count-text">100%</div>
                    </div>
                    <div className="bar">
                      <div
                        className="bar-inner count-bar"
                        data-percent="100%"
                      ></div>
                    </div>
                  </div>
                  {/* End Why Choose Two Content Progress Single */}
                </div>
              </div>
            </div>
            {/* End Why Choose Two Content */}

            {/* Start Why Choose Two Img */}
            <div className="col-xl-6">
              <div
                className="why-choose-two__img"
                style={{
                  backgroundImage:
                    "url(" +
                    publicUrl +
                    "assets/images/resources/why-choose-v2-bg.jpg)",
                }}
              ></div>
            </div>
            {/* End Why Choose Two Img */}
          </div>
        </div>
      </section>
    </>
  );
};
export default WhyChooseFour;
