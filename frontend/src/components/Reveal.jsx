import { motion } from 'framer-motion';

export const Reveal = ({ children, delay = 0, x = 0, y = 50 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x, y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.215, 0.61, 0.355, 1]
            }}
        >
            {children}
        </motion.div>
    );
};
