import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div className="contact__area">
            <div className="contact-shape">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-lg-8 col-12 col-sm-12 text-center">
                        <div className="contact__box">
                            <h2 className="title">Ask Us <span className="pb-3">Any Questions </span></h2>
                            <div className="form__box">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-12 col-lg-12 col-sm-12">
                                            <input type="text" className="my-2" placeholder="Your Name" />
                                        </div>
                                        <div className="col-12 col-lg-12 col-sm-12">
                                            <input type="text" className="my-2" placeholder="your phone number" />
                                        </div>
                                        <div className="col-12 col-lg-12 col-sm-12">
                                            <input type="email" className="my-2" placeholder="your email" />
                                        </div>
                                        <div className="col-12 col-lg-12 col-sm-12">
                                            <textarea name="" placeholder="Type here..." className="my-2"></textarea>
                                        </div>
                                    </div>
                                    <button className='book-btn'>send message</button>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;