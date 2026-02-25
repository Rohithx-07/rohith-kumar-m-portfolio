import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const NAV_LINKS = [
    'About', 'Work', 'Skills', 'XP', 'Contact'
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a] py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <div className="text-2xl font-bold tracking-widest text-white uppercase">
                    <Link to="Home" smooth={true} duration={500} className="cursor-pointer">
                        Rohith Kumar M
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link}
                            to={link}
                            smooth={true}
                            duration={500}
                            className="text-sm uppercase tracking-widest text-[#f8f8f8] hover:text-[#888888] transition-colors cursor-pointer"
                        >
                            {link}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0a0a0a] w-full absolute top-full left-0 py-4 flex flex-col items-center shadow-xl">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link}
                            to={link}
                            smooth={true}
                            duration={500}
                            onClick={() => setIsOpen(false)}
                            className="py-3 text-sm uppercase tracking-widest text-white w-full text-center hover:bg-[#1a1a1a] transition-colors"
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
