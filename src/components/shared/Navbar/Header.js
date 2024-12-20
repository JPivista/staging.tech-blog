import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Science", path: "/science" },
        { name: "AI & Technology", path: "/ai-technology" },
        { name: "Business", path: "/business" },
        { name: "Cinema", path: "/cinema" },
        { name: "Sports", path: "/sports" },
        { name: "Gaming", path: "/gaming" },
        { name: "Healthcare", path: "/healthcare" },
        { name: "General Topics", path: "/general-topics" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    return (
        <header
            className={`sticky top-0 z-30 py-4 transition duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"}`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 ">
                {/* Logo */}
                <Link to="/" className="bg-white px-4 p-2 rounded-md shadow-md shadow-[#B5D44C]">
                    <div className="text-xl font-bold text-[#444]">Techy <span className="text-lime-500">Blog</span></div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`transition-colors duration-300 ${location.pathname === link.path
                                ? "text-black font-bold"
                                : "text-gray-600 hover:text-indigo-600"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="block lg:hidden text-gray-600 hover:text-indigo-600"
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Navigation (Off-canvas) */}
            <div
                className={`lg:hidden fixed inset-0 bg-white z-40 shadow-md py-4 mt-14 transition-transform duration-300 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                style={{ width: "80%" }}
            >
                <nav className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`transition-colors duration-300 ${location.pathname === link.path
                                ? "text-indigo-600 font-bold"
                                : "text-gray-600 hover:text-indigo-600"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
