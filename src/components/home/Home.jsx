import React from 'react';
import Banner from './Banner';
import Gallary from '../../provider/Gallary';
import ShopByCategory from '../../provider/ShopByCategory';
import AllToy from '../AllToys/AllToy';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto p-2'>
                <Gallary></Gallary>
                <ShopByCategory></ShopByCategory>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;