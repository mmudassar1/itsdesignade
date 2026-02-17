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

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={sectionRef} className="relative h-[120vh] w-full flex flex-col items-center bg-black overflow-hidden">
            {/* Navigation Spacer */}
            <div className="h-[15vh] w-full" />

            {/* 3D Central Element Container */}
            <div className="sticky top-[15vh] flex-grow flex flex-col items-center justify-center w-full relative z-10 h-[70vh]">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-[35vh] h-[35vh] sm:w-[45vh] sm:h-[45vh] md:w-[55vh] md:h-[55vh] lg:w-[65vh] lg:h-[65vh] flex items-center justify-center z-20"
                >
                    <video
                        src="/video1.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-[100%] h-[100%] object-cover filter brightness-110 contrast-125 mix-blend-screen"
                    />
                </motion.div>

                {/* Massive Bottom Text */}
                <div className="absolute bottom-0 w-full text-center overflow-hidden z-30 pointer-events-none pb-6 sm:pb-8 md:pb-12 px-4">
                    <motion.h1
                        style={{ scale, opacity, willChange: 'transform, opacity', transformOrigin: 'center center' }}
                        className="text-[16vw] sm:text-[14vw] md:text-[12vw] leading-[0.8] font-extrabold font-display text-white tracking-[-0.02em] select-none lowercase"
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
