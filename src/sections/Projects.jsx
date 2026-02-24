import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Event Management",
        description: "This project focuses on building a responsive and interactive website using modern web technologies such as HTML, CSS, and JavaScript. It involves front-end development and user interface design to efficiently handle and display dynamic content.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "#",
        live: "#",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="glass rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
                        >
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-semibold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((techItem, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-primary font-medium"
                                        >
                                            {techItem}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                                    >
                                        <FaGithub size={18} />
                                        Code
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-colors"
                                        >
                                            <FaExternalLinkAlt size={16} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
