import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Components/HomeComp.jsx/Banner';
import TopWorkers from '../Components/HomeComp.jsx/TopWorkers';

const Home = () => {
    return (
        <div className='min-h-[calc(100vh-376px)]'>
            <Helmet>
                <title>NanoTasks</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner/>
            <TopWorkers/>

        </div>
    );
};

export default Home;