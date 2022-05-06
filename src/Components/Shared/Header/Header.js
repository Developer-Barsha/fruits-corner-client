import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../../images/logo.png';
import { MenuAlt2Icon, XCircleIcon } from '@heroicons/react/solid';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const [show, setShow] = useState(false);
    const nav =
        < nav >
            <CustomLink to={'/'}>Home</CustomLink>
            <CustomLink to={'/blogs'}>Blogs</CustomLink>
            <CustomLink to={'/about'}>About</CustomLink>
            {
                user &&
                    <CustomLink to={'/myitems'}>My Items</CustomLink>
            }
            {
                user &&
                    <CustomLink to={'/addfruit'}>Add Item</CustomLink>
            }
            {
                user &&
                    <CustomLink to={'/manageitems'}>Manage Items</CustomLink>
            }
            {
                user ?
                    <button className='signOut-btn' onClick={() => signOut(auth)}>Sign Out</button>
                    :
                    <CustomLink to={'/login'}>Login</CustomLink>
            }
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
                        <XCircleIcon style={{ width: '35px', color: '#ffbc3e' }} onClick={() => setShow(!show)} />
                        :
                        <MenuAlt2Icon style={{ width: '30px', color: '#ffbc3e' }} onClick={() => setShow(!show)} />
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