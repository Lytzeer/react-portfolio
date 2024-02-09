import React from 'react';
import Main from './Main';
import Body from './Body';
import Footer from './Footer';

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