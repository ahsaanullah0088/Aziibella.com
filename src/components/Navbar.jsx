import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 bg-gray-100 border-b shadow-md">
            {/* First Row: Logo */}
            <div className="flex justify-center py-4 bg-white">
                <h1 className="text-2xl font-bold text-blue-600">Aziiballa</h1>
            </div>

            {/* Second Row: Links and Button */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-2">
                        {/* Links */}
                        <nav className="hidden md:flex space-x-5">
                            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-all">
                                Home
                            </Link>
                            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-all">
                                About
                            </Link>
                            <Link to="/shop" className="text-gray-700 hover:text-blue-600 transition-all">
                                Shop
                            </Link>
                            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-all">
                                Contact
                            </Link>
                            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-all">
                                Blog
                            </Link>
                        </nav>

                        {/* Sign In Button */}
                        <Link
                            to="/signin"
                            className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-all"
                        >
                            Sign In
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden text-gray-700 focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden space-y-2">
                            <Link
                                to="/"
                                className="block text-gray-700 hover:text-blue-600 transition-all"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className="block text-gray-700 hover:text-blue-600 transition-all"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                to="/shop"
                                className="block text-gray-700 hover:text-blue-600 transition-all"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Shop
                            </Link>
                            <Link
                                to="/contact"
                                className="block text-gray-700 hover:text-blue-600 transition-all"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <Link
                                to="/blog"
                                className="block text-gray-700 hover:text-blue-600 transition-all"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link
                                to="/signin"
                                className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-all"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sign In
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
