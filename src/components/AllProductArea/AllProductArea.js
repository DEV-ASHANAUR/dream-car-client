import React,{useEffect,useState} from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Item from '../ServiceArea/Item';
import axios from 'axios';
const AllProductArea = () => {
    const [product,setProduct] = useState([]);
    const [loader,setLoader] = useState(true);
    //fetch only login user order
    useEffect(()=>{
        axios.get('http://localhost:5000/product')
        .then(res=>{
            setProduct(res.data);
            setLoader(false)
        }).catch(err=>{
            console.log(err);
        })
    },[]);
    return (
        <div>
            <Breadcrumb pageName='All Car' formPage='Home' toPage='All Car'></Breadcrumb>
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
                    <>
                        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center pb-5">
                            {
                                product.length > 0 ?
                                product.map(item=><Item key={item._id} data={item}></Item>)
                                :
                                <h3 className="text-danger text-center">Product Not Available</h3>
                            }
                            
                        </div>
                      
                        
                    </>
                }
            </div>
        </div>
    );
};

export default AllProductArea;