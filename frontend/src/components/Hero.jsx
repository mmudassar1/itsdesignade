import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.4, 1.1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={sectionRef} className="relative h-[120vh] w-full flex flex-col items-center overflow-hidden bg-[#000000]">
            {/* Navigation Spacer */}
            <div className="h-[15vh] w-full" />

            {/* 3D Central Element Container */}
            <div className="sticky top-[15vh] flex-grow flex flex-col items-center justify-center w-full relative z-10 h-[70vh]">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-[40vh] h-[40vh] sm:w-[50vh] sm:h-[50vh] md:w-[60vh] md:h-[60vh] lg:w-[70vh] lg:h-[70vh] flex items-center justify-center z-20"
                >
                    <video
                        src="/video1.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-[100%] h-[120%] object-cover filter brightness-110 contrast-125"
                    />
                </motion.div>

                {/* Massive Bottom Text */}
                <div className="absolute inset-x-0 bottom-0 text-center overflow-hidden z-30 pointer-events-none pb-0 px-4 mix-blend-difference">
                    <motion.h1
                        style={{ scale, opacity, transformOrigin: 'center center' }}
                        className="text-[25vw] leading-[0.7] font-black font-display text-white tracking-[-0.05em] select-none lowercase"
                    >
                        digigitz
                    </motion.h1>
                </div>
            </div>

            {/* Scroll Indicator or extra space to allow scrolling through the hero */}
            <div className="h-[20vh]" />
        </section>
    );
};

export default Hero;
