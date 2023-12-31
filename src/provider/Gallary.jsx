import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img6 from '../assets/img6.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
const Gallary = () => {
    return (
        <div className='mb-8 md:mb-16 lg:mb-24'>
            <h2 className="text-3xl mb-10 md:text-5xl text-orange-400 font-bold text-center">Explore Our Gallary Section</h2>
            <Marquee autoFill={true}>
                <div className='grid grid-co2 md:grid-cols-3 lg:grid-cols-4 pl-3 gap-3'>
                    <img className="h-[200px] w-full rounded" src={img1} alt="" />
                    <img className="h-[200px] w-full rounded" src={img2} alt="" />
                    <img className="h-[200px] w-full rounded" src={img3} alt="" />
                    <img className="h-[200px] w-full rounded" src={img4} alt="" />
                    <img className="h-[200px] w-full rounded" src={img5} alt="" />
                    <img className="h-[200px] w-full rounded" src={img6} alt="" />
                    <img className="h-[200px] w-full rounded" src={img7} alt="" />
                    <img className="h-[200px] w-full rounded" src={img8} alt="" />
                </div>
            </Marquee>
        </ div>
    );
};

export default Gallary;