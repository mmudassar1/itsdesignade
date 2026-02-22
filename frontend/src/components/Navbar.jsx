import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-[4vw] py-4 sm:py-6 md:py-8 flex items-center justify-between text-white mix-blend-difference">
            {/* Left Links */}
            <nav className="hidden md:flex gap-6 lg:gap-10">
                <Link to="/services" className="text-lg lg:text-2xl font-large hover:opacity-70 transition-opacity">Services</Link>
                <Link to="/portfolio" className="text-lg lg:text-2xl font-large hover:opacity-70 transition-opacity">Portfolio</Link>
            </nav>

            {/* Center Logo */}
            <Link to="/" className="text-3xl font-display sm:text-4xl md:text-5xl font-black tracking-tight lowercase">
                digigitz
            </Link>

            {/* Right Links */}
            <nav className="hidden md:flex gap-6 lg:gap-10">
                <Link to="/blog" className="text-lg lg:text-2xl font-large hover:opacity-70 transition-opacity">Blog</Link>
                <Link to="/contact" className="text-lg lg:text-2xl font-large hover:opacity-70 transition-opacity">Contact Us</Link>
            </nav>

            {/* Mobile Toggle */}
            <button
                className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-black flex flex-col p-6 sm:p-8 gap-4 sm:gap-6 md:hidden shadow-lg"
                    >
                        <Link to="/services" onClick={() => setIsOpen(false)} className="text-xl sm:text-2xl font-bold uppercase py-2 hover:text-gray-300 transition-colors">Services</Link>
                        <Link to="/portfolio" onClick={() => setIsOpen(false)} className="text-xl sm:text-2xl font-bold uppercase py-2 hover:text-gray-300 transition-colors">Portfolio</Link>
                        <Link to="/blog" onClick={() => setIsOpen(false)} className="text-xl sm:text-2xl font-bold uppercase py-2 hover:text-gray-300 transition-colors">Blog</Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="text-xl sm:text-2xl font-bold uppercase py-2 hover:text-gray-300 transition-colors">Contact Us</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
