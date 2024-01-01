import React from "react";
import HeaderThree from "../common/header/HeaderThree";
import FooterOne from "../common/footer/FooterOne";
import { carTypes } from "../data/AccessoriesData";
import { Link } from "react-router-dom";

const Accessories = () => {
  const data = carTypes;

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
                        <img src={`${item?.image}`} alt="#" />
                      </div>
                      <div className="blog-one__single-content">
                        <div className="blog-grid__content-bg"></div>
                        <div className="inner-content">
                          <ul className="meta-info"></ul>
                          <h2>
                            <Link to={`/aksesuar/${item.slug}`}>
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

export default Accessories;