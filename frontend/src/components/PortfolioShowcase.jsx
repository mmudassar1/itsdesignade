import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PortfolioShowcase = () => {
    return (
        <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-32 flex flex-col items-center justify-center overflow-hidden">
            <div className="container relative flex flex-col items-center max-w-[1400px] px-4 sm:px-6">

                {/* Main Title Area */}
                <div className="relative mb-12 sm:mb-16 md:mb-20 text-center w-full flex justify-center min-h-[120px] sm:min-h-[150px] md:min-h-[200px]">
                    <h2 className="text-[14vw] sm:text-[8vw] md:text-[9vw] leading-[0.8] font-black tracking-tighter text-black select-none z-0">
                        PORTFOLIO
                    </h2>

                    {/* Floating Tags - Positioned absolutely relative to the container for better stability */}

                    {/* Branding - Top Center/Right */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="absolute top-[5%] sm:top-[10%] left-[60%] sm:left-[55%] -translate-x-1/2 rotate-[-8deg] z-10"
                    >
                        <span className="inline-block px-4 py-1.5 sm:px-6 sm:py-2 md:px-10 md:py-3 bg-white border border-gray-300 rounded-full text-xs sm:text-sm md:text-xl text-gray-600 font-normal tracking-wide shadow-sm hover:shadow-md transition-all duration-300 cursor-default font-sans">
                            Branding
                        </span>
                    </motion.div>

                    {/* Photography - Bottom Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="absolute bottom-[20%] sm:bottom-[25%] left-[10%] sm:left-[15%] rotate-[12deg] z-10"
                    >
                        <span className="inline-block px-4 py-1.5 sm:px-6 sm:py-2 md:px-10 md:py-3 bg-white border border-gray-300 rounded-full text-xs sm:text-sm md:text-xl text-gray-600 font-normal tracking-wide shadow-sm hover:shadow-md transition-all duration-300 cursor-default font-sans">
                            Photography
                        </span>
                    </motion.div>

                    {/* Social Media - Bottom Right */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="absolute bottom-[10%] sm:bottom-[15%] right-[15%] sm:right-[20%] rotate-[-6deg] z-10"
                    >
                        <span className="inline-block px-4 py-1.5 sm:px-6 sm:py-2 md:px-10 md:py-3 bg-white border border-gray-300 rounded-full text-xs sm:text-sm md:text-xl text-gray-600 font-normal tracking-wide shadow-sm hover:shadow-md transition-all duration-300 cursor-default font-sans">
                            Social Media
                        </span>
                    </motion.div>
                </div>

                {/* Description */}
                <div className="max-w-xl text-center px-4 sm:px-6 mb-8 sm:mb-10 md:mb-12">
                    <p className="text-gray-500 text-sm sm:text-sm md:text-base font-normal leading-relaxed">
                        Being unique is challenging, but those who are too afraid are never the ones who win. Don't just break the mold—frkn shatter it into pieces.
                    </p>
                </div>

                {/* CTA Button */}
                <Link
                    to="/portfolio"
                    className="group flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 rounded-full border border-black bg-white text-black font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 text-xs sm:text-sm"
                >
                    <span>See All</span>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    >
                        <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
        </section>
    );
};

export default PortfolioShowcase;
