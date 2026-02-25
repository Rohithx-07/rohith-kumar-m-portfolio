import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCE_DATA = [
    {
        company: 'CODEBIND TECHNOLOGIES',
        role: 'Web Development - Intern',
        duration: 'December 2024',
        responsibilities: [
            'Developed hands-on expertise in front-end web development by contributing to live project tasks.',
            'Built and optimized responsive user interfaces using HTML, CSS, and JavaScript.',
            'Gained solid exposure to Full-Stack Development methodologies and collaborative workflows within software development teams.'
        ]
    },
    {
        company: 'Top Tech Developers',
        role: 'Data Science - Intern',
        duration: 'July 2025 - Sept 2025',
        responsibilities: [
            'Aspiring Data Science enthusiast with strong analytical and problem-solving skills, proficient in Python, data analysis, and foundational machine learning techniques to extract meaningful insights from data.',
            'Passionate about applying data-driven solutions to real-world problems, continuously learning and staying updated with emerging trends in Data Science and Artificial Intelligence.',
        ]
    }
];

const Experience = () => {
    return (
        <section id="Experience" className="py-24 md:py-32 bg-white text-black px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Experience</h2>
                    <div className="h-1 w-24 bg-black mt-4"></div>
                </motion.div>

                <div className="relative border-l-2 border-black ml-4 md:ml-0 pl-8 md:pl-12 py-4">
                    {EXPERIENCE_DATA.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="mb-16 last:mb-0 relative"
                        >
                            <div className="absolute -left-[42px] md:-left-[58px] top-1 w-4 h-4 bg-white border-4 border-black box-content z-10"></div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold uppercase tracking-wider">{job.role}</h3>
                                    <p className="text-[#555] font-semibold uppercase tracking-widest text-sm mt-1">{job.company}</p>
                                </div>
                                <div className="mt-2 md:mt-0 bg-[#0a0a0a] text-white px-4 py-1 text-xs font-mono tracking-widest inline-block border border-black">
                                    {job.duration}
                                </div>
                            </div>

                            <ul className="list-none space-y-3 mt-6">
                                {job.responsibilities.map((resp, i) => (
                                    <li key={i} className="text-gray-700 font-light text-base md:text-lg leading-relaxed relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-[1px] before:bg-black">
                                        {resp}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
