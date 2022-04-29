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
                            <li>Contact Us</li>
                            <li>Contact Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='footer-title'>Social</h2>
                        <ul>
                            <li> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSHnjhohZvjxf19zHrR8UKszTq5mIfH9YJQ&usqp=CAU" alt="" /> Facebook</li>
                            <li> <img src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2018/05/05/file6zcmsgmbeah12366y3nb.jpg?itok=i6JYWNQC" alt="" /> Twitter</li>
                            <li> <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" alt="" /> LinkedIn</li>
                            <li> <img src="https://internationalipohfashionweek.files.wordpress.com/2018/02/instagram-colourful-icon.png?w=466" alt="" /> instragram</li>
                        </ul>
                    </div>
                </div>
            </footer>

            <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft:'50px',paddingRight:'50px',paddingTop:'15px',background: '#ffbc3e'}}>
                <p>©Copyright 2022 Developer-Barsha. All rights deserved</p>

                <div className='social'>
                    <ul>
                        <li> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSHnjhohZvjxf19zHrR8UKszTq5mIfH9YJQ&usqp=CAU" alt="" /></li>
                        <li> <img src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2018/05/05/file6zcmsgmbeah12366y3nb.jpg?itok=i6JYWNQC" alt="" /> </li>
                        <li> <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" alt="" /></li>
                        <li> <img src="https://internationalipohfashionweek.files.wordpress.com/2018/02/instagram-colourful-icon.png?w=466" alt="" /></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;