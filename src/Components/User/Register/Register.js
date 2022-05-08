import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';


const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathName || '/';

    if (user) {
        return navigate(from, { replace: true });
    }
    if (loading) {
        return <LoadingSpinner />;
    }

    // handle register with email and password
    const handleRegister = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://infinite-lowlands-70374.herokuapp.com/login', { email });
        localStorage.setItem('accessToken', data.accessToken);

        if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email) === false) {
            return toast('Invalid Email')
        }
        if (error) {
            toast(error?.message);
        }
        if (loading) {
            return <LoadingSpinner />
        }
    }

    return (
        <div className='form-container'>
            <ToastContainer />
            <h1>Create Account</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your Name' />
                <input type="email" name="email" placeholder='Your Email' required />
                <input type="password" name="password" placeholder='Your Password' required />
                <input type="submit" value="Register" />
                {error && <p className='text-danger'>{error.message}</p>}
            </form>
            <p>Already have Account? <Link to='/login' style={{ color: "#8259ff" }}>Login Here</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;