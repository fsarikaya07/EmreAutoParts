import React from "react";
import { Link, useParams } from "react-router-dom";
import { carMdProduct } from "../data/AccessoriesData";
import HeaderThree from "../common/header/HeaderThree";
import FooterOne from "../common/footer/FooterOne";
import { useAutoContext } from "../Context/Context";

const AccProductDenem = () => {
  const {lang, acc }= useAutoContext()
  const { slug, CategorySlug } = useParams();
  const data = carMdProduct.find((item) => item.lang === lang).data;

  const dataDetail = data.find((item) => item.slug === slug).data;
  console.log(dataDetail, "dataDetail");
  return (
    <>
      <HeaderThree />

      <section className="project-one-sec project-one-sec--three">
        <div className="container">
          <div className="row">
            {/* Start project One Single */}
            {dataDetail.map((item, index) => {
              return (
                <div className="col-xl-4 col-lg-4" key={index}>
                  <div
                    className="project-one__single wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="project-one__single-img">
                      <div className="inner">
                        <img src={item.image} alt="#" />
                        <div className="project-one__link">
                          <a className="img-popup" href={item.image}>
                            <span className="icon-plus-sign"></span>
                          </a>
                        </div>
                      </div>
                      <div className="content-box">
                        <h2>
                          <Link
                            to={`/${acc}/${CategorySlug}/${slug}/${item.slug}`}
                          >
                            {item.title}
                          </Link>
                        </h2>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* End project One Single */}
          </div>
        </div>
      </section>

      <FooterOne />
    </>
  );
};

export default AccProductDenem;
