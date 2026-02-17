import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    { name: "Urban City Lahore", url: "/public/photo1.jpg" },
    { name: "Fuse", url: "/public/photo2.webp" },
    { name: "Snap", url: "/public/photo3.avif" },
    { name: "Xiaomi", url: "/public/photo4.jpg" },
    { name: "Cinnabon", url: "/public/photo5.jpg" },
    { name: "Burger Lab", url: "/public/photo6.webp" },
    { name: "Layers", url: "/public/photo7.jpg" },
    { name: "Sugreve", url: "/public/photo8.jpg" },
    { name: "Domino's", url: "/public/photo9.webp" },
    { name: "PM", url: "/public/photo10.jpg" }
];

const Row = ({ items, direction = 1 }) => (
    <div className="flex overflow-hidden py-6 sm:py-8 md:py-10">
        <motion.div
            initial={{ x: direction > 0 ? 0 : "-50%" }}
            animate={{ x: direction > 0 ? "-50%" : 0 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-16 sm:gap-24 md:gap-32 items-center px-8 sm:px-12 md:px-16"
        >
            {[...items, ...items].map((logo, index) => (
                <div key={index} className="flex-shrink-0 flex items-center justify-center grayscale opacity-80 hover:opacity-100 transition-all duration-300 w-24 h-12 sm:w-32 sm:h-14 md:w-40 md:h-16">
                    <img
                        src={logo.url}
                        alt={logo.name}
                        className="max-w-full max-h-full object-contain filter brightness-0"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            const span = e.target.parentElement.querySelector('span');
                            if (span) span.style.display = 'block';
                        }}
                    />
                    <span className="hidden text-xl sm:text-2xl md:text-3xl font-black text-black tracking-tighter uppercase whitespace-nowrap">
                        {logo.name}
                    </span>
                </div>
            ))}
        </motion.div>
    </div>
);

const Clients = () => {
    const row1 = logos.slice(0, 5);
    const row2 = logos.slice(5);

    return (
        <section className="py-16 sm:py-24 md:py-32 bg-white">
            <div className="container px-4 sm:px-6 md:px-[4vw] mb-10 sm:mb-12 md:mb-16">
                <h3 className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-widest text-black/20">Trusted by Brands Worldwide</h3>
            </div>
            <div className="flex flex-col gap-0">
                <Row items={row1} direction={1} />
                <Row items={row2} direction={-1} />
            </div>
        </section>
    );
};

export default Clients;
