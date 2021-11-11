import React, { useState } from 'react';
import { Link,useHistory,useLocation } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import useAuth from '../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
const Login = () => {
    const[signloading,setSignloding] = useState(false);
    const [data,setData] = useState({
        email:'',
        password:''
    });
    //use history
    const history = useHistory();
    //useAuth
    const {emailPasswordSignIn,setIsLoading} = useAuth();
    //useLocation
    const location = useLocation();
    //condition 
    const location_uri = location.state?.from || '/';
    //handle input
    const InputEvent = (event) => {
        const{name,value} = event.target;
        setData((prev)=>{
            return {
                ...prev,
                [name] : value,
            }
        });
    }
    //emailPasswordSignIn
    const handleEmailPasswordSignIn = (e) => {
        setSignloding(true);
        e.preventDefault();
        emailPasswordSignIn(data.email,data.password)
        .then((result)=>{
            history.push(location_uri);
        }).catch(err=>{
            console.log(err);
            toast.error(err.message);
        }).finally(()=>{
            setSignloding(false);
            setIsLoading(false);
        })
    }
    return (
        <>
            <div>
            <Breadcrumb pageName='Login' formPage='Home' toPage='Login'></Breadcrumb>
                <div className='container'>
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="card m-auto" style={{maxWidth: '25rem',boxShadow:'0 0 8px 5px #6e596e42'}}>
                                <div className="card-body">
                                <span style={{display:'block',textAlign:'center',margin: '15px 0',color:'red',fontSize:'20px',textDecoration:'none',fontWeight:'700'}}>Log In Here</span>
                                    <form onSubmit={handleEmailPasswordSignIn}>
                                        <input name="email" value={data.email} onChange={InputEvent} className='form-control my-3' placeholder="Enter Email" required />

                                        <input name="password" value={data.password} onChange={InputEvent} className='form-control my-3' type="password" placeholder="Enter Password" required />

                                        <input type="submit" value={signloading?'Loging..':'submit'} className="submit-btn my-4" />
                                    </form>
                                    <Link to="/signup" style={{display:'block',textAlign:'center',margin: '15px 0',color:'red',fontSize:'20px',textDecoration:'none'}}>Need A Account?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Login;