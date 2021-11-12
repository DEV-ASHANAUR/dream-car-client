import React,{useState,useEffect} from 'react';
import { toast,ToastContainer } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const ManageAllOrder = () => {
    const [order,setOrder] = useState([]);
    const [loader,setLoader] = useState(true);

    //fetch only login user order
    useEffect(()=>{
        axios.get(`http://localhost:5000/order`)
        .then(res=>{
            setOrder(res.data)
            setLoader(false)
        }).catch(err=>{
            console.log(err);
        })
    },[order]);
    //handle delete
    const deleteItem = (id) =>{
        confirmAlert({
            message: 'Are you sure! You want to Delete this ..',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    axios.delete(`http://localhost:5000/order/${id}`)
                    .then(res=>{
                        if(res.status === 200){
                            const remainOrder = order.filter(item => item._id !== id);
                            setOrder(remainOrder);
                            toast.success("Order Deleted Successfully");
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
    //update order
    const updateStatus = (id) => {
        // console.log(id);
        const selectedItem = order.find(item => item._id === id);
        if(selectedItem.status === 'pending'){
            selectedItem.status = 'shipped';
            axios.put(`http://localhost:5000/order/${id}`,selectedItem)
            .then(res=>{
                if(res.data.modifiedCount > 0){
                    toast('order is Shift');
                }
            }).catch(err=>{
                console.log(err)
            });
        }else{
            selectedItem.status = 'pending';
            axios.put(`http://localhost:5000/order/${id}`,selectedItem)
            .then(res=>{
                if(res.data.modifiedCount > 0){
                    toast.success('order is revert to pending');
                }
            }).catch(err=>{
                console.log(err);
            });
        }
    }
    return (
        <div>
            <div>
            <h2 className="text-center"><span style={{borderBottom:'2px solid #111868'}}>My Order({order.length})</span></h2>
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
                                    order.length > 0 ?
                                    <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Sl</th>
                                            <th>Order_id</th>
                                            <th>Cus_Name</th>
                                            <th>Address</th>
                                            <th>phone</th>
                                            <th>Product_Name</th>
                                            <th>price</th>
                                            <th>Status</th>
                                            <th className='text-center'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            order.map((item,index)=>
                                                <tr key={item._id}>
                                                    <td>{index+1}</td>
                                                    <td>{item._id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.product_name}</td>
                                                    <td>${item.price}</td>
                                                    <td className='text-center'>
                                                        {
                                                            item.status === 'pending' ?
                                                            <button
                                                                onClick={()=>updateStatus(item._id)}
                                                                className='btn btn-warning' title='confirm-order'>Pending
                                                            </button>
                                                            :
                                                            <button
                                                                onClick={()=>updateStatus(item._id)}
                                                                className='btn btn-success' title='revert-order'>Shipped 
                                                            </button>
                                                        }
                                                        
                                                    </td>
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
                                <h4 className="text-center py-5">Order List is Empty</h4>
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
            <ToastContainer />
        </div>
        </div>
    );
};

export default ManageAllOrder;