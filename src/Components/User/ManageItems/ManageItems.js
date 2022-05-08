import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import { TrashIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom';
import './Manageitems.css';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const ManageItems = () => {
    const navigate = useNavigate();

    // getting all fruits
    const [fruits, setFruits] = useState([]);
    useEffect(() => {
        fetch('https://infinite-lowlands-70374.herokuapp.com/allfruits')
            .then(res => res.json())
            .then(data => setFruits(data));
    }, []);

    // handling delete onclick delete button
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
        <section className='manage-items'>
            <h2 className='text-center pb-3'>Manage Inventories</h2>
            <div>
                <Table striped bordered hover responsive className='table'>
                    <thead>
                        <tr>
                            {/* <th>Img</th> */}
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Supplier</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {   fruits[0] ?
                            fruits.map(fruit =>
                                <tr key={fruit._id} className='fruit-row'>
                                    {/* <td><img style={{width:'30px', borderRadius:'50%'}} src={fruit.image}/></td> */}
                                    <td>{fruit.name}</td>
                                    <td>{fruit.price}</td>
                                    <td>{fruit.quantity}</td>
                                    <td>{fruit.supplier}</td>
                                    <td><button onClick={() => handleDelete(fruit._id)} className='delete-btn'><TrashIcon style={{ width: '17px' }} /></button></td>
                                </tr>
                            ) :
                            <LoadingSpinner />
                        }
                    </tbody>
                </Table>
            </div>
            <button onClick={() => navigate('/addfruit')} className='manage-btn me-0'>Add new item</button>
        </section>
    );
};

export default ManageItems;