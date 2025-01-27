import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Components/HomeComp.jsx/Banner';
import TopWorkers from '../Components/HomeComp.jsx/TopWorkers';
import Testimonials from '../Components/HomeComp.jsx/Testimonials';
import Safety from '../Components/HomeComp.jsx/Safety';
import QnA from '../Components/HomeComp.jsx/QnA';

const Home = () => {
    return (
        <div className='min-h-[calc(100vh-376px)]'>
            <Helmet>
                <title>NanoTasks</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner/>
            <TopWorkers/>
            <Safety/>
            <QnA/>
            <Testimonials/>

        </div>
    );
};

export default Home;