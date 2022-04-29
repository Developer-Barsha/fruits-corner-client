import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../../logo.png'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav>
                <CustomLink to={'/bou'}>Home</CustomLink>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/'}>Home</CustomLink>
            </nav>
        </header>
    );
};

export default Header;