import portfolio from '../../assets/img/portfolio.gif';
import pokemoncli from '../../assets/img/pokemon-cli.jpg';
import hangman from '../../assets/img/hangman-classic.png';
import hangmanw from '../../assets/img/hangman-web.png';
import ecommerce from '../../assets/img/ecommerce.png';
import monitoring from '../../assets/img/monitoring.jpg';
import Forum from '../../assets/img/forum.png';
import WeatherApp from '../../assets/img/weatherapp.png';
import Csharp from '../../assets/img/csharp.png';
import Python from '../../assets/img/python.png';
import Reactjs from '../../assets/img/reactjs.png';
import Golang from '../../assets/img/go.png';
import Php from '../../assets/img/php.png';
import Docker from '../../assets/img/docker.png';
import Linux from '../../assets/img/linux.png';
import Css from '../../assets/img/css3.png';
import Figma from '../../assets/img/figma.png';
import Git from '../../assets/img/git.png';
import Flask from '../../assets/img/flask.png';
import Html5 from '../../assets/img/html5.png';
import Javascript from '../../assets/img/js.png';
import Java from '../../assets/img/java.png';
import Tailwind from '../../assets/img/tailwind.png';
import Typescript from '../../assets/img/typescript.png';
import Vscode from '../../assets/img/vs.png';
import Wordpress from '../../assets/img/wordpress.png';
import Linkedin from '../../assets/img/linkedin.png';
import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const Home = () => {
    return (
        <div className="bg-cblack min-h-screen text-cwhite font-gotham-bold">
            <div className="grid grid-cols-2 gap-4 h-screen items-center justify-center">
                <div className='col-start-1 col-end-1'>
                    <div className="hero min-h-full">
                        <div className="hero-content flex-col lg:flex-row">
                            <div className=''>
                                <h1 className="lg:text-5xl md:text-3xlflex">Hello ! I'm <span className="text-gradient font-gotham-ultra-italic"> <span className='ml-4'>
                                    <TypeAnimation
                                        sequence={[
                                            // Same substring at the start will only be typed out once, initially
                                            'Lukas Portier',
                                            5000, // wait 1s before replacing "Mice" with "Hamsters"
                                            'Lytzeer',
                                            5000,
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        style={{display: 'inline-block' }}
                                        repeat={Infinity}
                                    />
                                    <span className='text-cwhite'>,</span></span></span></h1>
                                <p className="lg:text-4xl md:text-2xl"> 
                                    a French web and mobile developer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-start-2 col-end-2 max-h-fit'>
                    <div className="hero min-h-screen justify-center">
                        <div className="hero-content flex-col lg:flex-row min-w-minr">
                            <div className=''>
                                <img src={portfolio} className="" alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-5xl font-gotham-bold flex flex-col items-center'>
                <h1 className='text-gradient pb-8'>
                    <span className='mx-4'>
                        MY PROJECTS
                    </span>
                </h1>
                <div className='flex flex-wrap justify-center'>
                    <div className="card w-96 h-96 bg-base-100 shadow-xl image-full mx-8 mb-8 card-shadow">
                        <figure><img src={pokemoncli} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-cwhite">Pokemon CLI</h2>
                            <p className='text-sm text-cwhite'>Pokemon Combat System in Python</p>
                            <div className="card-actions justify-end">
                                <a href="https://github.com/Lytzeer/PokemonPython" target='blank'>
                                    <button className="btn btn-primary text-cwhite tracking-wider button-gradient hover:button-gradient-hover">SEE MORE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 h-96 bg-base-100 shadow-xl image-full mx-8 mb-8 card-shadow">
                        <figure><img src={hangman} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-cwhite">Hangman</h2>
                            <p className='text-sm text-cwhite'>CLI version of the Hangman game in Golang</p>
                            <div className="card-actions justify-end">
                                <a href="https://github.com/Lytzeer/hangman-classic" target='blank'>
                                    <button className="btn btn-primary text-cwhite tracking-wider button-gradient hover:button-gradient-hover">SEE MORE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 h-96 bg-base-100 shadow-xl image-full mx-8 mb-8 card-shadow">
                        <figure><img src={hangmanw} alt="Shoes"  className='h-44'/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-cwhite">Hangman Web</h2>
                            <p className='text-sm text-cwhite'>Web version of the Hangman game in Golang</p>
                            <div className="card-actions justify-end">
                                <a href="https://github.com/Lytzeer/hangman-web" target='blank'>
                                    <button className="btn btn-primary text-cwhite tracking-wider button-gradient hover:button-gradient-hover">SEE MORE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 h-96 bg-base-100 shadow-xl image-full mx-8 mb-8 card-shadow">
                        <figure><img src={ecommerce} alt="E-commerce" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-cwhite">Flowers E-commerce</h2>
                            <p className='text-sm text-cwhite'>E-commerce website in php Symfony</p>
                            <div className="card-actions justify-end">
                                <a href="https://github.com/Lytzeer/Flowers-Ecommerce" target='blank'>
                                    <button className="btn btn-primary text-cwhite tracking-wider button-gradient hover:button-gradient-hover">SEE MORE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 h-96 bg-base-100 shadow-xl image-full mx-8 mb-8 card-shadow">
                        <figure><img src={portfolio} alt="portfolio" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-cwhite">Portfolio</h2>
                            <p className='text-sm text-cwhite'>My portfolio website in ReactJS</p>
                            <div className="card-actions justify-end">
                                <a href="https://github.com/Lytzeer/react-portfolio" target='blank'>
                                    <button className="btn btn-primary text-cwhite tracking-wider button-gradient hover:button-gradient-hover">SEE MORE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 h-96 bg-base-100 shadow-xl image-full mx-8 mb-8 card-shadow">
                        <figure><img src={monitoring} alt="Monitoring"  className='h-44'/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-cwhite">Monitoring</h2>
                            <p className='text-sm text-cwhite'>Monitoring app for Linux Red Hat machine on Python</p>
                            <div className="card-actions justify-end">
                                <a href="https://github.com/Lytzeer/Monit" target='blank'>
                                    <button className="btn btn-primary text-cwhite tracking-wider button-gradient hover:button-gradient-hover">SEE MORE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 h-96 bg-base-100 shadow-xl image-full mx-8 mb-8 card-shadow">
                        <figure><img src={Forum} alt="forum" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-cwhite">Forum</h2>
                            <p className='text-sm text-cwhite'>Forum website in Golang</p>
                            <div className="card-actions justify-end">
                                <a href="https://github.com/Lytzeer/react-portfolio" target='blank'>
                                    <button className="btn btn-primary text-cwhite tracking-wider button-gradient hover:button-gradient-hover">SEE MORE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 h-96 bg-base-100 shadow-xl image-full mx-8 mb-8 card-shadow">
                        <figure><img src={WeatherApp} alt="Weather App" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-cwhite">WeatherApp</h2>
                            <p className='text-sm text-cwhite'>Weather App in C# .net with Avalonia</p>
                            <div className="card-actions justify-end">
                                <a href="https://github.com/Lytzeer/react-portfolio" target='blank'>
                                    <button className="btn btn-primary text-cwhite tracking-wider button-gradient hover:button-gradient-hover">SEE MORE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center text-center'>
                    <h1 className='text-gradient pt-28 pb-8'>
                        <span className='mx-4'>
                            MY TECH STACK
                        </span>
                    </h1>
                    <div className='flex flex-wrap justify-center pt-8 pb-16'>
                        <img src={Csharp} alt="C#" className='h-40'/>
                        <img src={Python} alt="Python" className='h-40'/>
                        <img src={Reactjs} alt="React" className='h-40'/>
                        <img src={Golang} alt="Golang" className='h-40'/>
                        <img src={Php} alt="PHP" className='h-40'/>
                        <img src={Docker} alt="Docker" className='h-40'/>
                        <img src={Linux} alt="Linux" className='h-40'/>
                        <img src={Css} alt="Css" className='h-40'/>
                        <img src={Figma} alt="Figma" className='h-40'/>
                        <img src={Git} alt="Git" className='h-40'/>
                        <img src={Flask} alt="Flask" className='h-40'/>
                        <img src={Html5} alt="HTML" className='h-40'/>
                        <img src={Javascript} alt="JS" className='h-40'/>
                        <img src={Java} alt="Java" className='h-40'/>
                        <img src={Tailwind} alt="Tailwind" className='h-40'/>
                        <img src={Typescript} alt="Typesript" className='h-40'/>
                        <img src={Vscode} alt="VSC" className='h-40'/>
                        <img src={Wordpress} alt="Wordpress" className='h-40'/>
                    </div>
                </div>
            </div>
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
        </div>
    );
}

export default Home;