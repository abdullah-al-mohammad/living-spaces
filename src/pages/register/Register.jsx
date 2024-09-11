import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useContext, useState, useRef } from 'react'
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';


const Register = () => {
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const hasUpperCase= /[A-Z]/;
    const hasLowerCase= /[a-z]/;
    const emailRef = useRef(null)
    const [showPassword, setShowPassword] = useState()

    // auth provider
    const { registerUser, loading, googleSignIn, githubSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
    

    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('name');
        const email = form.get('email');
        const password = form.get('password')
        const accepted = form.get('accepted')
        console.log(name, photo, email, password);

        // reset error and success
            setError('')
            setSuccess('')

        if (password.length < 6) {
            setError('password must be 6 charecter')
            return
        }
        else if (!hasUpperCase.test(password) && hasLowerCase.test(password)){
            setError('Password must contain at least one uppercase letter.')
            return
        }
        else if (!accepted) {
            setError('please accept our terms and condition')
            return
        }

        registerUser(email, password, name, photo)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(location.state ? location.state : '/')

                 // Update the user profile with name and photoURL
                updateProfile(user, {
                    displayName: name,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
            })
            .catch(error => {
                console.error(error);

            }
            )


    }

    const handleGoogleSignUp = () =>{
        googleSignIn()
        .then(result =>{
            const user = result.user
            console.log(user);
            navigate(location.state ? location.state : '/')
        })
        .catch(error => {
           // Log the actual error message and update the UI accordingly
           setError('Error: ' + error.message);
        })
    }

    // signUp with Github
    const handleGithubSignUp = () =>{
        githubSignIn()
        .then(result =>{
            console.log(result.user);
            navigate(location.state ? location.state : '/') 
        })
        .catch(error => {
            // Log the actual error message and update the UI accordingly
            setError('Error: ' + error.message);
         })
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
                            <input
                                type="email"
                                ref={emailRef}
                                placeholder="email"
                                name='email'
                                className="input input-bordered" required />
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
                                <span className='absolute top-4 right-2' onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                        </div>
                        <div>
                            <input type="checkbox" name="accepted" id="" />
                            <label className='ml-2' htmlFor='terms'>Accept Our <a href="">terms And Conditions</a></label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogleSignUp} className="btn btn-success"><FaGoogle></FaGoogle>Google</button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleGithubSignUp} className="btn btn-success"><FaGithub></FaGithub>Github</button>
                        </div>
                        {error && <p className='text-red-600'>{error}</p>}
                        {success && <p className='text-red-600'>{success}</p>}
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