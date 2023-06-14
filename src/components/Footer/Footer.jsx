import React from 'react';
import logo from '../../assets/logo.svg'
import { FaYoutube, FaGoogle, FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='bg-orange-100'>
            <footer className="footer max-w-7xl mx-auto py-10 text-base-content">
                <div>
                    <img src='https://static.vecteezy.com/system/resources/thumbnails/012/624/360/small/thumbs-up-robot-cartoon-logo-design-vector.jpg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0' alt="" />
                    <p>Robot Toy Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <a className="link link-hover">Phone: 01405******</a>
                    <a className="link link-hover">Address: Sherpur Nakla</a>
                    <a className="link link-hover">Email: alhabi@gmail.com</a>
                    <a className="link link-hover">Press kit</a>

                </div>
                <div>
                    <span className="footer-title">Socil</span>
                    <Link><FaFacebookF className='bg-white w-10 h-10 p-2 rounded-full cursor-pointer shadow-lg hover:scale-125 duration-500 hover:bg-orange-400 hover:text-white'></FaFacebookF></Link>
                    <FaGoogle className='bg-white w-10 h-10 p-2 rounded-full cursor-pointer shadow-lg hover:scale-125 duration-500 hover:bg-orange-400 hover:text-white'></FaGoogle>
                    <FaYoutube className='bg-white w-10 h-10 p-2 rounded-full cursor-pointer shadow-lg hover:scale-125 duration-500 hover:bg-orange-400 hover:text-white'></FaYoutube>
                </div>
            </footer>
            <div className="footer footer-center p-4 bg-gray-300 text-base-content">
                <p>Copyright © 2023 - All right reserved by Robot Toy Industries Ltd</p>
            </div>
        </div>
    );
};

export default Footer;