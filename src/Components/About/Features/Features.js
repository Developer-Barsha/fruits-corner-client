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
                        <p>Our fruits of here are 100% organic and really good for health.</p>
                    </div>
                    <div>
                        <h4>100% healthy</h4>
                        <p>You will find the fruits 100% healthy. We try our best to provide best fruits.</p>
                    </div>
                </div>
                
                <img src='https://pics.clipartpng.com/Basket_with_Fruits_PNG_Clipart-210.png' alt="" />

                <div>
                    <div>
                        <h4>Fresh Fruit</h4>
                        <p>We do not provide any fruit which isn't fresh. We care a lot about it.</p>
                    </div>
                    <div>
                        <h4>Natural Fruit</h4>
                        <p>Natural Fruits help lower blood pressure, and flavonoids.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;