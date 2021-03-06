import { ArrowRightIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Overview.css'

const Overview = () => {
    const navigate = useNavigate();

    // getting all fruit items
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://infinite-lowlands-70374.herokuapp.com/allfruits')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    // getting total items amount
    let totalItems = items.length;

    // getting total supplier amount
    let suppliers = items.map(item => item.supplier);
    let totalSuppliers = [];
    for (const supplier of suppliers) {
        if (totalSuppliers.indexOf(supplier) === -1) {
            totalSuppliers.push(supplier);
        }
    }

    // getting total quantity of all items
    let totalQuantity = 0;
    const quantities = items.map(item => item.quantity);
    for (const quantity of quantities) {
        totalQuantity = JSON.parse(quantity) + totalQuantity;
    }

    return (
        <section className='overview'>
            <h1 className='section-title'>Overview</h1>
            <div className='charts'>
                <div className="chart">
                    <h2>{totalItems}</h2>
                    <p>The amount of different items</p>
                    <button onClick={() => navigate('/manageinventory')}>See all <ArrowRightIcon style={{ width: '20px' }} /></button>
                </div>
                <div className="chart">
                    <h2>{totalSuppliers.length}</h2>
                    <p>The amount of total suppliers</p>
                    <button onClick={() => navigate('/manageinventory')}>See all <ArrowRightIcon style={{ width: '20px' }} /></button>
                </div>
                <div className="chart">
                    <h2>{totalQuantity}</h2>
                    <p>Total quantity of all items</p>
                    <button onClick={() => navigate('/manageinventory')}>See all <ArrowRightIcon style={{ width: '20px' }} /></button>
                </div>
            </div>
        </section>
    );
};

export default Overview;