import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <>
            <div className='footer-section mt-5'>
                <div className="container">
                    <div className="row text-white py-3">
                        <div className="col-md-3 mb-2">
                            <p className="py-2"><span className="footer-border" style={{fontWeight:'700'}}>DrEaM-<span style={{color:'red'}}>Car</span></span></p>
                            <p>Dream Car is a Trusted And reliable Car Shop  amoung all the leading and updated car shop in Bangladesh.</p>

                            <div>
                                <span><i className="fab fa-instagram"></i></span>
                                <span className='ps-3'><i className="fab fa-facebook-square"></i></span>
                                <span className='ps-3'><i className="fab fa-twitter-square"></i></span>
                                <span className='ps-3'><i className="fab fa-linkedin"></i></span>
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <p className="text-uppercase py-2"><span className="footer-border"> Service</span></p>
                            <p>Brand New Car</p>
                            <p>Guarantee and Warranty</p>
                            <p>After Service</p>
                            <p>Quality Product</p>
                        </div>
                        <div className="col-md-3 mb-2">
                            <p className="text-uppercase py-2"><span className="footer-border"> Useful Links</span></p>
                            <p>Home</p>
                            <p>About</p>
                            <p>Product</p>
                            <p>Review</p>
                        </div>
                        <div className="col-md-3 icon-color mb-2">
                            <p className="text-uppercase py-2"><span className="footer-border">Contact</span> Info</p> 
                            <p><i className="fas fa-map-marker-alt" ></i>  4127 Raoul Wallenber 45b-c</p>

                            <p><i className="fas fa-phone-volume"></i>  4521-808-7895</p>

                            <p><i className="fas fa-envelope-open-text"></i>  dreamcar@gmail.com</p>

                            <p><i className="fas fa-globe"></i>  www.dreamcar.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{background:'#000C18'}}>
                <span className='d-block text-center text-white py-3'>copyright &copy; 2021 all right reserve by dream car.</span>
            </div>
        </>
    );
};

export default Footer;