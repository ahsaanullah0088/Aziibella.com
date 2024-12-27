import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/banner.jpg';

const Banner = () => {
    return (
        <div
            className="relative bg-cover bg-center h-[80vh] flex items-center"
            style={{
                backgroundImage: `url(${bannerImage})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>

            {/* Text Content */}
            <div className="relative z-10 text-left text-white max-w-2xl pl-8 space-y-6 animate-fadeIn">
                {/* First Text */}
                <h1 className="text-5xl md:text-7xl font-extrabold text-blue-400 leading-tight">
                Aziibella, Your Trusted Manufacturer
                </h1>

                {/* Second Text */}
                <p className="text-2xl md:text-4xl font-semibold text-gray-300">
                We give life to your ideas
                </p>

                {/* Button */}
                <Link
                    to="/shop"
                    className="inline-block bg-blue-500 hover:bg-blue-400 text-white text-lg md:text-xl font-medium py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
                >
                    Shop Now
                </Link>
            </div>
        </div>
    );
};

export default Banner;
