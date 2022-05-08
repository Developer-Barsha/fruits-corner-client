import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/solid';
import Fruit from '../Fruit/Fruit';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner'
import './Fruits.css'

const Fruits = () => {
    const [fruits, setFruits] = useState([]);
    const navigate = useNavigate();

    // getting all fruits
    useEffect(() => {
        fetch('https://infinite-lowlands-70374.herokuapp.com/allfruits')
            .then(res => res.json())
            .then(data => setFruits(data));
    }, []);

    // button for fruits
    const button = id => <button onClick={() => navigate(`/inventory/${id}`)}>Manage <ArrowRightIcon style={{ width: '20px' }} /> </button>;

    return (
        <section>
            <div className='fruits'>
                {fruits[0]?.name ?
                    (fruits.slice(0, 6)).map(fruit => <Fruit button={button(fruit._id)} fruit={fruit} key={fruit._id} />) : <LoadingSpinner />
                }
            </div>
            <button onClick={() => navigate('/manageinventory')} className='manage-btn'>Manage Inventories</button>
        </section>
    );
};

export default Fruits;