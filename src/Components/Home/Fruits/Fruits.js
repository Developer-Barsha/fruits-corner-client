import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/solid';
import Fruit from '../Fruit/Fruit';
import './Fruits.css'

const Fruits = () => {
    const [fruits, setFruits] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://infinite-lowlands-70374.herokuapp.com/allfruits')
            .then(res => res.json())
            .then(data => setFruits(data));
    }, []);
    const button = id => <button onClick={() => navigate(`/inventory/${id}`)}>Manage <ArrowRightIcon style={{width:'20px'}}/> </button>;

    return (
        <section>
            <div className='fruits'>
                {
                    (fruits.slice(0, 6)).map(fruit => <Fruit button={button(fruit._id)} fruit={fruit} key={fruit._id} />)
                }
            </div>
            <button onClick={()=>navigate('/manageitems')} className='manage-btn'>Manage Inventories</button>
        </section>
    );
};

export default Fruits;