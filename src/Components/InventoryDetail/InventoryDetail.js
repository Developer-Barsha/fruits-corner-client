import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './InventoryDetail.css'

const InventoryDetail = () => {
    const { id } = useParams();
    const [fruit, setFruit] = useState({});
    useEffect(() => {
        fetch('https://infinite-lowlands-70374.herokuapp.com/fruits/' + id)
            .then(res => res.json())
            .then(data => setFruit(data));
    }, []);

    const { name, image, description, quantity, price, supplier } = fruit;

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
                        <button className='item-btn'>Manage</button>
                    </div>
                </div>
                <p>{description}</p>
            </div>

            <div className='px-3 inventoryDeatail-part'>
                <form className='w-100'>
                    <h3>Restock The Items</h3>
                    <div className='w-100 d-flex gap-2'>
                        <input type="text" name="name" placeholder={fruit.name} required />
                        <input type="text" name="supplier" placeholder='Fruit Supplier' required />
                    </div>
                    <div className='w-100 d-flex gap-2'>
                        <input type="text" name="name" placeholder={'Price:' +fruit.price} required />
                        <input type="text" name="name" placeholder={'Quantity:' +fruit.quantity} required />
                    </div>
                    <input type="text" name="image" placeholder={fruit.image.slice(0,40)+'...'} required />
                    <textarea className='w-100 p-2 rounded-sm' maxLength={120} rows={3} style={{ resize: 'none' }} type="text" name="name" placeholder={fruit.description} required />
                    <input type="submit" value="Restock Item" />
                </form>
            </div>
        </section>
    );
};

export default InventoryDetail;