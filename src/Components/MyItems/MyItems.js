import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { TrashIcon } from '@heroicons/react/solid'
import auth from '../../firebase.init';
import Fruit from '../Home/Fruit/Fruit';

const MyItems = () => {
    const [fruits, setFruits] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/userfruits?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setFruits(data));
    }, []);

    const button = id => <button className='my-items-delte-btn' onClick={()=>handleDelete(id)}>Delete<TrashIcon style={{width:'20px'}}/></button>;

    const handleDelete=id=>{
        const response = window.confirm('Are you sure?');
        
        if(response===true){
            fetch('http://localhost:5000/allfruits/'+id, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => console.log(data));
            const rest = fruits.filter(fruit=>fruit._id!==id);
            setFruits(rest);
        }
    }

    return (
        <div className='fruits'>
            {
                fruits.map(fruit => <Fruit fruit={fruit} button={button(fruit._id)} key={fruit._id} />)
            }
        </div>
    );
};

export default MyItems;