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

    const handleUpdateQuantity = e => {
        e.preventDefault();
        const name = fruit.name;
        const email = fruit.email;
        const image = fruit.image;
        const supplier = fruit.supplier;
        const price = fruit.price;
        const quantity = JSON.parse(fruit?.quantity) + JSON.parse(e.target.quantity.value);
        const description = fruit.description;

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
                <form onSubmit={handleUpdateQuantity} className='w-100'>
                    <img src="https://thumbs.dreamstime.com/b/system-update-vector-illustration-concept-people-operation-can-use-landing-page-template-ui-web-mobile-app-poster-banner-flyer-146806545.jpg" className='img-fluid w-75 mx-auto d-flex' alt="" />
                    <h3>Restock The Items</h3>
                    <div className='w-100 d-flex gap-2'>
                        <input type="number" name="quantity" placeholder={'Quantity'} />
                    </div>
                    <input type="submit" style={{ color: 'white' }} value="Restock Item" />
                </form>
                <button onClick={() => navigate('/manageitems')} className='manage-btn me-0'>Manage Inventories</button>
            </div>
        </section>
    );
};

export default InventoryDetail;