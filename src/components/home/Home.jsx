import React from 'react';
import Banner from './Banner';
import Gallary from '../../provider/Gallary';
import ShopByCategory from '../../provider/ShopByCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto p-2'>
                <Gallary></Gallary>
                <ShopByCategory></ShopByCategory>
            </div>
        </div>
    );
};

export default Home;