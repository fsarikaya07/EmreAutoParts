import React from "react";
import { Link } from "react-router-dom";
import { LogoImage } from "../../data/Data";

const LogoBox = ()=> {
    const logo =LogoImage
    
    return (
      <>
        <div className="logo-box">
          <Link to={`/`}>
            <img src={logo.anasayfa} alt="Logo" />
          </Link>
        </div>
      </>
    );
  }
export default LogoBox
