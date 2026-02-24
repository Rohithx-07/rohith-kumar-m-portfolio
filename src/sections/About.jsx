import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass p-8 rounded-2xl relative overflow-hidden"
                    >
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/20 blur-[50px] rounded-full"></div>
                        <h3 className="text-2xl font-semibold mb-4 text-white">Career Profile</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            I am a dedicated and innovative engineering student with a strong foundation in modern web development, software engineering, and artificial intelligence. My goal is to leverage technology to build scalable, impactful, and user-centric solutions.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Equipped with a problem-solving mindset and continuous learning approach, I am actively seeking placement opportunities where I can contribute to dynamic teams and grow into a proficient Full Stack Developer or AI Engineer.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <div className="glass p-6 rounded-2xl border-l-4 border-l-primary flex items-start gap-4 hover:-translate-y-1 transition-transform">
                            <div className="bg-primary/20 p-3 rounded-lg text-primary text-xl">🎓</div>
                            <div>
                                <h4 className="text-xl font-medium text-white">B.E. in Computer Science</h4>
                                <p className="text-gray-400">XYZ College of Engineering</p>
                                <p className="text-sm text-gray-500 mt-1">2021 - 2025</p>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-2xl border-l-4 border-l-accent flex items-start gap-4 hover:-translate-y-1 transition-transform">
                            <div className="bg-accent/20 p-3 rounded-lg text-accent text-xl">💻</div>
                            <div>
                                <h4 className="text-xl font-medium text-white">High School</h4>
                                <p className="text-gray-400">ABC Senior Sec School</p>
                                <p className="text-sm text-gray-500 mt-1">Completed in 2021</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
