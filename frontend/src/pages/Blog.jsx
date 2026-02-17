import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import ServiceCTA from '../components/ServiceCTA';

const articles = [
    { category: "Strategy", title: "The Future of Digital", desc: "How AI is reshaping the creative landscape and what it means for brands.", date: "Oct 12, 2023", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
    { category: "Design", title: "Minimalism in 2024", desc: "Why less is still more in a noisy world. Exploring the power of whitespace.", date: "Nov 05, 2023", img: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=800" },
    { category: "Branding", title: "Brand Authenticity", desc: "Building trust through transparent design. Consumers crave real connections.", date: "Nov 28, 2023", img: "https://images.unsplash.com/photo-1532619675605-1e96805b3769?auto=format&fit=crop&q=80&w=800" },
    { category: "UX/UI", title: "Micro-interactions Matter", desc: "Enhancing user experience through subtle animations and feedback loops.", date: "Dec 10, 2023", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" },
    { category: "Marketing", title: "Storytelling vs. Selling", desc: "Why narrative-driven marketing outperforms traditional sales tactics.", date: "Jan 15, 2024", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" },
    { category: "Development", title: "The Jamstack Revolution", desc: "Building faster, more secure web applications with modern architecture.", date: "Feb 02, 2024", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" },
    { category: "Social Media", title: "Navigating The Algorithm", desc: "Strategies to maintain organic reach in an increasingly paid world.", date: "Feb 18, 2024", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800" },
    { category: "Business", title: "Scaling Without Losing Soul", desc: "How to grow your agency while maintaining your core culture and values.", date: "Mar 05, 2024", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" },
    { category: "Tech", title: "Web3 and Beyond", desc: "Demystifying blockchain for creatives. Is it still relevant?", date: "Mar 22, 2024", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" }
];

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen pt-24 sm:pt-32 md:pt-40">
            {/* Header */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-16 sm:mb-20">
                <Reveal>
                    <h1 className="text-[12vw] sm:text-[10vw] font-black uppercase leading-[0.8] mb-6 sm:mb-8">INSIGHTS</h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
                        Thoughts, strategies, and perspectives on design, technology, and the future of digital brands.
                    </p>
                </Reveal>
            </div>

            {/* Featured Article */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-20 sm:mb-24">
                <Reveal delay={0.3}>
                    <div className="group relative w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-3xl overflow-hidden cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600"
                            alt="Featured Article"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 hover:bg-black/30 transition-colors duration-300 flex flex-col justify-end p-6 sm:p-10 md:p-14">
                            <span className="text-white/80 text-sm font-bold uppercase tracking-widest mb-2">Editor's Pick</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                                Designing for the <br /> Next Generation.
                            </h2>
                            <div className="flex items-center text-white font-bold uppercase tracking-wider text-sm sm:text-base">
                                Read Article <ArrowUpRight className="ml-2" />
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Articles Grid */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                    {articles.map((article, index) => (
                        <Reveal key={index} delay={index * 0.05}>
                            <div className="group cursor-pointer">
                                <div className="h-[250px] sm:h-[300px] rounded-2xl overflow-hidden mb-6 relative">
                                    <img
                                        src={article.img}
                                        alt={article.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                        {article.category}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-semibold text-gray-400">{article.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 leading-tight group-hover:text-gray-600 transition-colors">{article.title}</h3>
                                <p className="text-gray-500 leading-relaxed mb-4">{article.desc}</p>
                                <span className="inline-flex items-center text-sm font-bold uppercase tracking-widest border-b border-black pb-0.5 group-hover:border-gray-400 transition-colors">
                                    Read Story <ArrowUpRight size={14} className="ml-1" />
                                </span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <ServiceCTA
                title="Have an idea in mind?"
                description="Our team is ready to help you turn your vision into reality. Let's start the conversation."
                buttonText="Pitch Your Idea"
            />
        </div>
    );
};

export default Blog;
