import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyAllToy = () => {
    const { user } = useContext(AuthContext)
    const [robots, setRobots] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://11-assignment-server.vercel.app/robots?subCatagory=' '`)
            .then(res => res.json())
            .then(data => setRobots(data))
    }, [])


    const handleDelte = (id) => {
        fetch(`https://11-assignment-server.vercel.app/robot/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 1) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const myRobots = robots?.filter(myRobot => myRobot.sellerEmail == user.email)

    return (
        <div>

            <div className="overflow-x-auto rounded h-full p-3 max-w-5xl mx-auto mt-10">
                <table className="table mx-auto">
                    <thead>
                        <tr>
                            <th> #</th>
                            <th>image</th>
                            <th>Toy Name</th>
                            <th>price</th>
                            <th>Avilable Quantity</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myRobots?.length < 1 && <p className='text-sm text-gray-600 text-center  mt-10'>No robot available </p>
                        }
                        {
                            myRobots?.map((robot, index) => <tr key={index}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img className='hover:scale-110 duration-200' src={robot?.picture} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>

                                <td className='uppercase font-medium'>
                                    {robot?.toyName}
                                </td>

                                <td className='text-right'>$ <span className='text-purple-500'>{robot.price}</span> </td>
                                <td>{robot.availableQuantity}</td>
                                <td className='flex items-center gap-1'>

                                    <Link to={`/robot/${robot._id}`}> <button title=' make instructor' className='btn btn-ghost btn-md text-white hover:text-gray-700 bg-purple-500'>
                                        Update
                                    </button></Link>

                                    <button onClick={() => handleDelte(robot._id)}
                                        className='btn btn-ghost btn-md text-white hover:text-gray-700 bg-red-500'> Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAllToy;