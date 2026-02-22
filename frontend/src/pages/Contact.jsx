import React from 'react';
import ContactForm from '../components/ContactForm';
import GlobalPresence from '../components/GlobalPresence';
import { Reveal } from '../components/Reveal';

const Contact = () => {
    return (
        <div className="pt-24 sm:pt-32 md:pt-40 bg-white">
            <div className="container mb-16 sm:mb-20 md:mb-24 px-4 sm:px-6">
                <Reveal>
                    <h1 className="text-[10vw] sm:text-[9vw] font-black uppercase">Contact</h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mt-3 sm:mt-4">
                        Let's build something extraordinary together.
                    </p>
                </Reveal>
            </div>
            <ContactForm />
            <GlobalPresence />
        </div>
    );
};

export default Contact;
