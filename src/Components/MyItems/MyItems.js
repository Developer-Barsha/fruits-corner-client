import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
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

    return (
        <div className='fruits'>
            {
                fruits.map(fruit => <Fruit fruit={fruit} key={fruit._id} />)
            }
        </div>
    );
};

export default MyItems;