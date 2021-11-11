import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='bg-banner'>
            <div className="custom-shape">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="overly">
                <div className="container">
                    <h1 className='my-3' style={{fontWeight:'700',textTransform:'uppercase'}}>Find Your Dream Car Here !</h1>
                    <h3 className='text-uppercase text-white' style={{width:'45%'}}>Buy The Best Qulity Car's From Us !</h3>
                    <button className='discover-btn my-3 text-uppercase'>Explore Car</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;