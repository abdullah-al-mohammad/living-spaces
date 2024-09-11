import React from 'react';
import { FaFacebook, FaSlackHash, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-base-200 '>
            <div className='container mx-auto'>
                <footer className="footer text-base-content p-10">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                        <Link to='/register'><button className='btn btn-primary rounded-full py-0 px-5'>Sign Up</button></Link>
                    </nav>
                </footer>
                <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
                    <aside className="grid-flow-col items-center">
                        <FaSlackHash></FaSlackHash>
                        <p>
                            ACME Industries Ltd.
                            <br />
                            Providing reliable tech since 1992
                        </p>
                    </aside>
                    <nav className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                            <a>
                                <FaTwitter></FaTwitter>
                            </a>
                            <a>
                                <FaYoutube></FaYoutube>
                            </a>
                            <a>
                                <FaFacebook></FaFacebook>
                            </a>
                        </div>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;