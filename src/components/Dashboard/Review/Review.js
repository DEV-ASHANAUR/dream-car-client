import { Rating } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const {user} = useAuth();
    const [dbUser,setDbUser] = useState({});
    const [buffer,setBuffer] = useState(false);
    const [value, setValue] = React.useState(0);
    // console.log(dbUser.name);
    const messageRef = useRef();
    //fetch user data 
    //fetch user role
    useEffect(() => {
        fetch(`http://localhost:5000/user/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setDbUser(data);
            })
    }, [user.email])
    
    //handleRating
    const handleRating = async(e) => {
        setBuffer(true);
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/review',{message:messageRef.current.value,ratting:value,userName:dbUser.name,email:dbUser.email});
            // console.log(response.data.insertedId);
            if(response.status === 200 && response.data.insertedId){
                setBuffer(false);
                setValue(0);
                messageRef.current.value ='';
                toast.success('Thanks For Your Review!');
            }
        } catch (error) {
            setBuffer(false);
            console.log(error);
        }
    }
    return (
        <div>
            <h2 className="text-center"><span style={{borderBottom:'2px solid #111868'}}>Review</span></h2>
            <form onSubmit={handleRating} className="mt-5">
                <Rating
                    name="simple-controlled"
                    value={value}
                    precision={0.5}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                />
                <div className="row mt-3">
                    <div className="col">
                        <textarea name="messaage" ref={messageRef} className="textarea-control" cols="30" rows="5" placeholder="Write Something.." required></textarea>
                    </div>
                </div>
                <button type="submit" className="send-btn">{ buffer?'Processing..':'Submit'}</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Review;