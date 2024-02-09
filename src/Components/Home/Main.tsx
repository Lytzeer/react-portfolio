import portfolio from '../../assets/img/portfolio.gif';
import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const Main = () => {
  return (
    <div className='h-screen flex lg:flex-row md:flex-row items-center lg:justify-evenly sm justify-center sm:flex-col flex-col'>
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
        <div className="lg:flex-row min-w-minr">
            <div className=''>
                <img src={portfolio} className="" alt="logo" />
            </div>
        </div>
    </div>
  );
};

export default Main;