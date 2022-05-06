import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <section>
            <footer>
                <div className='footer-first'>
                    <h1 className='footer-title'>Fruits Corner</h1>
                    <p>Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. You get to enjoy a variety of flavors and textures. And lots and lots of fiber.</p>
                </div>

                <div className='footer-sec'>
                    <div>
                        <h2 className='footer-title'>Links</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Products</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='footer-title'>Contact</h2>
                        <ul>
                            <li><i className="fa-solid fa-earth-asia"></i>2307 Sadar, Narsingdi</li>
                            <li><i className="fa-solid fa-map-location-dot"></i>Bangladesh</li>
                            <li><i className="fa-solid fa-phone"></i>+ (880) 9876543219</li>
                            <li><i className="fa-solid fa-envelope"></i>fruitscorner@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </footer>

            <div className='footer-bottom' style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '50px', paddingRight: '50px', paddingTop: '15px', background: '#ffbc3e' }}>
                <p>© Copyright 2022 Developer-Barsha.</p>

                <div className='social'>
                    <ul>
                        <li> <i className="fa-brands fa-facebook"></i></li>
                        <li><i className="fa-brands fa-twitter"></i></li>
                        <li><i className="fa-brands fa-linkedin-in"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;