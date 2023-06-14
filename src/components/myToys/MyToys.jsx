import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const MyToys = () => {
    const [readMore, setReadMore] = useState(true)
    const [robot] = useLoaderData()
    console.log(robot)
    return (
        <div className='mt-8 md:mt-16'>
            <div className="card lg:card-side max-w-5xl p-4 mx-auto bg-orange-100 shadow-xl">
                <figure className='lg:w-1/2'><img src={robot?.picture} alt="Album" /></figure>
                <div className="card-body relative lg:w-1/2">
                    <div className='space-y-3'>
                        <h2 className="card-title">Name: {robot.toyName}</h2>
                        <p className='text-xl'>Seller Name: {robot.sellerName}</p>
                        <p className='text-xl'>Seller Email: {robot.sellerEmail}</p>
                        <div>
                            <div className='flex items-center justify-between'>
                                <p>price: $ {robot.price}</p>
                                <p>Available Quantity: {robot.availableQuantity}</p>

                            </div>
                        </div>
                    </div>
                    {/* readmore?text.slice(100,text.end):text.slice(0.100) */}
                    {
                        robot.toyDetails.length < 250 ? <p>{robot.toyDetails}</p>: <p>{robot.toyDetails.slice(0,250)}... {
                            readMore ?  <span onClick={() => setReadMore(!readMore)} className=' cursor-pointer link-hover link-primary'>read more</span>: 
                            <span onClick={() => setReadMore(!readMore)} className=' cursor-pointer link-hover link-primary'>read less</span>
                        }
                        </p>
                    }
                    <div className="card-actions absolute bottom-0 items-center justify-center">
                        <span>Ratings: {robot.rating}</span>
                        <Rating
                            style={{ maxWidth: 150 }}
                            value={robot.rating}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyToys;