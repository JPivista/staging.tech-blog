import React, { useState, useEffect } from "react";
import { FaBook, FaBars, FaTimes } from "react-icons/fa"; // Import React Icons
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Listen for scroll events
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Prevent scrolling when the menu is open
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Cleanup the effect when the component unmounts or the menu closes
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    return (
        <header
            className={`sticky top-0 z-30 py-4 transition duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"}`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 relative">
                {/* Logo */}
                <Link to="/">
                    <div className="flex items-center gap-2 text-xl font-bold text-indigo-600">
                        <FaBook size={30} />
                        <span>DevBlog</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6">
                    <a href="#home" className="text-gray-600 hover:text-indigo-600">Home</a>
                    <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
                    <a href="#services" className="text-gray-600 hover:text-indigo-600">Services</a>
                    <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
                    <a href="#blog" className="text-gray-600 hover:text-indigo-600">Blog</a>
                    {/* Uncomment the line below to add a button */}
                    {/* <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">Book Appointment</button> */}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="block lg:hidden text-gray-600 hover:text-indigo-600 z-30"
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Navigation (Off-canvas) */}
            <div
                className={`lg:hidden fixed inset-0 bg-white z-40 shadow-md py-4 mt-14 transition-transform duration-300 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                style={{ width: "80%" }} // Set width to 70%
            >
                <nav className="flex flex-col items-center gap-4 py-4">
                    <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
                    <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
                    <a href="#services" className="text-gray-600 hover:text-indigo-600">Services</a>
                    <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
                    <a href="#blog" className="text-gray-600 hover:text-indigo-600">Blog</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
