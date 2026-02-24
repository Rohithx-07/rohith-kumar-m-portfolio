import { motion } from "framer-motion";

const experiences = [
    {
        title: "Software Engineering Intern",
        company: "Tech Solutions Inc.",
        duration: "June 2024 - Present",
        responsibilities: [
            "Assisted in developing and maintaining RESTful APIs using Node.js and Express.",
            "Collaborated with the frontend team to integrate APIs with React applications.",
            "Participated in agile ceremonies and code reviews to ensure code quality.",
        ],
    },
    {
        title: "Web Development Intern",
        company: "Startup Hub",
        duration: "Jan 2024 - May 2024",
        responsibilities: [
            "Built responsive landing pages and user interfaces using HTML, CSS, and React.",
            "Optimized website performance, improving load times by 20%.",
            "Worked closely with designers to implement pixel-perfect UI designs.",
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative bg-dark/50">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Experience & <span className="text-primary">Internships</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-600 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            {/* Timeline dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-darker bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                                ⭐
                            </div>

                            {/* Content card */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl hover:-translate-y-1 transition-transform border border-white/5"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-xl font-bold text-white">
                                        {exp.title}
                                    </h3>
                                    <span className="text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
                                        {exp.duration}
                                    </span>
                                </div>
                                <h4 className="text-lg text-gray-400 font-medium mb-4">
                                    {exp.company}
                                </h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="leading-relaxed">
                                            {resp}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
