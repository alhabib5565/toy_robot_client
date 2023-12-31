import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle';
import { Link, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
// AOS.init();
const AllToy = () => {
    const [robots, setRobots] = useState([])
    const [text, setText] = useState('')
    console.log(text)
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    useEffect(() => {
        fetch(`https://11-assignment-server.vercel.app/robots?subCatagory=' '`)
            .then(res => res.json())
            .then(data => setRobots(data))
    }, [])

    const handleSearch = () => {
        fetch(`https://11-assignment-server.vercel.app/findJob/${text}`)
            .then(res => res.json())
            .then(data => setRobots(data))
    }

    return (
        <div className='max-w-7xl mx-auto p-4 mt-10 md:mt-20'>
            <SectionTitle titleText='Best Toy Robot For Children'></SectionTitle>
            <div className='w-fit flex items-center gap-3 mx-auto'>
                <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Seller Name" className="input input-bordered w-full" />
                <button onClick={handleSearch} className='btn btn-warning'>Search</button>
                <Modal></Modal>
            </div>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 mt-10'>
                {
                    robots?.map(robot => <div data-aos="fade-left" key={robot._id} className="card max-w-md w-full mx-auto  shadow-xl border-2 border-orange-200 hover:-translate-y-2 duration-500 bg-orange-50 hover:bg-orange-100">
                        <figure className="p-7">
                            <img src={robot?.picture} className="rounded-xl h-[200px] w-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-gray-700">NAME: {robot.toyName}</h2>
                            <p>Seller Name: {robot.sellerName}</p>
                            <p>Category: {robot.subCategory}</p>
                            <div className='flex items-center justify-between'>
                                <p>price: $ {robot.price}</p>
                                <p>Quantity: {robot.availableQuantity}</p>
                            </div>
                            <Link to={`/toyDetails/${robot._id}`}>
                                <button className="btn mt-2 btn-warning text-white btn-block">block</button>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllToy;