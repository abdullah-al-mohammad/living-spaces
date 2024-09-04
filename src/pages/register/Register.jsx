import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useContext } from 'react'

const Register = () => {

    const { registerUser, loading } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('name');
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, photo, email, password);

        // if(loading){
        //     return <span className="loading loading-bars loading-lg"></span>
        // }

        registerUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => {
                console.error(error);

            }
            )

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required />
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
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <Link to='/register'><button className="btn btn-primary">Sign Up</button></Link>
                        </div>
                    </form>
                    <p className='p-4'>Already have an account please? <Link className='text-blue-600' to='/login'>Login</Link></p>
                    {
                        loading && (
                            <div>
                                <span className="loading loading-bars loading-xs"></span>
                                <span className="loading loading-bars loading-sm"></span>
                                <span className="loading loading-bars loading-md"></span>
                                <span className="loading loading-bars loading-lg"></span>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Register;