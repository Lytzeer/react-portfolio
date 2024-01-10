import saturn from '../../assets/img/saturn.svg';

const About = () => {
    return(
        <div className="bg-cblack min-h-screen text-cwhite">
            <div className="navbar flex flex-row space-x-6 justify-center">
                <p className=""><a href='/'>Home</a></p>
                <p className="text-purple3"><a href='/about'>About</a></p>
                <p className=""><a href='/projects'>Projects</a></p>
                <p className=""><a href='/contact'>Contact</a></p>
            </div>
            <div className="flex justify-center">
                <h1 className="text-5xl font-bold">About <span className="text-purple3">me</span></h1>
            </div>
            <img src={saturn} className="" alt="logo" />
        </div>
    )
}

export default About;