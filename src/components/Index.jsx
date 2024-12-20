import React from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import About from './about/About';
import Work from './work/Work';
import Roadmap from './roadmap/Roadmap';
import Faq from './faq/Faq';
import Footer from './footer/Footer';
const Index =() => {
    return (
        <>
           <Navbar/> 
           <Home/>
           <About/>
           <Work/>
           <Roadmap/>
           <Faq/>
           <Footer/>
        </>
    );
}

export default Index;