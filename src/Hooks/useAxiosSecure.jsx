import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Components/Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {

    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        return Promise.reject(error)
    })

    // intercepts 401 & 403
    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async(error)=> {
        const status = error.response.status
        console.log('status error in interceptor', status, error);
        if (status === 401 || 403) {
            await logOut()
            navigate('/auth')
        }
        return Promise.reject(error)
    })

    return axiosSecure
};

export default useAxiosSecure;