import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { carSeatDetail } from "../../data/SeatData";
import { useAutoContext } from "../../Context/Context";

const ProjectThree = () => {
  const { lang } = useAutoContext();
  const data = carSeatDetail.find((item) => item.lang === lang).data;

  
  useEffect(() => {
    const $ = window.$;

    if ($(".project-three__carousel").length) {
      $(".project-three__carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        smartSpeed: 500,
        autoHeight: false,
        autoplay: true,
        dots: false,
        autoplayTimeout: 6000,
        navText: [
          '<i className="fa fa-angle-double-left" aria-hidden="true"></i>',
          '<i className="fa fa-angle-double-right" aria-hidden="true"></i>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          750: {
            items: 2,
          },
          1100: {
            items: 3,
          },
          1350: {
            items: 4,
          },
        },
      });
    }

    if ($(".img-popup").length) {
      var groups = {};
      $(".img-popup").each(function () {
        var id = parseInt($(this).attr("data-group"), 10);

        if (!groups[id]) {
          groups[id] = [];
        }

        groups[id].push(this);
      });

      $.each(groups, function () {
        $(this).magnificPopup({
          type: "image",
          closeOnContentClick: true,
          closeBtnInside: false,
          gallery: {
            enabled: true,
          },
        });
      });
    }
  }, []);

  return (
    <>
      <section className="project-three">
        <div className="container-fluid">
          <div className="sec-title text-center">
            <div className="sec-title__tagline">
              <span className="left"></span>
              <h6>Ürünlerimiz</h6> <span className="right"></span>
            </div>
            {/* <h2 className="sec-title__title">
              Our latest completed and <br /> running projects.
            </h2> */}
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="project-three__carousel owl-carousel owl-theme">
                {/* Start Project Three Single */}
                {data.map((item, index) => {
                  return (
                    <div className="project-three__single" key={index}>
                      <div className="project-three__single-img">
                        <img src={item.image[0]} alt="#" />
                        <div className="icon-box">
                          <a className="img-popup" href={item.image}>
                            <span className="icon-plus-sign"></span>
                          </a>
                        </div>
                        <div className="content-box">
                          <p>{item.price}</p>
                          <h3>
                            <Link to={`/koltuk`}>{item.title}</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* End Project Three Single */}
              </div>
            </div>

            <div className="col-xl-12">
              <div className="project-three-more-project-btn text-center">
                <div className="btn-box">
                  <Link
                    href="/portfolio"
                    className="thm-btn"
                    data-text="Ürünlerimiz +"
                  >
                    Ürünlerimiz +
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProjectThree;
