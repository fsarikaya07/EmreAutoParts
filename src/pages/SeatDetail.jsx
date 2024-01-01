import React from 'react'
import { useParams } from 'react-router-dom'
import { carSeatDetail } from '../data/Data'
import HeaderThree from '../common/header/HeaderThree'
import FooterOne from '../common/footer/FooterOne'

const SeatDetail = () => {
    const {slug}=useParams()
    const data= carSeatDetail
    const dataDetail= data.find(item=> item.slug=== slug)
    console.log("detail", dataDetail);
    let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <>
    <HeaderThree/>
    
    <div>
         <section className="faq-one">
        <div className="container">
          <div className="row">
            {/* Start Faq One Img */}
            <div className="col-xl-6">
              <div
                className="faq-one__img wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <img src={publicUrl +`${dataDetail.image}`} alt="#" />
              </div>
            </div>
            {/* End Faq One Img */}

            {/* Start Faq One Accordion */}
            <div className="col-xl-6">
              <div className="faq-one__accordion">
                <div className="sec-title">
                  <div className="sec-title__tagline">
                    <h6>{dataDetail?.title}</h6> <span className="right"></span>
                  </div>
                  <h2 className="sec-title__title">TEKNİK ÖZELLİKLER</h2>
                </div>
                <div className="ürün-table">
                
                  <p
                    className="text-[14px] lg:text-[16px] text-center xl:px-4 w-full"
                    
                  >
                    {dataDetail.contetn}
                  </p>

                  {/* {data?.content1} */}
                </div>
              </div>
            </div>
            {/* End Faq One Accordion */}
          </div>
        </div>
      </section>
    </div>
    <FooterOne/>
    </>
  )
}

export default SeatDetail