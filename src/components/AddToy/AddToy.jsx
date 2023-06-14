import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
const AddToy = () => {
    const { user } = useState()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm 

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className='max-w-7xl h-screen bg-gray-200 mx-auto flex items-center p-4'>
            <form onSubmit={handleSubmit(onSubmit)} className='max-w-3xl bg-white mx-auto p-4'>
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
                        <input type="text" placeholder="Seller Name" {...register("sellerName")} className="input input-bordered w-full" />
                    </div>

                    <div>
                        <select {...register("gender")}>
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" {...register("sellerEmail")} defaultValue={user?.email} placeholder="" className="input input-bordered w-full" />
                    </div>
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