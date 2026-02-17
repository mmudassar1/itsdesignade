import React from 'react';
import { Reveal } from '../components/Reveal';
import ServiceCTA from '../components/ServiceCTA';

const About = () => {
    return (
        <div className="pt-24 sm:pt-32 md:pt-40 bg-white">
            <div className="container pb-16 sm:pb-20 px-4 sm:px-6">
                <Reveal>
                    <h1 className="text-[14vw] sm:text-[12vw] font-black uppercase leading-[0.8] mb-8 sm:mb-10 md:mb-12">WE ARE<br />DIGIGITZ.</h1>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20">
                    <Reveal delay={0.2}>
                        <div>
                            <p className="text-xl sm:text-2xl md:text-3xl font-display leading-tight mb-6 sm:mb-8">
                                A digital design studio crafting premium experiences for forward-thinking brands. We believe in the
                                power of silence in a noisy world.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-gray-400">
                            <p>
                                Our work is defined by what we leave out, not just what we add.
                                Founded on the principles of Swiss design and modern digital aesthetics, we strive for perfection in
                                every pixel and line of code.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>

            <div className="border-y border-black/5 py-16 sm:py-20 md:py-24">
                <div className="container grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 px-4 sm:px-6">
                    <Reveal delay={0.1}>
                        <div className="text-center group">
                            <span className="block text-5xl sm:text-6xl md:text-7xl font-black mb-2 group-hover:text-primary transition-colors">40+</span>
                            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400">Projects</span>
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="text-center group">
                            <span className="block text-5xl sm:text-6xl md:text-7xl font-black mb-2 group-hover:text-primary transition-colors">12</span>
                            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400">Awards</span>
                        </div>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="text-center group">
                            <span className="block text-5xl sm:text-6xl md:text-7xl font-black mb-2 group-hover:text-primary transition-colors">2024</span>
                            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400">Est.</span>
                        </div>
                    </Reveal>
                </div>
            </div>

            <ServiceCTA
                title="Ready to Scale?"
                description="We help ambitious brands define the future. Let's create something extraordinary together."
            />
        </div>
    );
};

export default About;
