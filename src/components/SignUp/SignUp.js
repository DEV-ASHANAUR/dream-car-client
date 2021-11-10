import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import './SignUp.css';
const SignUp = () => {
    
    return (
        <>
            <div>
            <Breadcrumb pageName='Register' formPage='Home' toPage='Register'></Breadcrumb>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card m-auto" style={{maxWidth: '25rem',boxShadow:'0 0 8px 5px #6e596e42'}}>
                                <div className="card-body">
                                <span style={{display:'block',textAlign:'center',margin: '15px 0',color:'red',fontSize:'20px',textDecoration:'none',fontWeight:'700'}}>Create An Account</span>
                                    <form>
                                        <input type="text" name="name"  onChange={InputEvent} className='form-control my-3' placeholder="Enter Name" required/>

                                        <input type="email" name="email"  onChange={InputEvent} className='form-control my-3' placeholder="Enter Email" required />

                                        <input name="password"  onChange={InputEvent} className='form-control my-3' type="password" placeholder="Enter Password" />

                                        <input name="confirm_password" onChange={InputEvent} className='form-control my-3' type="password" placeholder="Enter Confirm Password" />

                                        <input type="submit" className="submit-btn my-4" />
                                    </form>
                                    <Link to='/login' style={{display:'block',textAlign:'center',margin: '15px 0',color:'red',fontSize:'20px',textDecoration:'none'}}>Already Have An Account?</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;