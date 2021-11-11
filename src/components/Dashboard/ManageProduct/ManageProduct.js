import React, { useEffect, useState } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const ManageProduct = () => {
    const [product,setProduct] = useState([]);
    const [loader,setLoader] = useState(true);

    //fetch only login user order
    useEffect(()=>{
        axios.get('http://localhost:5000/product')
        .then(res=>{
            setLoader(false)
            setProduct(res.data);
        }).catch(err=>{
            console.log(err);
        })
    },[]);
    //delete product
    const deleteItem = (id) => {
        confirmAlert({
            message: 'Are you sure! You want to Delete this ..',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    axios.delete(`http://localhost:5000/product/${id}`)
                    .then(res=>{
                        if(res.status === 200){
                            const remainProduct = product.filter(item => item._id !== id);
                            setProduct(remainProduct);
                            toast.success("Product Deleted Successfully");
                        }
                    }).catch(err=>{
                        console.log(err);
                    });
                }
              },
              {
                label: 'No',
                onClick: () => {
                    toast('Your Item is safe :)');
                }
              }
            ],
            overlayClassName: "overley"
        });
    }
    return (
        <div>
            <h2 className="text-center"><span style={{borderBottom:'2px solid #111868'}}>Manage Product({product.length})</span></h2>
            {
            loader?
            <div className="col text-center">
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                </button>
            </div>
            :
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 m-auto">
                        <div className='myOrderArea'>
                            <div className="table-responsive">
                                {
                                    product.length > 0 ?
                                    <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>product_id</th>
                                            <th>product Name</th>
                                            <th>price</th>
                                            <th className='text-center'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            product.map(item=>
                                                <tr key={item._id}>
                                                    <td>{item._id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.price}</td>
                                                    
                                                    <td className='text-center'>
                                                        <button
                                                        onClick={()=>deleteItem(item._id)}
                                                        className='btn-logout' title='delete'><i className="fas fa-trash-alt"></i></button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        
                                    </tbody>
                                </table>
                                :
                                <h4 className="text-center py-5">Product List is Empty</h4>
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
            <ToastContainer />
        </div>
    );
};

export default ManageProduct;