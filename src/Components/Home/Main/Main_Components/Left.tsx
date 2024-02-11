import React from "react";
import { TypeAnimation } from "react-type-animation";

const Left = () => {
  return (
    <div className='flex flex-col'>
        <h1 className="lg:text-5xl md:text-3xl sm:text-3xl text-3xl">Hello ! I'm <span className=" font-gotham-ultra-italic"> <span className=' md:ml-2 sm:ml-2 ml-4'>
            <TypeAnimation
                sequence={[
                    'Lukas Portier',
                    5000,
                    'Lytzeer',
                    5000,
                ]}
                wrapper="span"
                speed={50}
                className='text-gradient'
                style={{display: 'inline-block'}}
                repeat={Infinity}
            />
            <span className='text-cwhite'>,</span></span></span></h1>
        <p className="lg:text-4xl md:text-2xl sm:text-xl text-2xl"> 
            a French web and mobile developer.
        </p>
    </div>
    );
};

export default Left;