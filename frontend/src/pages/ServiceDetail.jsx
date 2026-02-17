import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/services';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = services.find(s => s.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="h-screen flex items-center justify-center bg-black text-white">
                <h1 className="text-4xl font-bold">Service not found</h1>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
            {/* Hero Section */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-16 sm:mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-2xl sm:rounded-3xl ${service.bgClass} flex items-center justify-center relative overflow-hidden mb-8 sm:mb-10 md:mb-12`}
                >
                    {service.isTextCard ? (
                        <div className="text-center z-10 p-4 sm:p-6">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-black tracking-tighter mb-3 sm:mb-4 leading-none uppercase">{service.mainText}</h1>
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-500 font-medium lowercase tracking-widest">{service.subText}</p>
                        </div>
                    ) : service.isLogoCard ? (
                        <h1 className="text-[100px] sm:text-[120px] md:text-[150px] lg:text-[250px] font-bold text-white/90 leading-none drop-shadow-sm font-sans tracking-tighter">
                            {service.logoText}
                        </h1>
                    ) : (
                        <img
                            src={service.img}
                            alt={service.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    )}
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-display tracking-tight text-black mb-4 sm:mb-5 md:mb-6 leading-tight">
                            {service.title}
                        </h2>
                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                            {service.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-full border border-black/10 text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-widest">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">About this Service</h3>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                            {service.description || "We provide top-notch services tailored to your needs. Our team of experts works tirelessly to deliver results that exceed expectations and drive growth for your business."}
                        </p>
                        <Link to="/contact" className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-black text-white text-base sm:text-lg font-medium rounded-full hover:bg-gray-800 transition-colors">
                            Start a Project
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Related Projects Section */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl font-bold text-black mb-8 sm:mb-10 border-b border-gray-200 pb-3 sm:pb-4"
                >
                    Related Projects
                </motion.h3>

                {service.relatedProjects && service.relatedProjects.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {service.relatedProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="h-[250px] sm:h-[300px] md:h-[400px] bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 relative">
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                                    <img
                                        src={project.img || `https://source.unsplash.com/random/800x600?${service.tags[0]}`}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <h4 className="text-lg sm:text-xl font-bold text-black">{project.title}</h4>
                                <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider">{service.category}</p>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 sm:py-20 bg-gray-50 rounded-2xl sm:rounded-3xl">
                        <p className="text-lg sm:text-xl text-gray-400">More projects coming soon.</p>
                    </div>
                )}
            </div>

            {/* Navigation to other services */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-gray-200">
                <div className="flex justify-between items-center mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold">More Services</h3>
                    <Link to="/services" className="text-black underline font-medium underline-offset-4 text-sm sm:text-base">View All</Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    {services.filter(s => s.id !== service.id).slice(0, 4).map(s => (
                        <Link key={s.id} to={`/services/${s.id}`} className="block p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                            <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{s.title}</h4>
                            <p className="text-[10px] sm:text-xs text-gray-500 uppercase">{s.category}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
