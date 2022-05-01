import React, {useState, useEffect} from 'react';
import Fruit from '../Fruit/Fruit';
import './Fruits.css'

const Fruits = () => {
    const [fruits, setFruits] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allfruits')
        .then(res=>res.json())
        .then(data=>setFruits(data));
    } ,[]);

    return (
        <div className='fruits'>
            {
                (fruits.slice(0,6)).map(fruit=><Fruit fruit={fruit} key={fruit._id} />)
            }
        </div>
    );
};

export default Fruits;