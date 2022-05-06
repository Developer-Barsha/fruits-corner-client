import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div className='banner'>
            <div className='d-flex about-img gap-3 align-items-center p-4'>
                <div className='d-flex flex-column w-50 gap-3'>
                    <img src="https://blog.hubspot.com/hubfs/Sales_Blog/business-meetings.jpg" alt="" className='img-fluid' />
                    <img src="https://www.ringcentral.co.uk/gb/en/blog/wp-content/uploads/2021/05/happy-manager-leads-a-meeting-in-the-office-640x427.jpg" alt="" className='img-fluid' />
                </div>
                <div className='w-50'>
                    <img src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='img-fluid' />
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', justifyContent: 'center' }}>
                <h1>We are best at transportation.</h1>
                <p>We really care about tranporting harmlessly. We do our best and take care of the products while transporting so that nothing bad happens to the products and you get fresh fruits.</p>
                <button onClick={()=>navigate('/about')}>Know more</button>
                <p className='mt-2'>
                    <span style={{ fontWeight: '800', color: '#8259ff' }}>John Smith</span>
                    <br />
                    Business Founder
                </p>
            </div>
        </div>
    );
};

export default Banner;