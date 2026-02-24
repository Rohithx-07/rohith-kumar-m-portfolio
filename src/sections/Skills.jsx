import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaTools, FaBrain } from "react-icons/fa";

const skillCategories = [
    {
        title: "Programming",
        icon: <FaCode className="text-blue-400" />,
        skills: [
            { name: "Java", level: 90 },
            { name: "Python", level: 85 },
            { name: "C++", level: 80 },
        ],
    },
    {
        title: "Web Development",
        icon: <FaLaptopCode className="text-green-400" />,
        skills: [
            { name: "React / Vite", level: 85 },
            { name: "JavaScript", level: 90 },
            { name: "HTML & CSS", level: 95 },
        ],
    },
    {
        title: "Tools & Tech",
        icon: <FaTools className="text-orange-400" />,
        skills: [
            { name: "Git & GitHub", level: 85 },
            { name: "VS Code", level: 95 },
            { name: "Linux / Bash", level: 75 },
        ],
    },
    {
        title: "Core / AI Concepts",
        icon: <FaBrain className="text-purple-400" />,
        skills: [
            { name: "Machine Learning Concepts", level: 70 },
            { name: "Data Structures", level: 85 },
            { name: "DBMS / SQL", level: 80 },
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-dark/50 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Technical <span className="text-primary">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors group"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="text-2xl bg-white/5 p-3 rounded-xl group-hover:scale-110 transition-transform">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-gray-500">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.3 }}
                                                className="bg-gradient-to-r from-primary to-accent h-1.5 rounded-full"
                                            ></motion.div>
                                        </div>
                                    </div>
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
