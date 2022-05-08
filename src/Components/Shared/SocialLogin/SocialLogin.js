import React, { useEffect } from 'react';
import auth from '../../../firebase.init'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import './SocialLogin.css'
import { useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { toast, ToastContainer } from 'react-toastify';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // show error
    useEffect(()=>{
        if(error){
            toast(error?.message);
        }
    }, [])

    // navigate when user is found
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    if (user) {
        return navigate(from, { replace: true });
    }
    if (loading) {
        return <LoadingSpinner />;
    }


    return (
        <section>
            <ToastContainer/>
            {error&& <p className='text-danger'>{error.message}</p>}
            <div className='socialLogin'>
            <button onClick={()=>signInWithGoogle()}>
                <img src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png" alt="" />
                Google
            </button>

            <button>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSHnjhohZvjxf19zHrR8UKszTq5mIfH9YJQ&usqp=CAU" alt="" />
                Facebook
            </button>
        </div>
        </section>
    );
};

export default SocialLogin;