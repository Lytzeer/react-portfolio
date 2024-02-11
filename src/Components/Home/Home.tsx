import React from 'react';
import Main from './Main/Main';
import Body from './Body/Body';
import Footer from './Footer/Footer';

const Home = () => {  
    return (
        <div className="bg-cblack min-h-screen text-cwhite font-gotham-bold">
            <Main />
            <Body />
            <Footer />
        </div>
    );
}

export default Home;