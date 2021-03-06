import React from 'react';
import './Dashboard.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import {
    Switch,
    Route,
    NavLink,
    useRouteMatch
  } from "react-router-dom";
import MyOrder from './MyOrder/MyOrder';
import useAuth from '../../hooks/useAuth';
import AddProduct from './AddProduct/AddProduct';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';
import ManageProduct from './ManageProduct/ManageProduct';
import MkAdmin from './MkAdmin/MkAdmin';
import Review from './Review/Review';
import Pay from './Pay/Pay';
import ManageAllOrder from './ManageAllOrder/ManageAllOrder';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {user,isUser,isAdmin} = useAuth();
    return (
        <div>
            <Breadcrumb pageName='Dashboard' formPage='Home' toPage='Dashboard'></Breadcrumb>
            <div className="Dashboard_area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="Dashboard_menu">
                                <img src={user?.photoURL} alt="" />
                                <div className="name my-2">{user?.displayName}</div>
                                <div className="mb-3">Role : {isUser?'User':'Admin'}</div>
                                {
                                    isUser &&
                                    <>
                                        <NavLink to={`${url}/myorder`}>My Orders</NavLink>
                                        <NavLink to={`${url}/review`}>Review</NavLink>
                                        <NavLink to={`${url}/pay`}>pay</NavLink>
                                    </>
                                }
                                {
                                    isAdmin && 
                                    <>
                                        <NavLink to={`${url}/manageallorder`}>Manage All Orders</NavLink>
                                        <NavLink to={`${url}/addproduct`}>Add A Product</NavLink>
                                        <NavLink to={`${url}/manageproduct`}>Manage Products</NavLink>
                                        <NavLink to={`${url}/mkadmin`}>Make Admin</NavLink>
                                    </>
                                }
                            </div>
                        </div>
                        <div className="col-md-9">
                        <Switch>
                            {/* user route */}
                            <Route exact path={path}>
                                <h1 className="dashboardHeading">WellCome to dashboard</h1>
                                <img src="https://assets.website-files.com/5f91be4e005cd67c897b4916/5fa079782a70dfec96ae6acc_home-1.png" className="img-fluid m-auto text-center d-block" width="400" alt="" />
                            </Route>
                            <UserRoute path={`${path}/myorder`}>
                                <MyOrder></MyOrder>
                            </UserRoute>
                            <UserRoute path={`${path}/review`}>
                                <Review></Review>
                            </UserRoute>
                            <UserRoute path={`${path}/pay`}>
                                <Pay></Pay>
                            </UserRoute>
                            {/* admin route */}
                            <AdminRoute path={`${path}/manageallorder`}>
                                <ManageAllOrder></ManageAllOrder>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addproduct`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageproduct`}>
                                <ManageProduct></ManageProduct>
                            </AdminRoute>
                            <AdminRoute path={`${path}/mkadmin`}>
                                <MkAdmin></MkAdmin>
                            </AdminRoute>
                        </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;