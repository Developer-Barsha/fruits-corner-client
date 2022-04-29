import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../../logo.png';
import { MenuAlt2Icon, XCircleIcon } from '@heroicons/react/solid'
import './Header.css'

const Header = () => {
    const [show, setShow] = useState(true);
    const nav =
        < nav >
            <CustomLink to={'/bou'}>Home</CustomLink>
            <CustomLink to={'/'}>Home</CustomLink>
            <CustomLink to={'/'}>Home</CustomLink>
            <CustomLink to={'/'}>Home</CustomLink>
            <CustomLink to={'/'}>Home</CustomLink>
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
                        <XCircleIcon style={{ width: '35px' }} onClick={() => setShow(!show)} />
                        :
                        <MenuAlt2Icon style={{ width: '30px' }} onClick={() => setShow(!show)} />
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