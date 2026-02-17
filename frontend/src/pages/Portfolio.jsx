import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { services } from '../data/services';
import ServiceCTA from '../components/ServiceCTA';

const PortfolioCard = ({ service, index }) => {
    return (
        <Reveal delay={index * 0.1}>
            <Link to={`/services/${service.id}`} className="group relative w-full h-[400px] sm:h-[450px] md:h-[500px] flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Top Section */}
                <div className={`h-[70%] w-full ${service.bgClass} flex items-center justify-center relative overflow-hidden p-4 sm:p-6 md:p-8`}>
                    {service.isTextCard ? (
                        <div className="text-center z-10 p-3 sm:p-4">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tighter mb-3 sm:mb-4 leading-none">{service.mainText}</h2>
                            <p className="text-base sm:text-lg text-gray-500 font-medium lowercase tracking-widest">{service.subText}</p>
                        </div>
                    ) : service.isLogoCard ? (
                        <div className="z-10 transform transition-transform duration-700 group-hover:scale-110">
                            <h2 className="text-[80px] sm:text-[100px] md:text-[140px] font-bold text-white/90 leading-none drop-shadow-sm font-sans tracking-tighter">
                                {service.logoText}
                            </h2>
                        </div>
                    ) : (
                        <img
                            src={service.img}
                            alt={service.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    )}
                </div>

                {/* Bottom Section */}
                <div className="h-[30%] bg-[#1c2333] p-4 sm:p-5 md:p-6 flex flex-col justify-between text-white relative z-20">
                    {/* Tags */}
                    <div className="flex gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-2 mask-linear">
                        {service.tags.map((tag, i) => (
                            <span key={i} className="whitespace-nowrap px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/20 text-[9px] sm:text-[10px] md:text-xs text-white/80 uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title & Category */}
                    <div className="flex items-end justify-between mt-2">
                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-display tracking-tight text-white mb-1">{service.title}</h3>
                            <span className="text-[9px] sm:text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-widest">{service.category}</span>
                        </div>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors flex-shrink-0">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Link>
        </Reveal>
    );
};

const Portfolio = () => {
    return (
        <div className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-white min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="mb-12 sm:mb-14 md:mb-16 text-center">
                    <Reveal>
                        <h1 className="text-[12vw] sm:text-[10vw] md:text-8xl font-black uppercase tracking-tighter mb-3 sm:mb-4">Portfolio</h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto font-light px-4">
                            Explore our diverse range of services and projects, crafted to elevate brands and drive digital success.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <PortfolioCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>

            {/* Let's Connect CTA Section */}
            <Reveal delay={0.4}>
                <ServiceCTA
                    title="Let's build something great."
                    description="Meet our creative and expert team to assist you."
                    buttonText="Let's Connect"
                />
            </Reveal>
        </div>
    );
};

export default Portfolio;
