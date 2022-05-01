import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Fruit.css'

const Fruit = ({ fruit }) => {
    const { _id, name, image, description, quantity, price, supplier } = fruit;
    const navigate = useNavigate();

    return (
        <div className='fruit'>
            <img src={image} alt="" className='w-75 d-flex mx-auto' />
            <h1 className='fruit-name'>{name}</h1>
            <div>
                <p className='fruit-info'> <span>Price </span> : {price}</p>
                <p className='fruit-info'> <span>Quantity </span> : {quantity}</p>
            </div>
            <p className='fruit-info mb-0 pb-1'> <span>Supplier </span> : {supplier}</p>
            <p>{description}</p>
            <button onClick={() => navigate(`/inventory/${_id}`)}>Manage <ArrowRightIcon style={{width:'20px'}}/> </button>
        </div>
    );
};

export default Fruit;