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

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {user,isUser,isAdmin} = useAuth();
    return (
        <div>
            <Breadcrumb pageName='All Car' formPage='Home' toPage='All Car'></Breadcrumb>
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
                                        <NavLink to={`${url}/pay`}>Review</NavLink>
                                        <NavLink to={`${url}/review`}>pay</NavLink>
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
                            <Route exact path={path}>
                                <h3 className="dashboardHeading">Wllcome To Dashboard</h3>
                            </Route>
                            <UserRoute path={`${path}/myorder`}>
                                <MyOrder></MyOrder>
                            </UserRoute>
                            <AdminRoute path={`${path}/manageallorder`}>
                                
                            </AdminRoute>
                            <AdminRoute path={`${path}/addproduct`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageproduct`}>
                                <ManageProduct></ManageProduct>
                            </AdminRoute>
                            <AdminRoute path={`${path}/mkadmin`}>
                                
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