import React,{useState,useEffect} from 'react';
import './MyOrder.css';
import { toast,ToastContainer } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
const MyOrder = () => {
    const {user} = useAuth();
    const [myOrder,setmyOrder] = useState([]);
    const [loader,setLoader] = useState(true);

    //fetch only login user order
    useEffect(()=>{
        axios.get(`https://enigmatic-reaches-63281.herokuapp.com/myorder/${user.email}`)
        .then(res=>{
            setmyOrder(res.data)
            setLoader(false)
        }).catch(err=>{
            console.log(err);
        })
    },[]);
    //handle delete
    const deleteItem = (id) =>{
        confirmAlert({
            message: 'Are you sure! You want to Delete this ..',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    axios.delete(`https://enigmatic-reaches-63281.herokuapp.com/order/${id}`)
                    .then(res=>{
                        if(res.status === 200){
                            const remainOrder = myOrder.filter(item => item._id !== id);
                            setmyOrder(remainOrder);
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
    return (
        <div>
            <div>
            <h2 className="text-center"><span style={{borderBottom:'2px solid #111868'}}>My Order({myOrder.length})</span></h2>
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
                                    myOrder.length > 0 ?
                                    <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Sl</th>
                                            <th>Order_id</th>
                                            <th>Customer Name</th>
                                            <th>Product Name</th>
                                            <th>price</th>
                                            <th>Status</th>
                                            <th className='text-center'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            myOrder.map((item,index)=>
                                                <tr key={item._id}>
                                                    <td>{index+1}</td>
                                                    <td>{item._id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.product_name}</td>
                                                    <td>${item.price}</td>
                                                    <td>
                                                        {
                                                            item.status === 'pending' ?
                                                            <span className="badge rounded-pill bg-warning text-dark">{item.status}</span>
                                                            :
                                                            <span className="badge rounded-pill bg-success text-white">{item.status}</span>
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

export default MyOrder;