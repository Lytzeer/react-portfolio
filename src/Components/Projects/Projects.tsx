import React from 'react';
import pokemon from '../../assets/img/pokemon-cli.jpg';
import hangman from '../../assets/img/hangman-classic.png';
import hangmanw from '../../assets/img/hangman-web.png';
import {AllProjects} from './AllProjects';

const Image = {
    pokemon: pokemon,
    hangman: hangman,
    hangmanw: hangmanw
}

const Projects = () => {
    return(
        <div className="bg-cblack min-h-screen text-cwhite">
            <div className="navbar flex flex-row space-x-6 justify-center">
                <p className=""><a href='/'>Home</a></p>
                <p className=""><a href='/about'>About</a></p>
                <p className="text-purple3"><a href='/projects'>Projects</a></p>
                <p className=""><a href='/contact'>Contact</a></p>
            </div>
            <div className="flex items-center flex-col pt-4">
                <h1 className="text-5xl font-bold">My <span className="text-purple3">Projects</span></h1>
                <p className="pt-1">Here are some of my projects</p>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-4 pt-4 px-4">
                    {AllProjects.map((project,index)=>(
                    <div className="card lg:card-side bg-base-100 shadow-xl image-full">
                        <figure><img src={Image[project.image as keyof typeof Image]} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{project.name}</h2>
                            <p>{project.description}</p>
                            <div className="card-actions justify-end">
                                <a href={project.link} target='blank'><button className="btn btn-primary">More details</button></a>
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    )
}

export default Projects;