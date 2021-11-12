import React, { useEffect, useState } from 'react';
import './Purchase.css';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
const Purchase = () => {
    const [loader,setLoader] = useState(true);
    const [buffer,setBuffer] = useState(false);
    const {user} = useAuth();
    const [product,setProduct] = useState({});
    const {id} = useParams();
    //history
    const history = useHistory();
    //set data
    const [data,setData] = useState({
        name:user.displayName,
        email:user.email,
        phone:'',
        address:''
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
    // console.log(product);
    //fetch single data 
    useEffect(()=>{
        axios.get(`https://enigmatic-reaches-63281.herokuapp.com/product/${id}`)
        .then(res=>{
            setProduct(res.data);
            setLoader(false);
        }).catch(err=>{
            console.log(err);
        })
    },[]);
    //
    //handle order
    const handleOrder = async(e) => {
        setBuffer(true);
        e.preventDefault();
        try {
            const res = await axios.post(`https://enigmatic-reaches-63281.herokuapp.com/order`,{
                ...data,
                product_id:product._id,
                product_name:product.name,
                price:product.price,
                details:product.details,
                status:'pending'
            });
            if(res.data.insertedId){
                setBuffer(false);
                setData({
                    name:user.displayName,
                    email:user.email,
                    phone:'',
                    address:''
                });
                toast.success('Your Order Placed SuccessFully!');
                // setTimeout(() => {
                //     history.push('dashboard');
                // }, 2000);
            }
        } catch (error) {
            setBuffer(false);
            console.log(error);
        }
    }
    return (
        <>
            <Breadcrumb pageName='Buy Now' formPage='Home' toPage='Buy Now'></Breadcrumb>
            <div className="container">
                {
                    loader?
                    <div className="col text-center">
                        <button className="btn btn-primary" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    </div>
                    :
                    <div className="row my-5">
                    <div className="col-md-8">
                        <img src={product.photo} className="img-fluid image-thumbnail" alt=".." />
                        <div className='details'>
                            <h3 className='py-1'>{product.name}</h3>
                            <h3 className='py-2'>Price : ${product.price}</h3>
                            <p>{product.details}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='bookArea'>
                            <h3 className='text-center'>Buy Now</h3>
                            <form onSubmit={handleOrder} className="mt-5">
                                <div className="row">
                                    <div className="col">
                                        <input type="text" name="name" value={data.name} onChange={InputEvent} className="input-control" placeholder="Full Name" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input type="email" value={data.email} className="input-control" placeholder="Email" readOnly required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" name="phone" value={data.phone} onChange={InputEvent} className="input-control" placeholder="Phone" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <textarea name="address" value={data.address} onChange={InputEvent} className="textarea-control" cols="30" rows="5" placeholder="Enter Address" required></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="send-btn">{ buffer?'processing..':'Place Order'} </button>
                            </form>
                        </div>
                    </div>
                </div>
                }
                
            </div>
            <ToastContainer />
        </>
    );
};

export default Purchase;