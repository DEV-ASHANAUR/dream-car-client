import React from 'react';
import { useHistory } from 'react-router';
const Item = (props) => {
    const {_id,name,photo,price,details} = props.data;
    const history = useHistory();
    //handleOrderpage
    const handleOrder = ()=>{
        history.push(`/purchase/${_id}`);
    }
    return (
        <div className="col">
            <div className="card servicecard h-100 text-center">
                <div className='service-img'>
                    <img src={photo} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="card-text text-description text-center">{details.slice(0, 100) }..</p>
                    <h3>${price}</h3>
                </div>
                <button onClick={handleOrder} className='book-btn'>Buy Now</button>
            </div>
        </div>
    );
};

export default Item;