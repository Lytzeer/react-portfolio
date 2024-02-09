import React from "react";
import Linkedin from '../../assets/img/linkedin.png';

const Footer = () => {
    return (
        <div className='bg-cblack2 flex flex-row justify-between'>
            <div className='flex flex-col justify-between'>
                <h1 className='text-gradient pt-4 pb-2'>
                    <span className='mx-4'>
                        Lukas Portier
                    </span>
                    <span className='text-cwhite'>|</span>
                    <span className='mx-4'>
                        Lytzeer
                    </span>
                </h1>
                <span className='mx-4 text-gradient pb-2'>
                    © 2024
                </span>
            </div>
            <div className='flex flex-row items-center pr-4 w-16'>
                <a href="https://www.linkedin.com/in/lukas-portier/">
                    <img src={Linkedin} alt="linkedin"/>
                </a>
            </div>
        </div>
    )
};

export default Footer;