import React from 'react';
import { motion } from 'framer-motion';

const EDUCATION_DATA = [
    {
        degree: 'Bachelor of Engineering in Computer Science',
        college: 'Panimalar Engineering College',
        year: '2023 - 2027',
        gpa: '7.8 / 10.0',
    },

];

const Education = () => {
    return (
        <section id="Education" className="py-24 md:py-32 bg-[#0a0a0a] text-white px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24 text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Education</h2>
                    <div className="h-1 w-24 bg-white mt-4 mr-auto"></div>
                </motion.div>

                <div className="flex flex-col">
                    {EDUCATION_DATA.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`py-8 ${index !== EDUCATION_DATA.length - 1 ? 'border-b border-[#333]' : ''} flex flex-col md:flex-row md:items-baseline justify-between hover:bg-[#111] transition-colors p-4 -mx-4 group`}
                        >
                            <div className="mb-4 md:mb-0 md:w-2/3">
                                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-[#f8f8f8] mb-2 group-hover:text-white transition-colors">
                                    {item.degree}
                                </h3>
                                <p className="text-[#888888] uppercase tracking-wide text-sm font-semibold">
                                    {item.college}
                                </p>
                            </div>

                            <div className="md:w-1/3 md:text-right flex flex-col md:items-end">
                                <span className="text-white font-mono text-lg border border-[#333] px-4 py-1 inline-block mb-2 group-hover:border-white transition-colors">
                                    {item.year}
                                </span>
                                {item.gpa && (
                                    <span className="text-[#888888] text-sm uppercase tracking-widest">
                                        GPA: {item.gpa}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
