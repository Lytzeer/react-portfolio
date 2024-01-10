const Contact = () => {
    return(
        <div className="bg-cblack min-h-screen text-cwhite">
            <div className="navbar flex flex-row space-x-6 justify-center">
                <p className=""><a href='/'>Home</a></p>
                <p className=""><a href='/about'>About</a></p>
                <p className=""><a href='/projects'>Projects</a></p>
                <p className="text-purple3"><a href='/contact'>Contact</a></p>
            </div>
            <div>
                <h1 className="text-5xl font-bold">Contact</h1>
            </div>
        </div>
    )
}

export default Contact;