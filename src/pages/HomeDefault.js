import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import HeroOne from "../components/hero/HeroOne";
import AboutFour from '../components/about/AboutFour';
import ProjectThree from "../components/project/ProjectThree";
import ServiceThree from "../components/services/ServiceThree";

import FooterOne from "../common/footer/FooterOne";

const HomeDefault = () => {
    return (
        <>
            <HeaderOne />
            <HeroOne />
            <ServiceThree />
            <AboutFour />
            <ProjectThree />
            <FooterOne />
        </>
    )
}

export default HomeDefault;