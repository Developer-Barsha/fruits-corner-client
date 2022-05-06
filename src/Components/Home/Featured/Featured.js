import React, { useState, useEffect } from 'react';
import './Featured.css'

const Featured = () => {
    const [fruits, setFruits] = useState([]);

    // getting all fruits to find the highest
    const [fruit, setFruit] = useState({});
    useEffect(() => {
        fetch('https://infinite-lowlands-70374.herokuapp.com/allfruits')
            .then(res => res.json())
            .then(data => setFruits(data));

            //getting and setting the highest
        const quantities = fruits?.map(item => JSON.parse(item.quantity));
        const highest = Math.max(...quantities);
        const highestFruit = fruits.find(fruit => JSON.parse(fruit.quantity) === JSON.parse(highest));
        setFruit(highestFruit);
    }, [fruits]);


    return (
        <section>
            <h1 className="ps-5 pt-5 pb-0 text-center">Featured Product</h1>
            <div className='features d-flex gap-3 align-items-center justify-content-between'>
                <div>
                    <div>
                        <h4>{fruit?.name}</h4>
                        <p>Fruit name of the featured product among all other fruits.</p>
                    </div>
                    <div>
                        <h4>{fruit?.quantity}</h4>
                        <p>Quantity of this featured product which has highest quantity</p>
                    </div>
                </div>

                <img src={fruit?.image} alt="" />
                
                <div>
                    <div>
                        <h4>{fruit?.supplier}</h4>
                        <p>Supplier of this featured product which has highest quantity</p>
                    </div>
                    <div>
                        <h4>{fruit?.price}</h4>
                        <p>Price of this featured product which has highest quantity</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;