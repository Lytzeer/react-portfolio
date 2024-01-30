import portfolio from '../../assets/img/portfolio.gif';
import pokemoncli from '../../assets/img/pokemon-cli.jpg';
import hangman from '../../assets/img/hangman-classic.png';
import hangmanw from '../../assets/img/hangman-web.png';
import ecommerce from '../../assets/img/ecommerce.png';
import portfolio2 from '../../assets/img/portfolio.png';
import monitoring from '../../assets/img/monitoring.jpg';

const Home = () => {
    return (
        <div className="bg-cblack min-h-screen text-cwhite font-gotham-bold">
            <div className="grid grid-cols-2 gap-4 h-screen items-center justify-center">
                <div className='col-start-1 col-end-1'>
                    <div className="hero min-h-full">
                        <div className="hero-content flex-col lg:flex-row">
                            <div className=''>
                                <h1 className="text-5xl flex">Hello ! I'm <span className="text-gradient font-gotham-ultra-italic"> <span className='ml-4'>Lukas Portier<span className='text-cwhite'>,</span></span></span></h1>
                                <p className="text-5xl">a French web developer</p>
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
            <div className='text-5xl font-gotham-ultra-italic flex flex-col items-center'>
                <h1 className='text-gradient pb-8'>
                    <span className='mx-4'>
                        MY PROJECTS
                    </span>
                </h1>
                <div className='flex flex-col'>
                    <div className='flex flex-row py-8'>
                        <div className="card w-96 h-96 bg-base-100 shadow-xl image-full mx-8">
                            <figure><img src={pokemoncli} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Pokemon CLI</h2>
                                <p className='text-sm'>Pokemon Combat System in Python</p>
                                <div className="card-actions justify-end">
                                    <a href="https://github.com/Lytzeer/PokemonPython">
                                        <button className="btn btn-primary text-cwhite tracking-wider button-gradient ">SEE MORE</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 h-96 bg-base-100 shadow-xl image-full mx-8">
                            <figure><img src={hangman} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Hangman</h2>
                                <p className='text-sm'>CLI version of the Hangman game in Golang</p>
                                <div className="card-actions justify-end">
                                    <a href="https://github.com/Lytzeer/hangman-classic">
                                        <button className="btn btn-primary text-cwhite tracking-wider button-gradient ">SEE MORE</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 h-96 bg-base-100 shadow-xl image-full mx-8">
                            <figure><img src={hangmanw} alt="Shoes"  className='h-44'/></figure>
                            <div className="card-body">
                                <h2 className="card-title">Hangman Web</h2>
                                <p className='text-sm'>Web version of the Hangman game in Golang</p>
                                <div className="card-actions justify-end">
                                    <a href="https://github.com/Lytzeer/hangman-web">
                                        <button className="btn btn-primary text-cwhite tracking-wider button-gradient ">SEE MORE</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row py-8'>
                        <div className="card w-96 h-96 bg-base-100 shadow-xl image-full mx-8">
                            <figure><img src={ecommerce} alt="E-commerce" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Flowers E-commerce</h2>
                                <p className='text-sm'>E-commerce website in php Symfony</p>
                                <div className="card-actions justify-end">
                                    <a href="https://github.com/Lytzeer/Flowers-Ecommerce">
                                        <button className="btn btn-primary text-cwhite tracking-wider button-gradient ">SEE MORE</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 h-96 bg-base-100 shadow-xl image-full mx-8">
                            <figure><img src={portfolio} alt="portfolio" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Portfolio</h2>
                                <p className='text-sm'>My portfolio website in ReactJS</p>
                                <div className="card-actions justify-end">
                                    <a href="https://github.com/Lytzeer/react-portfolio">
                                        <button className="btn btn-primary text-cwhite tracking-wider button-gradient ">SEE MORE</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 h-96 bg-base-100 shadow-xl image-full mx-8">
                            <figure><img src={monitoring} alt="Monitoring"  className='h-44'/></figure>
                            <div className="card-body">
                                <h2 className="card-title">Monitoring</h2>
                                <p className='text-sm'>Monitoring app for Linux Red Hat machine on Python</p>
                                <div className="card-actions justify-end">
                                    <a href="https://github.com/Lytzeer/Monit">
                                        <button className="btn btn-primary text-cwhite tracking-wider button-gradient ">SEE MORE</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;