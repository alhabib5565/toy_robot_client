import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form"


const UpadteToyData = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const { id } = useParams()

    const onSubmit = (data) => {
        console.log(data)
        const { availabeQuantity, price, toyDetails } = data
        const updateRobotData = { availabeQuantity, price, toyDetails }

        fetch(`http://localhost:5000/updateToy/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updateRobotData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
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

    return (
        <div className='max-w-7xl h-screen bg-gray-200 mx-auto flex items-center p-4'>
            <form onSubmit={handleSubmit(onSubmit)} className='max-w-3xl overflow-y-auto bg-white mx-auto p-4'>

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
                        <input type="number" {...register("availabeQuantity")} placeholder="Quantity" className="input input-bordered w-full" />
                    </div>
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

export default UpadteToyData;