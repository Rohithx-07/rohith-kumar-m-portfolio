import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
        >
            {/* Background Gradients */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10 animate-pulse delay-1000"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 text-center md:text-left"
                >
                    <h2 className="text-primary font-medium tracking-wide uppercase text-sm md:text-base">
                        Welcome to my portfolio
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Hi, I'm <span className="text-white text-glow">Raghu D</span>
                        <br />
                        <span className="text-gray-400 text-3xl md:text-5xl mt-2 block">
                            Software Engineer
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Motivated engineering student passionate about technology,
                        innovation, and building impactful AI & full-stack solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 bg-primary text-white font-medium rounded-full cursor-pointer hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
                        >
                            View Projects
                        </Link>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-full hover:bg-white/5 transition-all"
                        >
                            Download Resume
                        </a>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-6 pt-6">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors text-2xl"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-500 transition-colors text-2xl"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="mailto:contact@example.com"
                            className="text-gray-400 hover:text-primary transition-colors text-2xl"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <div className="relative">
                        {/* Glow effect behind image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-[40px] opacity-50"></div>

                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-dark overflow-hidden shadow-2xl z-10 bg-darker flex items-center justify-center">
                            {/* Fallback avatar if no image exists yet */}
                            <div className="text-6xl font-bold text-gray-700">RD</div>
                        </div>

                        {/* Orbital ring rings */}
                        <div className="absolute -inset-4 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute -inset-8 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
