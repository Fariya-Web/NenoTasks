import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './../../Hooks/useAxiosPublic';
import WorkerCard from '../Shared/WorkerCard';

const TopWorkers = () => {

    const axiosPublic = useAxiosPublic()

    const { data: topworkers = [] , isLoading, refetch } = useQuery({
        queryKey: ['worker'],
        queryFn: async () => {
            const res = await axiosPublic.get('/topworkers')
            return res.data
        }
    })

    return (
        <div className='w-[96%] max-w-screen-2xl mx-auto my-24'>
            <div>
                <h1 className='text-4xl md:text-5xl lg:text-5xl font-bold'>Top Earners Leading the Way</h1>
                <p className='hidden md:block text-lg font-medium w-[90%] lg:w-[60%] my-4'>Meet our top-performing workers who have earned the most coins through their hard work and dedication. These individuals are setting the bar high, showing what it means to excel in the world of micro-tasking! </p>
                <p className='md:hidden text-lg font-medium w-[94%] my-4'>Meet our top-performing workers who have earned the most coins through their hard work and dedication.</p>
            </div>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-screen-2xl mx-auto my-8 lg:my-14'>
                {
                    topworkers?.map(worker => <WorkerCard key={worker._id} worker={worker}/>)
                }
            </div>
        </div>
    );
};

export default TopWorkers;