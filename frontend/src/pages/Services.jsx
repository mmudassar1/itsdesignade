import React from 'react';
import Capabilities from '../components/Capabilities';
import { Reveal } from '../components/Reveal';
import ServiceCTA from '../components/ServiceCTA';

const Services = () => {
    return (
        <div className="bg-white">
            <div className="pt-24 sm:pt-32 md:pt-40">
                <div className="container mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6">
                    <Reveal>
                        <h1 className="text-[10vw] sm:text-[9vw] md:text-[8vw] font-black uppercase leading-[0.8]">Our Services</h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mt-4 sm:mt-6 max-w-3xl">
                            We offer a comprehensive range of digital services to elevate your brand and drive success.
                        </p>
                    </Reveal>
                </div>
            </div>
            <Capabilities />
            <ServiceCTA
                title="Your Vision, Our Expertise."
                description="Ready to transform your digital presence? Let's discuss your next big project."
            />
        </div>
    );
};

export default Services;
