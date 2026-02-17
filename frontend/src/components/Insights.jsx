import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const articles = [
    { category: "Strategy", title: "The Future of Digital", desc: "How AI is reshaping the creative landscape and what it means for brands.", date: "Oct 12, 2023" },
    { category: "Design", title: "Minimalism in 2024", desc: "Why less is still more in a noisy world. Exploring the power of whitespace.", date: "Nov 05, 2023" },
    { category: "Branding", title: "Brand Authenticity", desc: "Building trust through transparent design. Consumers crave real connections.", date: "Nov 28, 2023" },
    { category: "UX/UI", title: "Micro-interactions Matter", desc: "Enhancing user experience through subtle animations and feedback loops.", date: "Dec 10, 2023" },
    { category: "Marketing", title: "Storytelling vs. Selling", desc: "Why narrative-driven marketing outperforms traditional sales tactics.", date: "Jan 15, 2024" },
    { category: "Development", title: "The Jamstack Revolution", desc: "Building faster, more secure web applications with modern architecture.", date: "Feb 02, 2024" }
];

const Insights = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-12 md:mb-16 gap-4 sm:gap-0">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">Latest Insights</h2>
                    <a href="#" className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs hover:text-black transition-colors">
                        Read All <ArrowUpRight size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {articles.map((article, i) => (
                        <div key={i} className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-black/5 hover:border-black/20 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer h-full flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-center mb-4 sm:mb-6">
                                    <span className="text-xs font-bold uppercase tracking-widest text-black/60 bg-gray-100 px-3 py-1 rounded-full">{article.category}</span>
                                    <span className="text-xs font-medium text-gray-400">{article.date}</span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 leading-tight">{article.title}</h3>
                                <p className="text-sm sm:text-base text-gray-500 leading-relaxed">{article.desc}</p>
                            </div>
                            <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-100 flex items-center text-sm font-bold uppercase tracking-wider group">
                                Read Article <ArrowUpRight className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={14} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Insights;
