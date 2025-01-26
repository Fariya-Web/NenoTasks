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
            const res = await axiosPublic.get(`/packages`)
            return res.send || []
        }
    })

    if (isLoading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-ring loading-lg"></span></div>
    }
    console.log(packs);

    const pack = packs.find(pack => pack._id == id)
    const price = pack.pay_amount
    const coin = pack.coins
    console.log(pack);
    console.log({price, coin});

    return (
        <div className='min-h-[calc(100vh-370px)] p-16 py-48 '>
            <Elements className='my-auto bg-red-700' stripe={stripePromise}>
                <CheckoutForm  price={price} coin={coin}/>
            </Elements>
        </div>
    );
};

export default Payment;