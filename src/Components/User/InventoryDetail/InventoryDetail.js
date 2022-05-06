import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import './InventoryDetail.css'

const InventoryDetail = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [fruit, setFruit] = useState({});
    const { name, image, description, quantity, price, supplier } = fruit;
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://infinite-lowlands-70374.herokuapp.com/allfruits/' + id)
            .then(res => res.json())
            .then(data => setFruit(data));
    }, []);

    const handleUpdateFruit = e => {
        e.preventDefault();
        const name = e.target.name.value || fruit.name;
        const email = fruit.email ? fruit.email : user?.email;
        const image = e.target.image.value || fruit.image;
        const supplier = e.target.supplier.value || fruit.supplier;
        const price = e.target.price.value || fruit.price;
        const quantity = e.target.quantity.value || fruit.quantity;
        const description = e.target.description.value || fruit.description;

        const updatedFruit = { name, email, image, supplier, price, quantity, description };
        setFruit(updatedFruit);
        fetch('https://infinite-lowlands-70374.herokuapp.com/allfruits/' + id, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedFruit)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        e.target.reset();
    }

    const handleDelivered = () => {
        const name = fruit?.name;
        const email = user?.email;
        const image = fruit.image;
        const supplier = fruit?.supplier;
        const price = fruit?.price;
        const quantity = JSON.parse(fruit?.quantity) !== 0 ? JSON.parse(fruit?.quantity) - 1 : JSON.parse(fruit?.quantity);
        const description = fruit?.description;

        const updatedFruit = { name, email, image, supplier, price, quantity, description };
        setFruit(updatedFruit);

        fetch('https://infinite-lowlands-70374.herokuapp.com/allfruits/' + id, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedFruit)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    return (
        <section className='d-flex inventory-detail px-4 py-5'>
            <div className='px-3 py-auto inventoryDeatail-part d-flex flex-column justify-content-center gap-2' style={{ border: '1px solid #ffbc3e', padding: '10px auto' }}>
                <div className='d-flex basic-info'>
                    <img src={image} alt="" className='d-flex mx-auto' width={200} />
                    <div>
                        <h1 className='fruit-name'>{name}</h1>
                        <div className='d-flex quantity-price'>
                            <p className='fruit-info'> <span>Quantity </span> : {quantity}</p>
                            <p className='fruit-info'> <span>Price </span> : {price}</p>
                        </div>
                        <p className='fruit-info'> <span>Supplier </span> : {supplier}</p>
                        <button onClick={handleDelivered} className='item-btn'>{quantity !== 0 ? 'Delivered' : 'Sold Out'}</button>
                    </div>
                </div>
                <p>{description}</p>
                <p className='fruit-info'> <span>Fruit Id: </span> : {id}</p>
            </div>

            <div className='px-3 inventoryDeatail-part'>
                <form onSubmit={handleUpdateFruit} className='w-100'>
                    <h3>Restock The Item</h3>
                    <div className='w-100 d-flex gap-2'>
                        <input type="text" name="name" placeholder={fruit?.name} />
                        <input type="text" name="supplier" placeholder='Supplier' />
                    </div>
                    <div className='w-100 d-flex gap-2'>
                        <input type="number" name="price" placeholder={'Price'} />
                        <input type="number" name="quantity" placeholder={'Quantity'} />
                    </div>
                    <input type="text" name="image" placeholder={fruit?.image?.slice(0, 40) + '...'} />
                    <textarea className='w-100 p-2 rounded-sm' maxLength={120} rows={3} style={{ resize: 'none' }} type="text" name="description" placeholder={fruit?.description} />
                    <input type="submit" style={{ color: 'white' }} value="Restock Item" />
                </form>
                <button onClick={() => navigate('/manageitems')} className='manage-btn me-0'>Manage Inventories</button>
            </div>
        </section>
    );
};

export default InventoryDetail;