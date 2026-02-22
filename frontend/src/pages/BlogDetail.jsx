import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { articles } from '../data/blogs';
import { Reveal } from '../components/Reveal';
import ServiceCTA from '../components/ServiceCTA';

const BlogDetail = () => {
    const { slug } = useParams();
    const article = articles.find(a => a.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const recommendedArticles = articles.filter(a => a.slug !== slug).slice(0, 3);

    if (!article) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
                <h1 className="text-4xl font-display font-bold mb-4">Article Not Found</h1>
                <Link to="/blog" className="btn btn-primary">Back to Insights</Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pt-24 sm:pt-32 md:pt-40">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl">
                <Reveal>
                    <Link to="/blog" className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors mb-8 sm:mb-12">
                        <ArrowLeft size={16} className="mr-2" /> Back to All Insights
                    </Link>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-black/60 bg-gray-100 px-3 py-1 rounded-full">{article.category}</span>
                        <span className="text-sm font-medium text-gray-400">{article.date}</span>
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <h1 className="text-[10vw] sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 font-display">
                        {article.title}
                    </h1>
                </Reveal>
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 mb-16 sm:mb-20">
                <Reveal delay={0.3}>
                    <div className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden">
                        <img
                            src={article.img}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </Reveal>
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-3xl mb-24">
                <Reveal delay={0.4}>
                    <p className="text-xl sm:text-2xl font-medium text-gray-600 mb-10 leading-relaxed font-display">
                        {article.desc}
                    </p>
                </Reveal>

                <Reveal delay={0.5}>
                    <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-gray-500 prose-p:leading-relaxed">
                        <p>{article.content}</p>
                        <p className="mt-6">As digital experiences continue to evolve, staying ahead means adapting while retaining the core principles of excellent design and user empathy. {article.title} isn't just a trend; it's a reflection of where our collective digital consciousness is heading.</p>
                    </div>
                </Reveal>
            </div>

            {/* Recommended Articles */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-24 pt-16 border-t border-black/10">
                <Reveal>
                    <div className="flex justify-between items-end mb-10 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display">More Insights</h2>
                        <Link to="/blog" className="hidden sm:inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                            View All <ArrowUpRight size={16} className="ml-2" />
                        </Link>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                    {recommendedArticles.map((recArticle, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <Link to={`/blog/${recArticle.slug}`} className="group cursor-pointer block">
                                <div className="h-[200px] sm:h-[250px] rounded-2xl overflow-hidden mb-6 relative">
                                    <img
                                        src={recArticle.img}
                                        alt={recArticle.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                        {recArticle.category}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-semibold text-gray-400">{recArticle.date}</span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-tight font-display group-hover:text-primary transition-colors">{recArticle.title}</h3>
                            </Link>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.3}>
                    <Link to="/blog" className="sm:hidden mt-8 inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                        View All Insights <ArrowUpRight size={16} className="ml-2" />
                    </Link>
                </Reveal>
            </div>

            <ServiceCTA
                title="Inspired?"
                description="Let's apply these insights to your brand and create something unforgettable together."
                buttonText="Start a Project"
            />
        </div>
    );
};

export default BlogDetail;
