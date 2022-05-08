import axios from 'axios';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const axiosPrivate = axios.create({});

axiosPrivate.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (!config.headers.authorization) {
        config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    }
    return config;
}, function (error) {
    // Do something with request error
    const navigate = useNavigate();
    console.log(error.message);
    if (error.response.status === 401) {
        signOut(auth);
        navigate('/login');
    }
    if (error.response.status === 403) {
        signOut(auth);
        navigate('/login');
    }
    return Promise.reject(error);
});

// Add a response interceptor
axiosPrivate.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosPrivate;