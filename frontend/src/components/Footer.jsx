import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Footer = () => {
    const footerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    // const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer ref={footerRef} className="bg-black text-white border-t border-[#111] mt-12 sm:mt-16 md:mt-20">
            {/* Massive Brand Logo Header */}
            <div className="w-full text-center overflow-hidden">
                <motion.h2
                    style={{ scale, willChange: 'transform, opacity', transformOrigin: 'center center' }}
                    className="text-[16vw] sm:text-[14vw] md:text-[12vw] leading-[0.8] font-extrabold font-display text-white tracking-[-0.02em] py-6 sm:py-8 select-none lowercase"
                >
                    digigitz
                </motion.h2>
            </div>

            {/* Main Footer Grid */}
            <div className="px-4 sm:px-6 md:px-[4vw] py-12 sm:py-14 md:py-16 border-t border-[#333]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 md:gap-12">
                    {/* Tagline & Socials (Spans 2 columns) */}
                    <div className="md:col-span-2">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-[1.5rem] leading-[1.3] font-medium font-display mb-6 sm:mb-8 max-w-lg">
                            Transforming Ideas into Digital Excellence. Elevate your online presence with our innovative solutions and strategic digital services.
                        </p>
                        <div className="flex gap-4 sm:gap-6">
                            <a href="#" className="text-white hover:opacity-70 transition-opacity">
                                <Facebook size={20} className="sm:w-6 sm:h-6" fill="currentColor" />
                            </a>
                            <a href="#" className="text-white hover:opacity-70 transition-opacity">
                                <Instagram size={20} className="sm:w-6 sm:h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <h4 className="text-lg sm:text-xl font-bold font-display">Services</h4>
                        <ul className="flex flex-col gap-2 sm:gap-3">
                            <li><Link to="/services" className="text-sm sm:text-base text-[#ccc] font-light hover:text-white transition-colors">Website Development</Link></li>
                            <li><Link to="/services" className="text-sm sm:text-base text-[#ccc] font-light hover:text-white transition-colors">App Development</Link></li>
                            <li><Link to="/services" className="text-sm sm:text-base text-[#ccc] font-light hover:text-white transition-colors">Digital Marketing</Link></li>
                            <li><Link to="/services" className="text-sm sm:text-base text-[#ccc] font-light hover:text-white transition-colors">Graphic Design</Link></li>
                            <li><Link to="/services" className="text-sm sm:text-base text-[#ccc] font-light hover:text-white transition-colors">Brand Identity</Link></li>
                            <li><Link to="/services" className="text-sm sm:text-base text-[#ccc] font-light hover:text-white transition-colors">Search Engine Optimization</Link></li>
                        </ul>
                    </div>

                    {/* Our Locations Column */}
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <h4 className="text-lg sm:text-xl font-bold font-display">Our Locations</h4>
                        <ul className="flex flex-col gap-2 sm:gap-3">
                            <li><span className="text-sm sm:text-base text-[#ccc] font-light">USA</span></li>
                            <li><span className="text-sm sm:text-base text-[#ccc] font-light">UK</span></li>
                            <li><span className="text-sm sm:text-base text-[#ccc] font-light">Malaysia</span></li>
                            <li><span className="text-sm sm:text-base text-[#ccc] font-light">Pakistan</span></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <h4 className="text-lg sm:text-xl font-bold font-display">Company</h4>
                        <ul className="flex flex-col gap-2 sm:gap-3">
                            <li><Link to="/about" className="text-sm sm:text-base text-[#ccc] font-light hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/about" className="text-sm sm:text-base text-[#ccc] font-light hover:text-white transition-colors">What Sets Us Apart</Link></li>
                            <li><Link to="/about" className="text-sm sm:text-base text-[#ccc] font-light hover:text-white transition-colors">Our Origin Story</Link></li>
                            <li><Link to="/contact" className="text-sm sm:text-base text-[#ccc] font-light hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Legal Bar */}
            <div className="px-4 sm:px-6 md:px-[4vw] py-6 sm:py-8 border-t border-[#333] flex flex-col md:flex-row justify-between items-center text-xs sm:text-[0.8rem] text-[#888] font-sans gap-4 md:gap-0">
                <div className="text-center md:text-left">
                    digigitz | 2025. All rights reserved
                </div>

                <div className="uppercase text-center md:text-left">
                    POWERED BY: <span className="text-white">Mudassar</span> <span className="text-[#ff5500]">x</span> <span className="text-white">digigitz</span>
                </div>

                <button
                    onClick={scrollToTop}
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-white text-black rounded-[8px] flex items-center justify-center text-base sm:text-lg hover:-translate-y-1 transition-transform"
                    aria-label="Scroll to top"
                >
                    ↑
                </button>
            </div>
        </footer>
    );
};

export default Footer;
