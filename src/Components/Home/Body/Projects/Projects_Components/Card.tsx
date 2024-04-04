import React from "react";
import Project from '../../../data/projects.json';
import portfolio from '../../../../../assets/img/portfolio.gif';
import pokemoncli from '../../../../../assets/img/pokemon-cli.jpg';
import hangman from '../../../../../assets/img/hangman-classic.png';
import hangmanw from '../../../../../assets/img/hangman-web.png';
import ecommerce from '../../../../../assets/img/ecommerce.png';
import monitoring from '../../../../../assets/img/monitoring.jpg';
import Forum from '../../../../../assets/img/forum.png';
import WeatherApp from '../../../../../assets/img/weatherapp.png';

const Card = () => {
    let images = [pokemoncli, WeatherApp, monitoring, hangmanw, hangman, portfolio, Forum, ecommerce]  
    return(
        <div className='flex flex-wrap justify-center w-full'>
            {Project.project.map((project, index) => {
                return(
                    <div className="card w-96 h-96 bg-base-100 shadow-xl image-full mx-8 mb-8 card-shadow">
                        <figure><img src={images[index]} alt={project.name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-cwhite">{project.name}</h2>
                            <p className='text-sm text-cwhite'>{project.description}</p>
                            <div className="card-actions justify-end">
                                <a href={project.repo_url} target='blank'>
                                    <button className="btn btn-primary text-cwhite tracking-wider button-gradient hover:button-gradient-hover">SEE MORE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
};

export default Card;
