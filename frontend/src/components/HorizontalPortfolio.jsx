import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

// Removed local projects array definition


const Card = ({ project }) => {
    return (
        <Link to={`/services/${project.id}`} className="group relative w-[320px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[550px] sm:h-[600px] md:h-[700px] flex-shrink-0 flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500">
            {/* Top Section */}
            <div className={`h-[75%] w-full ${project.bgClass} flex items-center justify-center relative overflow-hidden p-4 sm:p-6 md:p-8`}>
                {project.isTextCard ? (
                    <div className="text-center z-10 p-3 sm:p-4">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter mb-3 sm:mb-4 leading-none">{project.mainText}</h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-500 font-medium lowercase tracking-widest">{project.subText}</p>
                    </div>
                ) : project.isLogoCard ? (
                    <div className="z-10 transform transition-transform duration-700 group-hover:scale-110">
                        <h2 className="text-[120px] sm:text-[150px] md:text-[180px] font-bold text-white/90 leading-none drop-shadow-sm font-sans tracking-tighter">
                            {project.logoText}
                        </h2>
                    </div>
                ) : (
                    <img
                        src={project.img}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                )}
            </div>

            {/* Bottom Section */}
            <div className="h-[25%] bg-[#1c2333] p-4 sm:p-5 md:p-6 flex flex-col justify-between text-white">
                {/* Scrollable Tags */}
                <div className="flex gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-2 mask-linear">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="whitespace-nowrap px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-1.5 rounded-full border border-white/20 text-[10px] sm:text-xs text-white/80 uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title & Category */}
                <div className="flex items-end justify-between mt-2">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-display tracking-tight text-white">{project.title}</h3>
                    <span className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-widest mb-0.5 sm:mb-1">{project.category}</span>
                </div>
            </div>
        </Link>
    );
};

const HorizontalPortfolio = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

    return (
        <section ref={targetRef} className="relative h-[400vh] sm:h-[450vh] md:h-[500vh] bg-white">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4 sm:gap-6 md:gap-8 px-6 sm:px-12 md:px-16 lg:px-24 items-center">
                    {services.map((project) => (
                        <Card key={project.id} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalPortfolio;
