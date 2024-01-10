import React from "react";

import LogoBlack from "./LogoBlack";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";
import LogoBox from "./LogoBox";

import NiceSelect from "./NiceSelect";
import { contact } from "../../data/Data";
import { useAutoContext } from "../../Context/Context";
import { LangWords } from "../../data/LangData";

const HeaderOne = () => {
  const { lang } = useAutoContext();

  const data = contact.find((item) => item.lang === lang).data;
  const langData = LangWords.find((item) => item.lang === lang).data;
  
  return (
    <>
      <header className="main-header main-header-three clearfix">
        <div className="main-header-three__wrapper">
          {/* <div className="main-header-three__top clearfix">
            <div className="container">
              <div className="main-header-three__top-inner">
                <div className="left">
                  <NiceSelect />
                </div>

                <div className="right">
                  <div className="title"></div>

                  <ul className="social-links">
                    <li>
                      <a href="https://facebook.com">
                        <span className="icon-facebook-app-symbol"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://google.com">
                        <span className="icon-google-plus-logo"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://linkedin.com">
                        <span className="icon-linkedin"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          <div className="main-header-three__middle">
            <div className="container">
              <div className="main-header-three__middle-inner">
                <LogoBox />

                <div className="contact-info">
                  <ul>
                    <li>
                       <NiceSelect/>
                      {/* <div className="icon-box">
                        <span className="icon-pin"></span>
                      </div> */}
                      <div className="text-box">
                      </div>
                    </li>

                    <li>
                      <div className="icon-box">
                        <span className="icon-email"></span>
                      </div>
                      <div className="text-box">
                        <h3>{langData.email}</h3>
                        <p className="email">
                          <a href={data.email}>{data.email}</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="icon-box">
                        <span className="icon-phone-call"></span>
                      </div>
                      <div className="text-box">
                        <h3>{langData.contact}</h3>
                        <p className="number">
                          <a href={`tel:${data.iletişim}`}>{data.iletişim}</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="main-header-three__bottom">
            <div className="container">
              <div className="main-header-three__bottom-inner">
                <div className="main-header-one__bottom-left">
                  <nav className="main-menu main-menu--1">
                    <div className="main-menu__inner">
                      <div className="stricky-one-logo">
                        <LogoBlack />
                      </div>
                      <Nav />
                      <MobileMenu />
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
    </>
  );
};
export default HeaderOne;
