import React, { useContext, useState } from 'react';
import img from '../../assets/login.avif'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const [error, setError] = useState('')
    const {loginUser} = useContext(AuthContext)
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password)

        setError('')
        loginUser(email, password)
        .then(result => {
            console.log(result)
            Swal.fire({
                title: 'Success!',
                text: 'Login successfull',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })
        .catch(error => {
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
                    <form onSubmit={handleLogin} className="card-body">
                        <h2 className='text-3xl text-center font-bold text-gray-800'>Login Now</h2>
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

                        <p>already have an accout? <Link className='text-blue-600 hover:underline' to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;