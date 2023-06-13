import React, { useContext, useState } from 'react';
import img from '../../assets/login.avif'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import {BsGoogle} from 'react-icons/bs'
const Register = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photoUrl = form.photoUrl.value
        // console.log(name, email, password, photoUrl)

        setError('')
        createUser(email, password)
            .then(result => {
                let createdUser = result.user
                console.log(createdUser)
                setError('')
                updateProfile(result.user, { displayName: name, photoURL: photoUrl })
                    .then(() => console.log('profile update success'))
                    .catch(error => {
                        setError(error.message)
                    })
                Swal.fire({
                    title: 'Success',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate('/login')
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-32 lg:flex-row-reverse">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h2 className='text-3xl text-center font-bold text-gray-800'>Login Now</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo URL" name='photoUrl' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            {error &&
                                <label className="label">
                                    <p className='text-red-500'>{error}</p>
                                </label>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' className="btn btn-primary" value="Register" />
                        </div>

                        <p>already have an accout? <Link className='text-blue-600 hover:underline' to='/login'>Login</Link></p>

                        <div className="divider">OR</div>

                        <button className="btn mx-auto btn-circle btn-outline">
                            <BsGoogle></BsGoogle>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;