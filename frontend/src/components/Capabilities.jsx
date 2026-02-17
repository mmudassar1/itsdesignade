import React from 'react';
import { motion } from 'framer-motion';

const items = [
    "Branding",
    "Social Media",
    "UI/UX Design",
    "Photography",
    "Videography",
    "CGI Video"
];

const Capabilities = () => {
    return (
        <section className="py-16 sm:py-24 md:py-32 bg-white overflow-hidden" id="capabilities">
            <div className="max-w-[90vw] mx-auto px-4 sm:px-6">
                <ul className="flex flex-col gap-3 sm:gap-4 list-none p-0 m-0">
                    {items.map((item, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: i * 0.1,
                                ease: [0.215, 0.61, 0.355, 1]
                            }}
                            viewport={{ once: true }}
                            style={{
                                marginLeft: `${i * 4}vw`
                            }}
                            className="flex items-start gap-3 sm:gap-4 md:gap-6 group cursor-pointer max-md:!ml-0"
                        >
                            {/* Step Number Circle */}
                            <div className="flex-shrink-0 mt-2 sm:mt-3 md:mt-6 lg:mt-10">
                                <span className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 border border-black rounded-full flex items-center justify-center text-[7px] sm:text-[8px] md:text-sm font-medium">
                                    {i + 1}
                                </span>
                            </div>

                            {/* Item Text */}
                            <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-[8rem] font-bold leading-[1] tracking-tight group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-500 whitespace-nowrap">
                                {item}
                            </h3>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Capabilities;
