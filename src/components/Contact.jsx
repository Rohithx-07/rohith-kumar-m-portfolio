import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Contact = () => {
    return (
        <section id="Contact" className="py-24 md:py-32 bg-[#0a0a0a] text-white px-6 md:px-12 flex flex-col items-center">
            <div className="max-w-3xl mx-auto w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Contact</h2>
                    <div className="h-1 w-24 bg-white mt-4 mx-auto"></div>
                    <p className="mt-8 text-[#888888] text-lg font-light tracking-wide max-w-xl mx-auto">
                        I’d love to collaborate on impactful projects.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center space-x-8 mt-20"
                >
                    <a href="https://www.linkedin.com/in/rohith-kumar-m-a043ab2a3/" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-white transition-colors p-2 border border-transparent hover:border-white">
                        <FiLinkedin size={28} />
                    </a>
                    <a href="https://github.com/Rohithx-07/" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-white transition-colors p-2 border border-transparent hover:border-white">
                        <FiGithub size={28} />
                    </a>
                    <a href="mailto:rohithkumarm2006@gmail.com" className="text-[#888888] hover:text-white transition-colors p-2 border border-transparent hover:border-white">
                        <FiMail size={28} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
