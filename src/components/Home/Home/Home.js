import React from 'react';
import Navigation from '../Navbar/Navigation'; 
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div className='headerBanner'> 
        <div className="overlay">
             <Navigation />
             <div className="services-area">
                <Services />
            </div>
        </div>
        
              
        </div>
    );
};

export default Home;