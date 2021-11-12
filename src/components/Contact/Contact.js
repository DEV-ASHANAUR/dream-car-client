import React from 'react';
import './Contact.css';
import { useState } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Contact = () => {
    const [buffer,setBuffer] = useState(false);
    const [data,setData] = useState({
        name:'',
        phone:'',
        email:'',
        message:''
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
    //handleMessage
    const handleMessage = async(e) => {
        setBuffer(true);
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/message',data);
            if(response.status === 200){
                setBuffer(false);
                setData({
                    name:'',
                    phone:'',
                    email:'',
                    message:''
                });
                toast.success('Thanks For Your Message!');
            }
        } catch (error) {
            setBuffer(false);
            console.log(error);
        } 
    }
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
                                <form onSubmit={handleMessage}>
                                    <div className="row">
                                        <div className="col-12 col-lg-12 col-sm-12">
                                            <input type="text" name="name" value={data.name} onChange={InputEvent} className="my-2" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-12 col-lg-12 col-sm-12">
                                            <input type="text" name="phone" value={data.phone} onChange={InputEvent}  className="my-2" placeholder="your phone number" required />
                                        </div>
                                        <div className="col-12 col-lg-12 col-sm-12">
                                            <input name="email" value={data.email} onChange={InputEvent}  type="email" className="my-2" placeholder="your email" required />
                                        </div>
                                        <div className="col-12 col-lg-12 col-sm-12">
                                            <textarea name="message" value={data.message} onChange={InputEvent} placeholder="Write Something..." className="my-2" required></textarea>
                                        </div>
                                    </div>
                                    <button className='book-btn'>{ buffer?'SENDING..':'SEND MESSAGE'}</button>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;