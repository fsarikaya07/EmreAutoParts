import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import HeaderThree from "../common/header/HeaderThree";
import FooterOne from "../common/footer/FooterOne";
import { carSeatSkin } from "../data/SeatData";
import { useAutoContext } from "../Context/Context";

const Seat = () => {
  const {lang }= useAutoContext()
  const {slug}=useParams()

  const data = carSeatSkin.find(item=> item.lang=== lang).data
  const dataDetail= data.find(item=> item.slug=== slug).data
  console.log("carSeat", dataDetail);

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
            {dataDetail.map((item, index) => {
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
                       
                          <h2>
                            <Link to={ `/koltuk/${slug}/${item.slug}`}>
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

            {/* Start Styled Pagination */}
            <div className="blog-grid__pagination text-center">
              <ul className="styled-pagination clearfix">
                <li className="prev">
                  <Link to={process.env.PUBLIC_URL + `/`}>
                    <span className="fa fa-angle-double-left"></span>
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + `/`} className="active">
                    1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + `/`}>2</Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + `/`}>3</Link>
                </li>
                <li className="next">
                  <Link to={process.env.PUBLIC_URL + `/`}>
                    <span className="fa fa-angle-double-right"></span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Start Styled Pagination */}
          </div>
        </div>
      </section>

    
      <FooterOne />
    </>
  );
};
export default Seat;
