import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10 bg-darker">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Raghu D. All rights reserved.
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400">
                    Built with <FaHeart className="text-red-500" /> using React & Tailwind
                </div>
            </div>
        </footer>
    );
};

export default Footer;
