import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative bg-dark/50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                        I'm currently looking for new opportunities and collaborations.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        <div className="glass p-8 rounded-2xl flex flex-col gap-6">
                            <h3 className="text-2xl font-semibold text-white mb-2">Contact Information</h3>

                            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl text-primary text-xl">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email Me At</p>
                                    <a href="mailto:rohithkumarm2006@gmail.com" className="font-medium text-lg">
                                        rohithkumarm2006@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl text-accent text-xl">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-medium text-lg">Chennai, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-8 rounded-2xl h-full flex flex-col">
                            <h3 className="text-2xl font-semibold text-white mb-6">Social Profiles</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/in/rohith-kumar-m-a043ab2a3/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl text-gray-400 hover:text-blue-500 hover:bg-blue-500/10 hover:scale-110 transition-all text-2xl"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="https://github.com/Rohithx-07/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all text-2xl"
                                >
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
