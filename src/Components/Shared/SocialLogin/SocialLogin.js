import React, { useEffect, useState } from 'react';
import auth from '../../../firebase.init'
import {useAuthState, useSignInWithGoogle} from 'react-firebase-hooks/auth'
import './SocialLogin.css'
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [user] = useAuthState(auth);
    const [signInWithGoogle, , loading, error] = useSignInWithGoogle(auth);
    const [message, setMessage] = useState('');

    // navigate when user is found
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    // show error
    useEffect(()=>{
        if(error){
            setMessage(error?.message);
        }
    }, [])

    return (
        <section>
            <p style={{color:'#ff5858'}}>{message}</p>
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