import { ArrowRightIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import './Graphs.css'

const Graphs = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://infinite-lowlands-70374.herokuapp.com/allfruits')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    let totalItems = items.length;

    let suppliers = items.map(item => item.supplier);
    let totalSuppliers = [];
    for (const supplier of suppliers) {
        if (totalSuppliers.indexOf(supplier) === -1) {
            totalSuppliers.push(supplier);
        }
    }

    let totalQuantity = 0;
    const quantities = items.map(item => item.quantity);
    for (const quantity of quantities) {
        totalQuantity = JSON.parse(quantity) + totalQuantity;
    }

    // const colors = ['crimson', '#ff8259', '#ff5656', '#ff8259'];
    // const color = colors[Math.floor(Math.random() * colors.length)];

    return (
        <section className='charts-container'>
            <h1>Overview</h1>
            <div className='charts'>
                <div className="chart">
                    <h2>{totalItems}</h2>
                    <p>The amount of different items</p>
                    <button>See all <ArrowRightIcon style={{ width: '20px' }} /></button>
                </div>
                <div className="chart">
                    <h2>{totalSuppliers.length}</h2>
                    <p>The amount of total suppliers</p>
                    <button>See all <ArrowRightIcon style={{ width: '20px' }} /></button>
                </div>
                <div className="chart">
                    <h2>{totalQuantity}</h2>
                    <p>Total quantity of all items</p>
                    <button>See all <ArrowRightIcon style={{ width: '20px' }} /></button>
                </div>
            </div>
        </section>
    );
};

export default Graphs;