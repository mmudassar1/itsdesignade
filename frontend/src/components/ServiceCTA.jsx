import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceCTA = ({
    title = "About this Service",
    description = "producing high-quality content for various platforms.",
    buttonText = "Start a Project",
    link = "/contact"
}) => {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl"
                >
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 sm:mb-6 tracking-tight">
                        {title}
                    </h3>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-500 font-medium leading-relaxed mb-8 sm:mb-10 max-w-2xl">
                        {description}
                    </p>
                    <Link
                        to={link}
                        className="inline-block px-8 py-4 bg-black text-white text-lg font-bold rounded-full hover:bg-gray-800 transition-all transform hover:-translate-y-1 hover:shadow-lg"
                    >
                        {buttonText}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceCTA;
