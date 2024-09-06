import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useContext, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const [error, setError] = useState()
    const hasUpperCase = /[A-Z]/;
    const [success, setSuccess] = useState()
    const [showPassword, setShowPassword] = useState()

    const navigate = useNavigate()
    const location = useLocation()



    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')

        // reset error and success
        setError('')
        setSuccess('')

        if (password.length < 6) {
            setError('password must be 6 charecter')
            return
        }
        else if (!hasUpperCase.test(password)) {
            setError('Password must contain at least one uppercase letter.')
            return
        }
        // loginUser
        loginUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate(location.state ? location.state : '/')
                setSuccess('user login successfully')

            })
            .catch(error => {
                console.error(error);

            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <div className='relative'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="password"
                                    name='password'
                                    className="input input-bordered w-full" required />
                                <span className='absolute top-4 right-3' onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-red-600'>{error}</p>
                        <p className='text-red-600'>{success}</p>
                    </form>
                    <p className='p-5'>Don't have an account please? <Link className='text-blue-600' to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;