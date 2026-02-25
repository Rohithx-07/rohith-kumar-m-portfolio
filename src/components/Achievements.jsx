import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCode, FiTrendingUp } from 'react-icons/fi';

const ACHIEVEMENTS_DATA = [
    {
        title: 'Acquiring Data',
        description: 'Achieved Gold Level Certification in Acquiring Data through FutureSkills Prime, an initiative by NASSCOM and the Government of India.',
        icon: <FiTrendingUp size={32} />
    },
    {
        title: 'CodeBind Technologies',
        description: 'Web Development - Intern.',
        icon: <FiCode size={32} />
    },
    {
        title: 'Top Tech Developers',
        description: 'Data Science - Intern.',
        icon: <FiAward size={32} />
    },
    {
        title: 'UI Path Certification',
        description: 'UI Path Certification in Automation Testing.',
        icon: <FiAward size={32} />
    }
];

const Achievements = () => {
    return (
        <section id="Achievements" className="py-24 md:py-32 bg-[#f8f8f8] text-black px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:items-end"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter w-full md:text-right">Milestones</h2>
                    <div className="h-1 w-24 bg-black mt-4"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {ACHIEVEMENTS_DATA.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-white p-8 md:p-10 border border-[#e0e0e0] hover:border-black transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-start"
                        >
                            <div className="p-4 bg-[#0a0a0a] text-white mb-8">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-wider mb-4 leading-snug">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 font-light leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
