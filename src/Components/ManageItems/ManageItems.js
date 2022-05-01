import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Table from 'react-bootstrap/Table'
import auth from '../../firebase.init';
import { TrashIcon } from '@heroicons/react/solid'
import './Manageitems.css'

const ManageItems = () => {
    const [fruits, setFruits] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch('http://localhost:5000/allfruits')
            .then(res => res.json())
            .then(data => setFruits(data));
    }, []);

    const handleDelete=id=>{
        fetch('http://localhost:5000/allfruits/'+id, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data));
        const rest = fruits.filter(fruit=>fruit._id!==id);
        setFruits(rest);
    }

    return (
        <section className='p-5'>
            <h2 className='text-center pb-3'>Manage Inventories</h2>
            <div>
                <Table striped bordered hover className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Supplier</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            fruits.map(fruit =>
                                <tr key={fruit._id} className='fruit-row'>
                                    <td>{fruit.name}</td>
                                    <td>{fruit.price}</td>
                                    <td>{fruit.quantity}</td>
                                    <td>{fruit.supplier}</td>
                                    <td><button onClick={()=>handleDelete(fruit._id)} className='delete-btn'><TrashIcon style={{width:'17px'}}/></button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </section>
    );
};

export default ManageItems;