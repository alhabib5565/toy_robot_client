import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../provider/AuthProvider';
import { json, useNavigate } from 'react-router-dom';
const AddToy = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const { availabeQuantity, picture, price, rating, sellerEmail, sellerName, subCategory, toyDetails, toyName } = data

        const saveRobotDetails = {
            toyName, picture, price, rating, sellerName, sellerEmail, subCategory,
            availableQuantity: availabeQuantity, toyDetails
        }

        fetch(`https://11-assignment-server.vercel.app/addToy`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveRobotDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'successfully added a toy ',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className='max-w-7xl h-screen bg-gray-200 mx-auto flex items-center p-4'>
            <form onSubmit={handleSubmit(onSubmit)} className='max-w-3xl overflow-y-auto bg-white mx-auto p-4'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <input type="text" placeholder="Toy Name" {...register("toyName")} className="input input-bordered w-full" />
                </div>
                <div className='flex gap-4 '>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="Seller Name" {...register("sellerName")} className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" {...register("sellerEmail")} defaultValue={user?.email} placeholder="" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='form-control w-full'>
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select className="select select-bordered w-full" {...register("subCategory")}>
                        <option value="RemoteControl">Remote Control</option>
                        <option value="SmartRobots">Smart Robots</option>
                        <option value="OwnRobots">Own Robots</option>
                    </select>
                </div>

                <div className='flex flex-col md:flex-row gap-4 '>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price </span>
                        </label>
                        <input type="number" placeholder="Price" {...register("price")} className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" defaultValue={user?.email} {...register("availabeQuantity")} placeholder="Quantity" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input type="number" {...register("rating")} defaultValue={user?.email} placeholder="Ratings" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">PhotoURL</span>
                    </label>
                    <input type="text" placeholder="PhotoURL" {...register("picture")} className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Toy Details</span>
                    </label>
                    <input type="text" placeholder="Toy Details" {...register("toyDetails")} className="input input-bordered w-full" />
                </div>
                <input type="submit" className="btn btn-block mt-4 btn-warning" value="Add Toy" />
            </form>
        </div>
    );
};

export default AddToy;