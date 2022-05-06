import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './Contact.css'

const Contact = () => {
    const sendMessage = e => {
        e.preventDefault();
        toast('Your message is sent');
        e.target.reset();
    }

    return (
        <section className='p-4'>
            <ToastContainer />
            <div className='contact d-flex align-items-center justify-content-between gap-4'>
                <div className='form-container'>
                    <form onSubmit={sendMessage} className='w-100 m-0 p-0'>
                        <h1 className='pb-2' style={{textAlign:'left'}}>Get In Touch</h1>
                        <input type="text" name="name" placeholder='Your Name (Optional)' />
                        <input type="email" name="email" placeholder='Your Email' required />
                        <input type="text" name="subject" placeholder='Subject (Optional)' />
                        <textarea rows={4} style={{ width: '100%', resize: 'none', padding: '5px 10px' }} type="text" name="message" placeholder='Your Message' required />
                        <input type="submit" value="Send Message" />
                    </form>
                </div>

                <div className='contact-part d-flex flex-column align-items-center justify-content-between'>

                    <div className='contact-info'>
                        <div className='d-flex align-items-center justify-content-between' style={{ width: '60%' }}>
                            <div>
                                <ul>
                                    <li><i className="fa-solid fa-earth-asia"></i>2307 Sadar, Narsingdi</li>
                                    <li><i className="fa-solid fa-map-location-dot"></i>Bangladesh</li>
                                    <li><i className="fa-solid fa-phone"></i>+ (880) 9876543219</li>
                                    <li><i className="fa-solid fa-envelope"></i>fruitscorner@gmail.com</li>
                                </ul>
                                <ul className='d-flex gap-3'>
                                    <li> <i className="fa-brands fa-facebook"></i></li>
                                    <li><i className="fa-brands fa-twitter"></i></li>
                                    <li><i className="fa-brands fa-linkedin-in"></i></li>
                                    <li><i className="fa-brands fa-instagram"></i></li>
                                </ul>
                            </div>
                            <h1 style={{ fontSize: '140px', padding: '5px 20px', color: '#ffbc3e' }}><i className="fa-solid fa-location-dot"></i></h1>
                        </div>
                    </div>

                    <img src='https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?w=2000' className='w-75 mx-auto d-flex' alt="" />
                </div>
            </div>
        </section>
    );
};

export default Contact;