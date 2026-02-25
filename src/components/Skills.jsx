import React from 'react';
import { motion } from 'framer-motion';

const SKILLS_CATEGORIES = [
    {
        title: 'Programming',
        skills: ['Java', 'Python', 'C']
    },
    {
        title: 'Web Development',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
    },
    {
        title: 'Tools & Tech',
        skills: ['Git / GitHub', 'VS Code', 'Linux']
    },
];

const Skills = () => {
    return (
        <section id="Skills" className="py-24 md:py-32 bg-[#0a0a0a] text-white px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Skills</h2>
                    <div className="h-1 w-24 bg-white mt-4 mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {SKILLS_CATEGORIES.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="border border-[#333] p-8 hover:border-white transition-colors"
                        >
                            <h3 className="text-xl font-bold uppercase tracking-widest mb-8 pb-4 border-b border-[#333]">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#111] hover:bg-white hover:text-black transition-colors duration-300 text-sm font-semibold uppercase tracking-wider px-4 py-2 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
