import React from 'react';
import './Fruit.css'

const Fruit = ({ fruit }) => {
    const { name, image, description, quantity, price } = fruit;

    return (
        <div className='fruit'>
            <img src={image} alt="" className='w-75 d-flex mx-auto' />
            <h1 className='fruit-name'>{name}</h1>
            <div>
                <p className='fruit-info'> <span>Quantity </span> : {quantity}</p>
                <p className='fruit-info'> <span>Price </span> : {price}</p>
            </div>
            <p>{description}</p>
            <button>Manage</button>
        </div>
    );
};

export default Fruit;