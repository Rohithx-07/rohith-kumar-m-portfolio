import { motion } from "framer-motion";
import { FaAward, FaTrophy, FaCertificate } from "react-icons/fa";

const achievements = [
    {
        title: "AI & Machine Learning Certification",
        issuer: "Coursera / DeepLearning.AI",
        date: "Dec 2024",
        icon: <FaCertificate className="text-green-400 text-3xl" />,
        description: "Completed comprehensive coursework in neural networks, deep learning, and practical ML applications.",
    },
    {
        title: "Full Stack Web Development",
        issuer: "Udemy Bootcamp",
        date: "Aug 2024",
        icon: <FaAward className="text-blue-400 text-3xl" />,
        description: "Built 15+ hands-on projects mastering React, Node.js, and MongoDB.",
    },
    {
        title: "Hackathon Winner - Smart Campus",
        issuer: "National Tech Fest",
        date: "Mar 2024",
        icon: <FaTrophy className="text-yellow-400 text-3xl" />,
        description: "Developed an IoT based smart parking solution, securing 1st place among 50+ teams.",
    },
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 relative">
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 blur-[120px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Achievements & <span className="text-primary">Certifications</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="glass p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform"
                        >
                            {/* Decorative background glow on hover */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                    {item.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-medium text-primary">{item.issuer}</span>
                                    <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">{item.date}</span>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
