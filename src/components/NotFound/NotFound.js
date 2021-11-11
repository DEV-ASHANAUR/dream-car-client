import React from 'react';
// import { Link } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className='container'>
            <div className='error-wrapper'>
                <h1>404</h1>
                <h2>oops! Page Not Found</h2>
                {/* <Link to='/'>
                    <button className='btn-not-found'>Go Back</button>
                </Link> */}
            </div>
        </div>
    );
};

export default NotFound;