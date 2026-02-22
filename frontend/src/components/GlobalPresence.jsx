import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Reveal } from './Reveal';

const locations = [
    {
        country: "USA",
        phone: "+1 4014974640",
        email: "info@digigitz.com",
        address: "1 Valley Brook Drive East Greenwich, RI- 02818, US"
    },
    {
        country: "UK",
        phone: "+1 4014974640",
        email: "info@digigitz.com",
        address: "19 Deepdale Drive Burnley Lancashire BB 10 2SD-UK"
    },
    {
        country: "PAKISTAN",
        phone: "+92 3330105721",
        email: "info@digigitz.com",
        address: "Building 71-T, Commercial Market, sector - T, Dha Phase 2 Lahore"
    },
    {
        country: "MALAYSIA",
        phone: "+1 4014974640",
        email: "info@digigitz.com",
        address: "20-02, Block C, Jalan 2/101C, Cheras Business Centre 56100 Jalan Kuala Lumpur-Malaysia"
    }
];

const GlobalPresence = () => {
    return (
        <section id="global-presence" className="relative bg-[#021f24] py-24 sm:py-32 overflow-hidden text-white">
            {/* Background Dotted Pattern Simulation */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <Reveal>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-center mb-16 sm:mb-24">
                        Our Global Presence
                    </h2>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-24">
                    {locations.map((loc, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 border-l border-white/10 pl-6 sm:pl-8 py-2 hover:border-primary transition-colors duration-500">
                                <div className="min-w-[140px]">
                                    <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white/90">
                                        {loc.country}
                                    </h3>
                                </div>
                                <div className="space-y-4 flex-grow">
                                    <div className="flex items-start gap-4 group">
                                        <div className="mt-1 p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors">
                                            <Phone size={16} className="text-primary" />
                                        </div>
                                        <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors pt-1">
                                            {loc.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-start gap-4 group">
                                        <div className="mt-1 p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors">
                                            <Mail size={16} className="text-primary" />
                                        </div>
                                        <a href={`mailto:${loc.email}`} className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors pt-1">
                                            {loc.email}
                                        </a>
                                    </div>
                                    <div className="flex items-start gap-4 group">
                                        <div className="mt-1 p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors">
                                            <MapPin size={16} className="text-primary" />
                                        </div>
                                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed pt-1">
                                            {loc.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GlobalPresence;
