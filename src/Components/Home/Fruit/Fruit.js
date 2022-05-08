import React from 'react';
import './Fruit.css'

const Fruit = ({ fruit, button }) => {
    // destructuring fruit
    const { name, image, description, quantity, price, supplier } = fruit;

    return (
        <div className='fruit'>
            <img src={image} alt='' style={{height:'225px'}} className='w-75 d-flex mx-auto' />
            <h1 className='fruit-name'>{name}</h1>
            <div>
                <p className='fruit-info'> <span>Price </span> : {price}</p>
                <p className='fruit-info'> <span>Quantity </span> : {quantity}</p>
            </div>
            <p className='fruit-info mb-0 pb-1'> <span>Supplier </span> : {supplier}</p>
            <p>{description}</p>
            {button}
        </div>
    );
};

export default Fruit;