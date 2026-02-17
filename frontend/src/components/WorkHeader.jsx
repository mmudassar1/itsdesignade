import React from 'react';
import { motion } from 'framer-motion';

const WorkHeader = () => {
    return (
        <section className="relative h-screen w-full bg-white flex flex-col justify-between p-6 sm:p-10 md:p-14 overflow-hidden">
            {/* Top Section */}
            <div className="flex justify-between w-full text-sm sm:text-base font-medium z-10">
                <span>Instagram</span>
                <span>Facebook</span>
            </div>

            {/* Center Title */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-0">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[14vw] sm:text-[12vw] md:text-[10vw] font-black tracking-tighter uppercase leading-none text-center"
                >
                    THE WORK
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl sm:text-2xl md:text-3xl font-light text-gray-500 mt-2 sm:mt-4 tracking-wide font-sans"
                >
                    everyone loves
                </motion.p>
            </div>

            {/* Bottom Section */}
            <div className="flex justify-between w-full mt-auto text-sm sm:text-base font-medium z-10">
                <span>Youtube</span>
                <span>Linkedin</span>
            </div>
        </section>
    );
};

export default WorkHeader;
