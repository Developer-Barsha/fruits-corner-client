import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../../../images/apples-basket.png'
import carousel2 from '../../../images/mangoes.png'
import carousel3 from '../../../images/Strawberries.png'

const Carousels = () => {
    return (
        <div>
            <Carousel fade>
                {/* Carousel Item 1 */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Fresh Fruits</h3>
                        <p>Fruits are an important part of a healthy eating pattern.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Carousel Item 2 */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Natural Fruits</h3>
                        <p>Natural Fruits help lower blood pressure, and flavonoids.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Carousel Item 3 */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Organic Fruits</h3>
                        <p>Organic foods have more beneficial nutrients, like antioxidants</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carousels;