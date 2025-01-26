import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_PK)

const Payment = () => {

    const { id } = useParams()
    console.log(id);
    const axiosSecure = useAxiosSecure()

    const { data: packs = [], isLoading } = useQuery({
        queryKey: ['pack'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/packages`)
            return res.data || []
        }
    })

    if (isLoading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-ring loading-lg"></span></div>
    }
    console.log(packs);

    const pack = packs.find(pack => pack._id == id)

    if (!pack) {
        return <div className="text-center text-red-500">Package not found</div>;
    }
    
    const price = Math.round(pack?.pay_amount * 100)
    const coin = pack?.coins
    const category = pack?.category
    console.log(pack);
    console.log({price, coin});

    return (
        <div className='min-h-[calc(100vh-370px)] p-16 py-48 '>
            <Elements className='my-auto bg-red-700' stripe={stripePromise}>
                <CheckoutForm  price={price} coin={coin} category={category}/>
            </Elements>
        </div>
    );
};

export default Payment;