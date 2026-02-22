import React from 'react';
import { Reveal } from '../components/Reveal';

const PrivacyPolicy = () => {
    return (
        <div className="pt-24 sm:pt-32 md:pt-40 bg-white min-h-screen">
            <div className="container pb-24 px-4 sm:px-6 max-w-4xl">
                <Reveal>
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase leading-tight mb-12 font-display">Privacy<br />Policy.</h1>
                </Reveal>

                <div className="prose prose-lg max-w-none text-gray-500 space-y-12">
                    <Reveal delay={0.2}>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-black font-display uppercase tracking-tight">Introduction</h2>
                            <p>
                                At Digigitz, we respect your privacy and are committed to protecting your personal data.
                                This privacy policy will inform you about how we look after your personal data when you visit our website
                                and tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-black font-display uppercase tracking-tight">Data Collection</h2>
                            <p>
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                                <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                                <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                            </ul>
                        </section>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-black font-display uppercase tracking-tight">How We Use Your Data</h2>
                            <p>
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data
                                to provide our services to you, to communicate with you about your inquiries, and to improve our website experience.
                            </p>
                        </section>
                    </Reveal>

                    <Reveal delay={0.5}>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-black font-display uppercase tracking-tight">Data Security</h2>
                            <p>
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost,
                                used or accessed in an unauthorized way, altered or disclosed.
                            </p>
                        </section>
                    </Reveal>

                    <Reveal delay={0.6}>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-black font-display uppercase tracking-tight">Contact Us</h2>
                            <p>
                                If you have any questions about this privacy policy or our privacy practices, please contact us at
                                hello@digigitz.com.
                            </p>
                        </section>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
