import React from 'react';
import { motion } from 'framer-motion';

const Marquee = ({ text, direction = "left" }) => {
    return (
        <div className="relative overflow-hidden whitespace-nowrap py-8 sm:py-10 md:py-12 bg-white">
            <motion.div
                animate={{
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex whitespace-nowrap"
            >
                <span className="text-[10vw] font-black uppercase tracking-tighter text-black/5 px-2 sm:px-3 md:px-4 select-none">
                    {text} {text}
                </span>
                <span className="text-[10vw] font-black uppercase tracking-tighter text-black/5 px-2 sm:px-3 md:px-4 select-none">
                    {text} {text}
                </span>
            </motion.div>
        </div>
    );
};

export default Marquee;
