import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='min-h-[2000px]'>
            <Helmet>
                <title>NanoTasks</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

        </div>
    );
};

export default Home;