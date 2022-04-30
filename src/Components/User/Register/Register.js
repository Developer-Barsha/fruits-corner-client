import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';


const Register = () => {
    const [createUserWithEmailAndPassword, , loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    // useEffect(() => {
    //     if (user) {
    //         navigate('/')
    //     }
    // }, [])

    const handleRegister = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email) === false){
            return toast('Invalid Email')
        }
        if(password.length <6){
            return toast('Password too short')
        }
        await createUserWithEmailAndPassword(email, password);
        if (user) {
            navigate('/')
        }
    }

    return (
        <div className='form-container'>
            <ToastContainer/>
            <h1>Create Account</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your Name' required />
                <input type="email" name="email" placeholder='Your Email' required />
                <input type="password" name="password" placeholder='Your Password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have Account? <Link to='/login' style={{ color: "#8259ff" }}>Login Here</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;