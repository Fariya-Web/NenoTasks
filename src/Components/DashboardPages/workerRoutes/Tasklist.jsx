import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import TaskCard from '../../Shared/TaskCard';

const Tasklist = () => {

    const axiosSecure = useAxiosSecure()
    const [tasks, setTasks] = useState([])
    const [sortCriteria, setSortCriteria] = useState('');
    
    useEffect(()=>{
        const fetchTasks = async () => {
            try {
                const response = await axiosSecure.get('/tasks'); // Replace with your actual API URL
                setTasks(response.data);
                
            } catch (error) {
            }
        };
        fetchTasks();
    },[])

    const sortedTasks = [...tasks].sort((a, b) => {
        if (sortCriteria === 'workers') {
            return b.required_workers - a.required_workers; // Higher workers first
        } else if (sortCriteria === 'pay') {
            return b.payable_amount - a.payable_amount; // Higher pay first
        }
        return 0; // Default (no sorting)
    });
   

    return (
        <div className='py-10 min-h-screen'>

            <div className='max-w-screen-xl w-[92%] mx-auto flex justify-end'>

                <select 
                className="select w-full max-w-xs font-medium dark:bg-[#1b1220] text-base"
                onChange={(e) => setSortCriteria(e.target.value)}>
                    <option disabled selected>Sort</option>
                    <option value="workers">By Required Worker</option>
                    <option value="pay">By Pay Amount</option>
                </select>
            </div>
            <div className='max-w-screen-xl w-[92%] mx-auto grid gap-5 lg:grid-cols-3 mt-5'>
                {
                    sortedTasks.map(task => <TaskCard key={task._id} task={task} />)
                }
            </div>
        </div>
    );
};

export default Tasklist;