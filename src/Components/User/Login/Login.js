import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h1>Login</h1>
            <form>
                <input type="text" name="name" placeholder='Your Name' />
                <input type="email" name="email" placeholder='Your Email' />
                <input type="password" name="password" placeholder='Your Password' />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;