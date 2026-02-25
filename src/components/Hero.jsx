import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

/* =========================================================
   TICKER
   ========================================================= */
const Ticker = () => {
    const items = [
        'React', 'Node.js', 'TypeScript', 'Python', 'MongoDB',
        'AWS', 'Three.js', 'Docker', 'PostgreSQL', 'Redis',
        'GraphQL', 'Next.js', 'Tailwind', 'Prisma', 'Figma'
    ];
    const doubled = [...items, ...items];

    return (
        <div className="ticker border-t border-b border-[#222]">
            <div className="ticker-track">
                {doubled.map((item, i) => (
                    <span key={i} className="ticker-item">
                        {item}<span className="ticker-sep">&#x2014;</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

const Hero = () => {
    return (
        <section id="Home" className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full z-10 flex flex-col items-start mt-20">

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[#888888] text-sm md:text-base tracking-widest uppercase mb-4"
                >
                    System Initialized // Rohith Kumar M
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6 max-w-5xl"
                >
                    Engineering <br /> Software <br /> <span className="text-white">With Intent.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-[#f8f8f8] font-light tracking-wide mb-10 border-l-2 border-white pl-4"
                >
                    Software Engineer
                    <br /> Building Scalable and Efficient Software Solutions
                    <br /> Full Stack Developer
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
                >
                    <Link
                        to="Projects"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer border border-white bg-white text-black px-8 py-4 uppercase text-sm font-bold tracking-widest hover:bg-transparent hover:text-white transition-all duration-300 text-center"
                    >
                        View Projects
                    </Link>
                </motion.div>

            </div>

            {/* Subtle aesthetic background grid/lines */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

            <Ticker />
        </section>
    );
};

export default Hero;
