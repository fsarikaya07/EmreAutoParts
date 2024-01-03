import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import HeaderThree from "../common/header/HeaderThree";
import FooterOne from "../common/footer/FooterOne";
import { carSeatType } from "../data/SeatData";

const SeatTypes = () => {
 

  const data = carSeatType;
  console.log("carSeat", data);

  useEffect(() => {
    const $ = window.$;

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
      <HeaderThree />

      <section className="blog-one-sec blog-one-sec--two blog-one-sec--two--blog grid">
        <div className="container">
          <div className="row">
            {/* Start Blog One Single */}
            {data.map((item, index) => {
              return (
                <div
                  className="col-xl-4 col-lg-4 wow animated fadeInUp"
                  data-wow-delay="0.1s"
                  key={index}
                >
                  <div className="blog-one__single">
                    <div className="blog-one__single-img">
                      <div className="inner">
                        <img
                          src={
                            `${item?.image}`
                          }
                          alt="#"
                        />
                      </div>
                      <div className="blog-one__single-content">
                        <div className="blog-grid__content-bg"></div>
                        <div className="inner-content">
                          <ul className="meta-info">
                           
                           
                          </ul>
                          <h2>
                            <Link to={ `/koltuk/${item.slug}`}>
                              {item.title}
                            </Link>
                          </h2>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* End Blog One Single */}

         
          </div>
        </div>
      </section>

    
      <FooterOne />
    </>
  );
};
export default SeatTypes;
