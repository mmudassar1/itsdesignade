import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, CheckCircle, XCircle } from 'lucide-react';
import { submitContactForm } from '../services/api';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyName: '',
        designation: '',
        phone: '',
        services: [],
        budget: '',
        hearAboutUs: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleServiceToggle = (service) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service]
        }));
    };

    const handleBudgetChange = (budget) => {
        setFormData(prev => ({ ...prev, budget }));
    };

    const handleHearAboutUsChange = (source) => {
        setFormData(prev => ({ ...prev, hearAboutUs: source }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        setErrorMessage('');

        try {
            await submitContactForm(formData);
            setSubmitStatus('success');
            setFormData({
                name: '', email: '', companyName: '', designation: '',
                phone: '', services: [], budget: '', hearAboutUs: '', message: ''
            });
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage(error.message || 'Failed to submit form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white" id="contact-form">
            <div className="container max-w-6xl px-4 sm:px-6">
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                    <div className="mb-8 p-4 sm:p-6 bg-green-50 border-2 border-green-500 rounded-2xl flex items-start gap-3">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-1">Thank you!</h3>
                            <p className="text-green-700">Your message has been sent successfully. We'll get back to you soon!</p>
                        </div>
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="mb-8 p-4 sm:p-6 bg-red-50 border-2 border-red-500 rounded-2xl flex items-start gap-3">
                        <XCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-red-900 mb-1">Error</h3>
                            <p className="text-red-700">{errorMessage}</p>
                        </div>
                    </div>
                )}

                {/* Section Heading */}
                <div className="mb-8 sm:mb-10 md:mb-12 border-b-2 border-black pb-3 sm:pb-4">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight">Start a project</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-10 sm:space-y-12 md:space-y-16">
                    {/* Services Section */}
                    <div className="space-y-6 sm:space-y-8">
                        <label className="block text-xl sm:text-2xl font-medium">You need to do</label>
                        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                            {["Branding", "Photography", "Social Media", "Videography", "UI/UX"].map((service) => (
                                <label key={service} className="cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="hidden peer"
                                        checked={formData.services.includes(service)}
                                        onChange={() => handleServiceToggle(service)}
                                    />
                                    <span className="px-5 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 border border-black rounded-full text-sm sm:text-lg md:text-xl font-medium transition-all peer-checked:bg-black peer-checked:text-white hover:bg-black/5 inline-block">
                                        {service}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-8 sm:space-y-10 md:space-y-14">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Name"
                            required
                            className="w-full bg-transparent border-b border-gray-300 py-4 sm:py-5 md:py-6 text-xl sm:text-2xl md:text-3xl placeholder-gray-400 outline-none focus:border-black transition-colors"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            required
                            className="w-full bg-transparent border-b border-gray-300 py-4 sm:py-5 md:py-6 text-xl sm:text-2xl md:text-3xl placeholder-gray-400 outline-none focus:border-black transition-colors"
                        />
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder="Company name"
                            className="w-full bg-transparent border-b border-gray-300 py-4 sm:py-5 md:py-6 text-xl sm:text-2xl md:text-3xl placeholder-gray-400 outline-none focus:border-black transition-colors"
                        />
                        <input
                            type="text"
                            name="designation"
                            value={formData.designation}
                            onChange={handleInputChange}
                            placeholder="Designation"
                            className="w-full bg-transparent border-b border-gray-300 py-4 sm:py-5 md:py-6 text-xl sm:text-2xl md:text-3xl placeholder-gray-400 outline-none focus:border-black transition-colors"
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Phone"
                            className="w-full bg-transparent border-b border-gray-300 py-4 sm:py-5 md:py-6 text-xl sm:text-2xl md:text-3xl placeholder-gray-400 outline-none focus:border-black transition-colors"
                        />
                    </div>

                    {/* Budget Section */}
                    <div className="space-y-6 sm:space-y-8">
                        <label className="block text-xl sm:text-2xl font-medium">Budget</label>
                        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                            {["$1500 - $5000", "$5000 - $10000", "more than $10000"].map((budget) => (
                                <label key={budget} className="cursor-pointer">
                                    <input
                                        type="radio"
                                        name="budget"
                                        className="hidden peer"
                                        checked={formData.budget === budget}
                                        onChange={() => handleBudgetChange(budget)}
                                    />
                                    <span className="px-5 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 border border-black rounded-full text-sm sm:text-lg md:text-xl font-medium transition-all peer-checked:bg-black peer-checked:text-white hover:bg-black/5 inline-block">
                                        {budget}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* How did you hear about us */}
                    <div className="space-y-6 sm:space-y-8">
                        <label className="block text-xl sm:text-2xl font-medium">How did you hear about us?</label>
                        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                            {["Google", "Social Media", "Friend", "Other"].map((source) => (
                                <label key={source} className="cursor-pointer">
                                    <input
                                        type="radio"
                                        name="hearAboutUs"
                                        className="hidden peer"
                                        checked={formData.hearAboutUs === source}
                                        onChange={() => handleHearAboutUsChange(source)}
                                    />
                                    <span className="px-5 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 border border-black rounded-full text-sm sm:text-lg md:text-xl font-medium transition-all peer-checked:bg-black peer-checked:text-white hover:bg-black/5 inline-block">
                                        {source}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-6 sm:space-y-8">
                        <label className="block text-xl sm:text-2xl font-medium">Tell us about your project</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Your message..."
                            required
                            rows="6"
                            className="w-full bg-transparent border border-gray-300 rounded-2xl p-4 sm:p-5 md:p-6 text-base sm:text-lg md:text-xl placeholder-gray-400 outline-none focus:border-black transition-colors resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center gap-2 pl-6 pr-3 sm:pl-8 sm:pr-4 py-2 border border-black rounded-full text-base sm:text-lg font-bold uppercase hover:bg-black hover:text-white transition-all group w-full sm:w-auto justify-center sm:justify-start disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : 'Send'}
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                <ArrowUpRight size={20} />
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
