import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link,useHistory } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import './SignUp.css';
import useAuth from '../../hooks/useAuth';
const SignUp = () => {
    const[signloading,setSignloding] = useState(false);
    //form data state
    const [data,setData] = useState({
        name:'',
        email:'',
        password:'',
        confirm_password:''
    });
    //history 
    const history = useHistory();
    const {createUser,updateUserProfile,saveUser,setIsLoading} = useAuth();
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
    //handleManualSignUp
    const handleManualSignUp = (e) => {
        setSignloding(true);
        e.preventDefault();
        if(data.password.length < 6){
            toast.error("Password Min Length Is Six");
            setSignloding(false);
            return;
        }
        if(data.password !== data.confirm_password){
            toast.error("Password And Confirm Password Are Not Match");
            setSignloding(false);
            return;
        }
        createUser(data.email,data.password)
        .then((result)=>{
            // save user to the database
            saveUser(data.name,data.email,'POST');
            //update user
            updateUserProfile(data.name);
            setData({
                name:'',
                email:'',
                password:'',
                confirm_password:''
            });
            toast.success("Sign Up Success! Please Login.");
            // window.location.href = "/home";
            history.push('/');
            }).catch(err => {
            toast.error(err.message);
            }).finally(()=>{
                setSignloding(false);
                setIsLoading(false);
            });
        }
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
                                    <form onSubmit={handleManualSignUp}>
                                        <input type="text" name="name" value={data.name} onChange={InputEvent} className='form-control my-3' placeholder="Enter Name" required/>

                                        <input type="email" name="email" value={data.email} onChange={InputEvent} className='form-control my-3' placeholder="Enter Email" required />

                                        <input name="password" value={data.password} onChange={InputEvent} className='form-control my-3' type="password" placeholder="Enter Password" />

                                        <input name="confirm_password" value={data.confirm_password} onChange={InputEvent} className='form-control my-3' type="password" placeholder="Enter Confirm Password" />

                                        <input type="submit" value={signloading?'submiting..':'submit'} className="submit-btn my-4" />
                                    </form>
                                    <Link to='/login' style={{display:'block',textAlign:'center',margin: '15px 0',color:'red',fontSize:'20px',textDecoration:'none'}}>Already Have An Account?</Link>
                                    
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

export default SignUp;