import React from 'react';
import Hero from '../components/Hero';
import WorkHeader from '../components/WorkHeader';
import HorizontalPortfolio from '../components/HorizontalPortfolio';
// import SelectedWork from '../components/SelectedWork';
import Capabilities from '../components/Capabilities';
import Marquee from '../components/Marquee';
import Insights from '../components/Insights';
import ContactForm from '../components/ContactForm';
import { Reveal } from '../components/Reveal';
import Clients from '../components/Clients';

import PortfolioShowcase from '../components/PortfolioShowcase';

const Home = () => {
    return (
        <div className="bg-white">
            <Hero />
            <WorkHeader />
            <HorizontalPortfolio />
            <PortfolioShowcase />

            {/* <SelectedWork /> */}
            <Capabilities />
            <Reveal>
                {/* <Clients /> */}
            </Reveal>
            <Insights />

            {/* Secondary Video Section */}
            <Reveal>
                <section className="bg-black py-0">
                    <video width="100%" height="auto" controls autoPlay muted loop className="w-full">
                        <source src="/video.mp4" type="video/mp4" />
                    </video>
                </section>
            </Reveal>

            <ContactForm />
        </div>
    );
};

export default Home;
