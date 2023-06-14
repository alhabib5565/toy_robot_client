import React, { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
const ShopByCategory = () => {
    const [activeTab, setActiveTab] = useState('Build Your Own Robots')
    const [robots, setRobots] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/robots?subCatagory=${activeTab}`)
            .then(res => res.json())
            .then(data => setRobots(data))
    }, [activeTab])

    const handleActiveTab = (tabName) => {
        setActiveTab(tabName)
        console.log(tabName)
    }
    return (

        <div className='mb-14 md:mb-16 lg:mb-24'>
            <SectionTitle titleText='Our Some Toy'></SectionTitle>
            <div className="tabs w-fit mx-auto">
                <button onClick={() => handleActiveTab('RemoteControl')} className={`${activeTab == 'RemoteControl' ? 'tab-active border-none bg-orange-400 text-white' : ''} tab tab-bordered`}>Remote Control</button>

                <button onClick={() => handleActiveTab('SmartRobots')} className={`${activeTab == 'SmartRobots' ? 'tab-active border-none bg-orange-400 text-white' : ''} tab tab-bordered`}>Smart Robots</button>

                <button onClick={() => handleActiveTab("OwnRobots")} className={`${activeTab == 'OwnRobots' ? 'tab-active border-none bg-orange-400 text-white' : ''} tab tab-bordered`}> Own Robots</button>
            </div>

            <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 mt-10'>
                {
                    robots?.map(robot => <div key={robot._id} className="card max-w-md w-full mx-auto  shadow-xl border-2 border-orange-200 hover:-translate-y-2 duration-500 bg-orange-50 hover:bg-orange-100">
                        <figure className="p-7">
                            <img src={robot?.picture} className="rounded-xl h-[200px] w-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-gray-700">NAME: {robot.toyName}</h2>
                            <div className='flex items-center justify-between'>
                                <p>price: $ {robot.price}</p>
                                <p>
                                    <Rating
                                        style={{ maxWidth: 150 }}
                                        value={robot.rating}
                                        readOnly
                                    /></p>
                            </div>
                            <Link  to={`/myToys/${robot._id}`}>
                                <button className="btn mt-2 btn-warning text-white btn-block">View Details</button>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ShopByCategory;