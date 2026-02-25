import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const PROJECTS_DATA = [
    {
        title: 'Event Management',
        description: 'This project focuses on building a responsive and interactive website using modern web technologies such as HTML, CSS, and JavaScript. It involves front-end development and user interface design to efficiently handle and display dynamic content.',
        tags: ['HTML', 'CSS', 'JavaScript'],
    },
];

const Projects = () => {
    return (
        <section id="Projects" className="py-24 md:py-32 bg-[#f8f8f8] text-black px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Projects</h2>
                    <div className="h-1 w-24 bg-black mt-4"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
                    {PROJECTS_DATA.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#0a0a0a] text-white p-8 md:p-10 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-bold uppercase tracking-wider">{project.title}</h3>
                                </div>

                                <p className="text-[#888888] font-light leading-relaxed mb-8">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono uppercase tracking-widest border border-[#333] px-3 py-1">
                                        {tag}
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

export default Projects;
