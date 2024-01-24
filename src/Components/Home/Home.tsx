import portfolio from '../../assets/img/portfolio.gif';

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
            <div className='text-5xl font-gotham-ultra-italic flex justify-center'>
                <h1 className='text-gradient'>
                    <span className='mx-4'>
                        MY PROJECTS
                    </span>
                </h1>
            </div>
        </div>
    );
}

export default Home;