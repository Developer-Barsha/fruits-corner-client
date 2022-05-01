import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const location = useLocation();
    const from = location?.state?.from?.pathName || '/';

    const handleLogin = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        await signInWithEmailAndPassword(email, password);
        if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email) === false) {
            return toast('Invalid Email')
        }
        if (password.length < 6) {
            return toast('Password too short')
        }
        if (user) {
            return navigate(from, { replace: true });
        }
        if (error) {
            return toast(error?.message);
        }
        if (loading) {
            return toast('Loading...')
        }
    }
    return (
        <div className='form-container'>
            <ToastContainer />
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder='Your Email' required />
                <input type="password" name="password" placeholder='Your Password' required />
                <input type="submit" value="Login" />
            </form>
            <p>Don't have Account? <Link to='/register' style={{ color: "#8259ff" }}>Register Here</Link></p>
            <p style={{ color: '#ff5858' }}>{message}</p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;