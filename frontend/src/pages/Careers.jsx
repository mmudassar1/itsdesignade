import React from 'react';
import { Reveal } from '../components/Reveal';
import ServiceCTA from '../components/ServiceCTA';
import { Briefcase, ArrowUpRight } from 'lucide-react';

const positions = [
    {
        title: "Senior UI/UX Designer",
        type: "Full-time",
        location: "Remote / Lahore",
        desc: "We're looking for a visionary designer to lead our creative directions."
    },
    {
        title: "Full Stack Developer",
        type: "Full-time",
        location: "Lahore",
        desc: "Join our tech team to build high-performance web and mobile applications."
    },
    {
        title: "Motion Designer",
        type: "Contract",
        location: "Remote",
        desc: "Help us bring brands to life with stunning 3D and 2D animations."
    },
    {
        title: "Digital Strategist",
        type: "Full-time",
        location: "USA / Remote",
        desc: "Drive growth and impact for our global clients through strategic thinking."
    }
];

const Careers = () => {
    return (
        <div className="pt-24 sm:pt-32 md:pt-40 bg-white">
            <div className="container pb-16 sm:pb-20 px-4 sm:px-6">
                <Reveal>
                    <h1 className="text-[14vw] sm:text-[12vw] font-black uppercase leading-[0.8] mb-8 sm:mb-10 md:mb-12">Join Our<br />Culture.</h1>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 mb-24">
                    <Reveal delay={0.2}>
                        <div>
                            <p className="text-xl sm:text-2xl md:text-3xl font-display leading-tight mb-6 sm:mb-8">
                                We are always looking for ambitious people who want to push the boundaries of digital design and technology.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-gray-400">
                            <p>
                                At Designade, we don't just hire for skills; we hire for mindset.
                                We value curiosity, precision, and the courage to challenge the status quo.
                                Join a team that prioritizes excellence over everything else.
                            </p>
                        </div>
                    </Reveal>
                </div>

                <div className="space-y-6">
                    <Reveal>
                        <h2 className="text-3xl font-bold font-display mb-12 uppercase tracking-tighter">Open Positions</h2>
                    </Reveal>

                    {positions.map((job, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="group border-b border-black/5 hover:border-black transition-colors py-8 sm:py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <Briefcase size={16} className="text-primary" />
                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{job.type} • {job.location}</span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-display">{job.title}</h3>
                                    <p className="text-gray-500 max-w-md">{job.desc}</p>
                                </div>
                                <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm group-hover:text-primary transition-colors">
                                    Apply Now <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            <ServiceCTA
                title="No fit here?"
                description="We're always open to meeting talented people. Send us your portfolio for future opportunities."
                buttonText="General Application"
            />
        </div>
    );
};

export default Careers;
