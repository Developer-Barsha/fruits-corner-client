import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { TrashIcon } from '@heroicons/react/solid';
import {signOut} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import auth from '../../../firebase.init';
import Fruit from '../../Home/Fruit/Fruit';
import axiosPrivate from '../../../api/axiosPrivate';

const MyItems = () => {
    const [fruits, setFruits] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        const getItems = async () => {
            const email = user?.email;
            try{
                const { data } = await axiosPrivate.get(`http://localhost:5000/userfruits?email=${email}`);
                setFruits(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status===401){
                    signOut(auth);
                    navigate('/login')
                }
                if(error.response.status===403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getItems();
    }, [user])

    const button = id => <button className='my-items-delte-btn' onClick={() => handleDelete(id)}>Delete<TrashIcon style={{ width: '20px' }} /></button>;

    const handleDelete = id => {
        const response = window.confirm('Are you sure?');

        if (response === true) {
            fetch('https://infinite-lowlands-70374.herokuapp.com/allfruits/' + id, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data));
            const rest = fruits.filter(fruit => fruit._id !== id);
            setFruits(rest);
        }
    }

    return (
        <div className='fruits mx-auto'>
            { !fruits.length===0 ?
                fruits.map(fruit => <Fruit fruit={fruit} button={button(fruit._id)} key={fruit._id} />) :
                <div className='d-flex flex-column justify-content-center align-items-center' style={{minHeight:'100px'}}>
                    <img src="https://img.freepik.com/free-vector/no-data-concept-illustration_203587-28.jpg?w=2000" className='w-100 mx-auto' alt="" />
                    <h3 className='text-warning mx-auto'>No items added</h3>
                </div>
            }
        </div>
    );
};

export default MyItems;