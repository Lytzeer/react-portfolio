import black_hole from '../../assets/img/black-hole.svg';

const Home = () => {
    return (
        <div className="bg-cblack max-h-screen text-cwhite" style={{ overflow: 'hidden' }}>
            <div className="navbar flex flex-row space-x-6 justify-center">
                <p className="text-purple3"><a href='/'>Home</a></p>
                <p className=""><a href='/about'>About</a></p>
                <p className=""><a href='/projects'>Projects</a></p>
                <p className=""><a href='/contact'>Contact</a></p>
            </div>

            <div className="grid grid-cols-2 gap-4 h-screen items-center justify-center">
                <div className='col-start-1 col-end-1'>
                    <div className="hero min-h-full">
                        <div className="hero-content flex-col lg:flex-row">
                            <div className=''>
                                <h1 className="text-5xl font-bold">Hello ! I'm <span className="text-purple3">Lukas Portier</span></h1>
                                <p className="pt-1">I'm a web developer</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-start-2 col-end-2 max-h-fit'>
                    <div className="hero min-h-screen justify-center">
                        <div className="hero-content flex-col lg:flex-row min-w-minr">
                            <div className=''>
                                <img src={black_hole} className="App-logo" alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;