import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ErrorContent from "../components/error/ErrorContent";
import FooterOne from "../common/footer/FooterOne";

const Error = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="Error Page"
                currentPage="404" 
            />
            <ErrorContent />
            
            <FooterOne />
        </>
    )
}

export default Error;