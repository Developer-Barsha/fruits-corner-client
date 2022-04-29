import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../../images/logo.png';
import { MenuAlt2Icon, XCircleIcon } from '@heroicons/react/solid'
import './Header.css'

const Header = () => {
    const [show, setShow] = useState(false);
    const nav =
        < nav >
            <CustomLink to={'/'}>Home</CustomLink>
            <CustomLink to={'/fgvdf'}>Home</CustomLink>
            <CustomLink to={'/zfc'}>Home</CustomLink>
            <CustomLink to={'/login'}>Login</CustomLink>
            <CustomLink to={'/register'}>Register</CustomLink>
        </nav >;


    return (
        <header>
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <div className="menu">
                {nav}
            </div>

            <div className="menu-icon">
                {
                    show ?
                        <XCircleIcon style={{ width: '35px', color:'#ffbc3e' }} onClick={() => setShow(!show)} />
                        :
                        <MenuAlt2Icon style={{ width: '30px', color:'#ffbc3e' }} onClick={() => setShow(!show)} />
                }
            </div>

            {show &&
                <div className="sm-menu">
                    {nav}
                </div>
            }
        </header>
    );
};

export default Header;