import React,{useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
import auth from '../../../firebase.init';

const Login = () => {
    const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    useEffect(()=>{
        if(user){
            return navigate('/');
        }
        if(error){
            setMessage(error?.message);
        }
    }, [])

    const handleLogin = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        await signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder='Your Email' required/>
                <input type="password" name="password" placeholder='Your Password' required/>
                <input type="submit" value="Login" />
            </form>
            <p>Don't have Account? <Link to='/register' style={{ color: "#8259ff" }}>Register Here</Link></p>
            <p style={{color:'#ff5858'}}>{message}</p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;