import React from "react";
import { Link } from "react-router-dom";
import { categorys } from "../../data/Data";
import { useAutoContext } from "../../Context/Context";

const ServiceThree = () => {
  const { lang}= useAutoContext()
  const data = categorys.find((item) => item.lang === lang).data;
  
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <>
      <section className="services-three">
        <div className="shape1">
          <img
            src={publicUrl + "assets/images/shapes/services-v3-shape1.png"}
            alt="#"
          />
        </div>
        <div className="shape2 rotate-me">
          <img
            src={publicUrl + "assets/images/update1.0/services-v3-shape2.png"}
            alt="#"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="services-three__top">
                <div className="sec-title">
                  <div className="sec-title__tagline">
                    <h6>COMPANY SERVICES </h6> <span className="right"></span>
                  </div>
                  {/* <h2 className="sec-title__title">
                    Our Company Best <br /> Services
                  </h2> */}
                </div>
                {/* <div className="text-box">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but <br /> the majority have suffered alteration
                    in some form.
                  </p>
                </div> */}
              </div>
            </div>
          </div>

          <div className="row">
            {/* Start Services One Single */}
            {data.map((item, index) => {
              return (
                <div className="col-xl-3 col-lg-6 col-md-6" key={index}>
                  <div className="services-three__single active">
                    <div
                      className="services-three__single__bg"
                      style={{ backgroundImage: `url(${item.images})` }}
                    ></div>
                    <div className="services-three__single-icon">
                      <span className="icon-crane"></span>
                    </div>
                    <h3>
                      <Link to={item.slug}>{item.title}</Link>
                    </h3>
                    <p>{item.content}</p>
                    <div className="btn-box">
                      <Link to={`/${item.slug}`}>
                        <span className="icon-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* End Services One Single */}
          </div>
        </div>
      </section>
    </>
  );
};
export default ServiceThree;
