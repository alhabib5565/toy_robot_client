import React from 'react';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img6 from '../assets/img6.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import useRobotes from '../hooks/useRobotes';
const Gallary = () => {
    const robots = useRobotes()
    console.log(robots)
    return (
    <>
        <h2 className="text-3xl mb-10 md:text-5xl text-orange-400 font-bold text-center">Explore Our Gallary Section</h2>
            <div className='grid grid-co2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            <img className="h-[200px] w-full rounded" src={img1} alt="" />
            <img className="h-[200px] w-full rounded" src={img2} alt="" />
            <img className="h-[200px] w-full rounded" src={img3} alt="" />
            <img className="h-[200px] w-full rounded" src={img4} alt="" />
            <img className="h-[200px] w-full rounded" src={img5} alt="" />
            <img className="h-[200px] w-full rounded" src={img6} alt="" />
            <img className="h-[200px] w-full rounded" src={img7} alt="" />
            <img className="h-[200px] w-full rounded" src={img8} alt="" />
        </div>
    </>
    );
};

export default Gallary;