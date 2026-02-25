import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const About = () => {
    return (
        <section id="About" className="py-24 md:py-32 bg-white text-black px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">About</h2>
                    <div className="h-1 w-24 bg-black mt-4"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full md:w-1/2"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-wide">
                            Rohith Kumar M
                        </h3>

                        <h3 className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-wide">
                            Software Engineer
                        </h3>
                        <p className="text-lg text-gray-700 font-light leading-relaxed mb-6">
                            Motivated Computer Science Engineering student with strong analytical and problem-solving skills. Passionate about software development, emerging technologies, and building scalable real-world applications.
                        </p>
                        <p className="text-lg text-gray-700 font-light leading-relaxed mb-8">
                            Experienced in developing hands-on projects through collaborative teamwork. Quick learner with a proactive mindset and commitment to continuous improvement.
                        </p>

                        <div className="flex space-x-6 mt-6">
                            <a href="https://www.linkedin.com/in/rohith-kumar-m-a043ab2a3/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">
                                <FiLinkedin size={24} />
                            </a>
                            <a href="https://github.com/Rohithx-07/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">
                                <FiGithub size={24} />
                            </a>
                            <a href="mailto:rohithkumarm2006@gmail.com" className="text-black hover:text-gray-600 transition-colors">
                                <FiMail size={24} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="w-full md:w-1/2 flex justify-center md:justify-end"
                    >
                        <div className="relative w-full max-w-md aspect-[4/5] bg-[#0a0a0a] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                            {/* Optional Placeholder Image until user provides one */}
                            <div className="absolute inset-0 flex items-center justify-center border-4 border-black p-2">
                                <div className="w-full h-full bg-[#1a1a1a] flex flex-col justify-end p-8">
                                    <p className="text-[#888888] text-xs uppercase tracking-widest mb-2">IMAGE_SRC_MISSING</p>
                                    <p className="text-white text-2xl font-bold uppercase truncate">Rohith_Kumar_M.JPG</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
