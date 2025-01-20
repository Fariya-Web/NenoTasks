import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Components/Provider/AuthProvider';

const useUser = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)

    const { data: dbuser, isLoading } = useQuery({
        queryKey: [user?.email, 'user'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user?.email}`)
            return res.data
        }
    })

    return [dbuser, isLoading];
};

export default useUser;