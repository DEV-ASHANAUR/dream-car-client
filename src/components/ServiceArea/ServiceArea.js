import React, { useEffect, useState } from 'react';
import './ServiceArea.css'
import { useHistory} from "react-router-dom";
import Item from './Item';
import axios from 'axios';
const ServiceArea = () => {
    const [product,setProduct] = useState([]);
    const [loader,setLoader] = useState(true);
    const history = useHistory();
    //fetch only login user order
    useEffect(()=>{
        axios.get('https://enigmatic-reaches-63281.herokuapp.com/product')
        .then(res=>{
            setProduct(res.data.slice(0,6));
            setLoader(false)
        }).catch(err=>{
            console.log(err);
        })
    },[]);
    //linkHandle
    const linkHandle = () => {
        history.push('/allProduct');
    }
    return (
        <div>
            <div className="container">
                <h1 className="text-center py-5">Our Latest Car</h1>
                {
                    loader?
                    <div className="col text-center">
                        <button className="btn btn-primary" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    </div>
                    :
                    <>
                        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center pb-5">
                            {
                                product.length > 0 ?
                                product.map(item=><Item key={item._id} data={item}></Item>)
                                :
                                <h3 className="text-danger text-center">Product Not Available</h3>
                            }
                            
                        </div>
                        {
                            product.length > 0 &&
                            
                            <button onClick={linkHandle} className='more-btn my-3 text-uppercase'>view more</button>
                        }
                        
                    </>
                }                
            </div>
        </div>
    );
};

export default ServiceArea;