import React,{useState} from 'react';
import './AddProduct.css';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const AddProduct = () => {
    const [buffer,setBuffer] = useState(false);
    const [data,setData] = useState({
        name:'',
        photo:'',
        price:'',
        details:''
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
    const handleSubmit = async(e) => {
        setBuffer(true);
        e.preventDefault();
        try {
            const response = await axios.post('https://enigmatic-reaches-63281.herokuapp.com/product',data);
            if(response.status === 200){
                setBuffer(false);
                setData({
                    name:'',
                    photo:'',
                    price:'',
                    details:''
                });
                toast.success('Product Added Successfully!');
            }
        } catch (error) {
            setBuffer(false);
            console.log(error);
        } 
    }
    return (
        <div>
            <h2 className="text-center"><span style={{borderBottom:'2px solid #111868'}}>Add A Product</span></h2>
            <form onSubmit={handleSubmit} className="mt-5">
                <div className="row">
                    <div className="col">
                        <input type="text" name="name" value={data.name} onChange={InputEvent} className="input-control" placeholder="Product Name" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="text" name="photo" value={data.photo} onChange={InputEvent} className="input-control" placeholder="Product Image Url" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="number" name="price" value={data.price} onChange={InputEvent} className="input-control" placeholder="Product Price in Dollor" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <textarea name="details" value={data.details} onChange={InputEvent} className="textarea-control" cols="30" rows="5" placeholder="Enter Details" required></textarea>
                    </div>
                </div>
                <button type="submit" className="send-btn">{ buffer?'Processing..':'Submit'}</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddProduct;