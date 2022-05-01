import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Fruit from '../Fruit/Fruit';
import './Fruits.css'

const Fruits = () => {
    const [fruits, setFruits] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/allfruits')
            .then(res => res.json())
            .then(data => setFruits(data));
    }, []);

    return (
        <section>
            <div className='fruits'>
                {
                    (fruits.slice(0, 6)).map(fruit => <Fruit fruit={fruit} key={fruit._id} />)
                }
            </div>
            <button onClick={()=>navigate('/manageitems')} className='manage-btn'>Manage Inventories</button>
        </section>
    );
};

export default Fruits;