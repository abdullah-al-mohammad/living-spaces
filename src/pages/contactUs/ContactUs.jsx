import React from 'react';
import contact from '../../assets/contact.jpg'
import Navbar from '../../navigation/Navbar';
import './contact.css'

const ContactUs = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <Navbar></Navbar>
            </div>
            <div className='contactBg'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 py-10'>
                        <div className='card'>
                            <h1 className="text-6xl text-center font-poppins mb-5 text-orange-600">Contact Us</h1>
                            <div className='mb-5'>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" className="grow" placeholder="Enter You Name" />

                                </label>
                            </div>
                            <div className='mb-5'>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" className="grow" placeholder="Enter a valid email address" />
                                </label>
                            </div>
                            <div className='mb-5 w-full'>
                                <textarea
                                    placeholder='Details here'
                                    className="textarea textarea-bordered textarea-success textarea-lg w-full max-w-xs">

                                </textarea>
                            </div>
                            <input className='btn btn-md btn-success' type="submit" value="submit" />
                        </div>
                        <div>
                            <img src={contact} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;