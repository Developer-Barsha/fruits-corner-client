import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <section>
            <h1 className="ps-5 pt-5 pb-0 text-center">Product Features</h1>
            <div className='features d-flex gap-3 align-items-center justify-content-between'>
                <div>
                    <div>
                        <h4>Organic Fruit</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, eum!</p>
                    </div>
                    <div>
                        <h4>Free pollution</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, eum!</p>
                    </div>
                </div>
                <img src='https://pics.clipartpng.com/Basket_with_Fruits_PNG_Clipart-210.png' alt="" />
                <div>
                    <div>
                        <h4>Fresh Fruit</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, eum!</p>
                    </div>
                    <div>
                        <h4>Natural Fruit</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, eum!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;