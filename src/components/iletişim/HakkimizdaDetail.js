import React from "react";
import { useAutoContext } from "../../Context/Context";
import { AboutUsData } from "../../data/Data";

const AboutUsDetail = () => {
  const { lang } = useAutoContext();
  const data = AboutUsData.find((item) => item.lang === lang).data;
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <>
      <section className="feature-two-sec">
        <div
          className="feature-two__bg"
          style={{
            backgroundImage:
              "url(" +
              publicUrl +
              "assets/images/backgrounds/benefits-v1-bg.jpg)",
          }}
        ></div>
        <div className="shape3 float-bob-y">
          <img
            src={publicUrl + "assets/images/shapes/feature-v2-shape1.png"}
            alt=""
          />
        </div>
        <div className="container">
          <div className="sec-title text-center">
            <h1>{data.hakkimizda}</h1>
          </div>
          <h5>
           {data.about}
          </h5>
        </div>
      </section>
    </>
  );
};
export default AboutUsDetail;
