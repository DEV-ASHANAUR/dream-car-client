import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import image from '../../assets/service/car1.png';
import { Link } from 'react-router-dom';
const AllProductArea = () => {
    return (
        <div>
            <Breadcrumb pageName='All Car' formPage='Home' toPage='All Car'></Breadcrumb>
            <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center pb-5">
                <div className="col">
                    <div className="card servicecard h-100 text-center">
                        <div className='service-img'>
                            <img src={image} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">Ford Raptor.</h2>
                            <p className="card-text text-description text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facilis excepturi voluptatibus.</p>
                            <h3>$4099</h3>
                        </div>
                        <button className='book-btn'>Buy Now</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card servicecard h-100 text-center">
                        <div className='service-img'>
                            <img src={image} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">Ford Raptor.</h2>
                            <p className="card-text text-description text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facilis excepturi voluptatibus.</p>
                            <h3>$4099</h3>
                        </div>
                        <button className='book-btn'>Buy Now</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card servicecard h-100 text-center">
                        <div className='service-img'>
                            <img src={image} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">Ford Raptor.</h2>
                            <p className="card-text text-description text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facilis excepturi voluptatibus.</p>
                            <h3>$4099</h3>
                        </div>
                        <button className='book-btn'>Buy Now</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card servicecard h-100 text-center">
                        <div className='service-img'>
                            <img src={image} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">Ford Raptor.</h2>
                            <p className="card-text text-description text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facilis excepturi voluptatibus.</p>
                            <h3>$4099</h3>
                        </div>
                        <button className='book-btn'>Buy Now</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card servicecard h-100 text-center">
                        <div className='service-img'>
                            <img src={image} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">Ford Raptor.</h2>
                            <p className="card-text text-description text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facilis excepturi voluptatibus.</p>
                            <h3>$4099</h3>
                        </div>
                        <button className='book-btn'>Buy Now</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card servicecard h-100 text-center">
                        <div className='service-img'>
                            <img src={image} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">Ford Raptor.</h2>
                            <p className="card-text text-description text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facilis excepturi voluptatibus.</p>
                            <h3>$4099</h3>
                        </div>
                        <button className='book-btn'>Buy Now</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AllProductArea;