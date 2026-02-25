import React from 'react';
import { Link } from 'react-scroll';
import { FiArrowUp, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-[#050505] text-[#888888] py-10 px-6 md:px-12 border-t border-[#1a1a1a]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">

                <div className="text-center md:text-left mb-6 md:mb-0">
                    <p className="text-sm tracking-widest uppercase font-semibold">
                        &copy; 2026 Rohith Kumar M.
                    </p>
                    <p className="text-xs mt-2 uppercase tracking-wide opacity-50">
                        Built with React + Vite | Styled with Tailwind CSS
                    </p>
                </div>

                <div className="flex space-x-8 mb-6 md:mb-0">
                    <a href="https://www.linkedin.com/in/rohith-kumar-m-a043ab2a3/" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-white transition-colors">
                        <FiLinkedin size={24} />
                    </a>
                    <a href="https://github.com/Rohithx-07/" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-white transition-colors">
                        <FiGithub size={24} />
                    </a>
                    <a href="mailto:rohithkumarm2006@gmail.com" className="text-[#888888] hover:text-white transition-colors">
                        <FiMail size={24} />
                    </a>
                </div>

                <Link
                    to="Home"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer flex items-center gap-2 uppercase text-xs tracking-widest hover:text-white transition-colors border border-[#333] px-6 py-3 hover:border-white"
                >
                    <span>Back to Top</span>
                    <FiArrowUp />
                </Link>

            </div>
        </footer>
    );
};

export default Footer;
