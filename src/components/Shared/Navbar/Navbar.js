import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navbar.css';
const Navbar = () => {
    const {user,logOut} = useAuth();
    // console.log(user);
    return (
        <header className='header sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <NavLink className="navbar-brand logo" to="/" style={{color:'#111868!important'}}>DrEaM-<span style={{color:'red'}}>CaR</span></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center text-uppercase middle-part">
                            <li className="nav-item px-3">
                                <NavLink className="nav-link" aria-current="page" exact to="/">Home</NavLink>
                            </li>
                            
                            {
                                user?.email ?
                                <>
                                    <li className="nav-item px-3">
                                        <NavLink className="nav-link" aria-current="page" to="/dashboard">dashboard</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={logOut} className="logout">Logout</button>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item my-1">
                                        <NavLink className="nav-link register" aria-current="page" to="/register">Register</NavLink>
                                    </li>
                                    <li className="nav-item my-1">
                                        <NavLink className="nav-link login" aria-current="page" to="/login">Login</NavLink>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;