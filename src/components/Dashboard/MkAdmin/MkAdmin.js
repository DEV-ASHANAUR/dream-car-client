import React, { useState } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useAuth from './../../../hooks/useAuth';
const MkAdmin = () => {
    const {user} = useAuth();
    const [buffer,setBuffer] = useState(false);
    const [data,setData] = useState({
        email:''
    });
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
    //handleMkAdmin
    const handleMkAdmin = async(e) => {
        setBuffer(true);
        e.preventDefault();
        try {
            const response = await axios.post('https://enigmatic-reaches-63281.herokuapp.com/admin',{...data,requester : user.email,});
            if(response.data.modifiedCount === 0){
                setBuffer(false);
                setData({
                    email:''
                });
                toast.success('This User Already Admin!');
            }else if(response.data.modifiedCount === 1){
                setBuffer(false);
                setData({
                    email:''
                });
                toast.success('Make Admin SuccessFully!');
            }else if(response.data.status === 401){
                setData({
                    email:''
                });
                setBuffer(false);
                toast.error('You Don not Have Any Permission To Make Admin!');
            }else if(response.data.status === 404){
                setData({
                    email:''
                });
                setBuffer(false);
                toast.error('User Not Found!');
            }
        } catch (error) {
            setBuffer(false);
            console.log(error);
        }
    }
    return (
        <div>
            <h2 className="text-center"><span style={{borderBottom:'2px solid #111868'}}>Make Admin</span></h2>
            <form onSubmit={handleMkAdmin} className="mt-5">
                <div className="row">
                    <div className="col">
                        <input type="text" name="email" value={data.email} onChange={InputEvent} className="input-control" placeholder="Enter Email" required />
                    </div>
                </div>
                <button type="submit" className="send-btn">{ buffer?'Processing..':'Submit'}</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default MkAdmin;