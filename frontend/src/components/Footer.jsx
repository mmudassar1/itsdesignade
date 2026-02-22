import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, ArrowUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Footer = () => {
    const footerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer ref={footerRef} className="bg-black text-white">
            {/* Massive Brand Logo Header */}
            <div className="w-full text-center overflow-hidden ">
                <motion.h2
                    style={{ scale, transformOrigin: 'center center' }}
                    className="text-[18vw] leading-[0.7] font-black font-display text-white tracking-[-0.05em] py-20 select-none lowercase "
                >
                    digigitz
                </motion.h2>
            </div>

            {/* Main Footer Grid */}
            <div className="px-4 sm:px-6 md:px-[6vw] py-10 border-t border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    {/* Company Column */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-xl sm:text-2xl font-bold font-display tracking-tight">Company</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/about" className="text-sm sm:text-base text-gray-400 font-medium hover:text-white transition-colors">About</Link></li>
                            <li><Link to="/services" className="text-sm sm:text-base text-gray-400 font-medium hover:text-white transition-colors">Services</Link></li>
                            <li><Link to="/careers" className="text-sm sm:text-base text-gray-400 font-medium hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="/privacy" className="text-sm sm:text-base text-gray-400 font-medium hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="text-xl sm:text-2xl font-bold font-display tracking-tight">Services</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/about" className="text-sm sm:text-base text-gray-400 font-medium hover:text-white transition-colors">Website Development</Link></li>
                            <li><Link to="/careers" className="text-sm sm:text-base text-gray-400 font-medium hover:text-white transition-colors">UI/UX Design</Link></li>
                            <li><Link to="/privacy" className="text-sm sm:text-base text-gray-400 font-medium hover:text-white transition-colors">E-Commerce Development</Link></li>
                            <li><Link to="/privacy" className="text-sm sm:text-base text-gray-400 font-medium hover:text-white transition-colors">Digital Marketing</Link></li>
                            <li><Link to="/privacy" className="text-sm sm:text-base text-gray-400 font-medium hover:text-white transition-colors">Content Writing</Link></li>
                            <li><Link to="/privacy" className="text-sm sm:text-base text-gray-400 font-medium hover:text-white transition-colors">Graphic Design</Link></li>
                            {/* <li><Link to="/privacy" className="text-sm sm:text-base text-gray-400 font-medium hover:text-white transition-colors">Video Editing</Link></li> */}
                            {/* <li><Link to="/privacy" className="text-sm sm:text-base text-gray-400 font-medium hover:text-white transition-colors">Brand Identity</Link></li> */}
                        </ul>
                    </div>

                    {/* Portfolio Column */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-xl sm:text-2xl font-bold font-display tracking-tight">Portfolio</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/portfolio" className="text-sm sm:text-base text-gray-400 font-medium hover:text-white transition-colors">Our work</Link></li>
                            <li><Link to="/showreel" className="text-sm sm:text-base text-gray-400 font-medium hover:text-white transition-colors">Showreel</Link></li>
                            <li className="flex gap-4 pt-2">
                                <a href="#" className="text-white hover:opacity-70 transition-opacity">
                                    <Facebook size={20} fill="currentColor" />
                                </a>
                                <a href="#" className="text-white hover:opacity-70 transition-opacity">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="text-white hover:opacity-70 transition-opacity font-bold italic">
                                    Bē
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Our Locations Column */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-xl sm:text-2xl font-bold font-display tracking-tight">Our Locations</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/contact#global-presence" className="text-sm sm:text-base text-gray-400 font-medium hover:text-white transition-colors">USA</Link></li>
                            <li><Link to="/contact#global-presence" className="text-sm sm:text-base text-gray-400 font-medium hover:text-white transition-colors">UK</Link></li>
                            <li><Link to="/contact#global-presence" className="text-sm sm:text-base text-gray-400 font-medium hover:text-white transition-colors">Pakistan</Link></li>
                            <li><Link to="/contact#global-presence" className="text-sm sm:text-base text-gray-400 font-medium hover:text-white transition-colors">Malaysia</Link></li>
                        </ul>
                    </div>

                    {/* Logo/Badge Column */}
                    <div className="flex lg:justify-end items-start md:pt-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white flex items-center justify-center -rotate-12 group hover:rotate-0 transition-transform duration-500">
                            <span className="text-xl sm:text-2xl font-black font-display tracking-tighter">dg!</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Legal Bar */}
            <div className="px-4 sm:px-6 md:px-[6vw] py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-gray-500 font-sans gap-6">
                <div className="font-medium">
                    digigitz | 2025. All rights reserved
                </div>

                <div className="uppercase tracking-widest font-bold flex items-center gap-1">
                    POWERED BY: <span className="text-white ml-2">mudassar</span> <span className="text-primary text-lg px-1">★</span> <span className="text-white">digigitz</span>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black rounded-xl flex items-center justify-center hover:-translate-y-1 transition-transform"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={20} strokeWidth={2.5} />
                    </button>
                    {/* <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-gray-800">
                        Representation of the profile/chat icon in the image 
                        <img src="https://ui-avatars.com/api/?name=User&background=333&color=fff" alt="chat" className="w-full h-full object-cover" />
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
