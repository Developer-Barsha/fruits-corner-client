import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import './InventoryDetail.css'

const InventoryDetail = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [fruit, setFruit] = useState({});
    const { name, image, description, quantity, price, supplier } = fruit;

    useEffect(() => {
        fetch('http://localhost:5000/fruits/' + id)
            .then(res => res.json())
            .then(data => setFruit(data));
    }, []);

    const handleUpdateFruit=e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = user?.email;
        const image = e.target.image.value;
        const supplier = e.target.supplier.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const description = e.target.description.value;

        const updatedFruit = {name, email, image, supplier, price, quantity, description};
        console.log(updatedFruit);
        fetch(`http://localhost:5000/fruits/${fruit._id}`, {
            method:'PUT',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(updatedFruit)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        e.target.reset();
    }


    return (
        <section className='d-flex inventory-detail px-4 py-5'>
            <div className='px-3 inventoryDeatail-part' style={{ border: '1px solid #ffbc3e', padding: '10px auto' }}>
                <div className='d-flex align-items-center'>
                    <img src={image} alt="" className='d-flex mx-auto' width={200} />
                    <div>
                        <h1 className='fruit-name'>{name}</h1>
                        <div className='d-flex quantity-price'>
                            <p className='fruit-info'> <span>Quantity </span> : {quantity}</p>
                            <p className='fruit-info'> <span>Price </span> : {price}</p>
                        </div>
                        <p className='fruit-info'> <span>Supplier </span> : {supplier}</p>
                        <button className='item-btn'>Delivered</button>
                    </div>
                </div>
                <p>{description}</p>
            </div>

            <div className='px-3 inventoryDeatail-part'>
                <form onSubmit={handleUpdateFruit} className='w-100'>
                    <h3>Restock The Items</h3>
                    <div className='w-100 d-flex gap-2'>
                        <input type="text" name="name" placeholder={fruit?.name} required />
                        <input type="text" name="supplier" placeholder='Fruit Supplier' required />
                    </div>
                    <div className='w-100 d-flex gap-2'>
                        <input type="number" name="price" placeholder={'Price'} required />
                        <input type="number" name="quantity" placeholder={'Quantity'} required />
                    </div>
                    <input type="text" name="image" placeholder={fruit?.image?.slice(0,40)+'...'} required />
                    <textarea className='w-100 p-2 rounded-sm' maxLength={120} rows={3} style={{ resize: 'none' }} type="text" name="description" placeholder={fruit?.description} required />
                    <input type="submit" style={{color:'white'}} value="Restock Item" />
                </form>
            </div>
        </section>
    );
};

export default InventoryDetail;