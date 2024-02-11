import React from "react";
import Left from "./Footer_Components/Left";
import Right from "./Footer_Components/Right";

const Footer = () => {
    return (
        <div className='bg-cblack2 flex flex-row justify-between'>
            <Left />
            <Right />
        </div>
    )
};

export default Footer;