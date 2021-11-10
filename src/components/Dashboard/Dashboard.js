import React from 'react';
import './Dashboard.css'
import img from '../../assets/google.png'
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const Dashboard = () => {
    return (
        <div>
            <Breadcrumb pageName='All Car' formPage='Home' toPage='All Car'></Breadcrumb>
            <div className="Dashboard_area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="Dashboard_menu">
                                <img src={img} alt="" />
                                <div className="name my-2">Satayjit biswas</div>
                                <div className="mb-3">Role : Admin</div>
                                <a href="#">My Order</a>
                                <a href="#">Pay</a>
                                <a href="#">Review</a>
                            </div>
                        </div>
                        <div className="col-md-9">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;