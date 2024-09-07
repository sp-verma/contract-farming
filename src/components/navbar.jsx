"use client";
import { motion } from 'framer-motion';
import { FaHome, FaInfo, FaEnvelope, FaStore, FaUserTie, FaTractor } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 shadow-md sticky top-0 z-50 text-black">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo with animation */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-white"
        >
          MyLogo
        </motion.div>

        {/* Links with icons and animation */}
        <div className="space-x-6 flex items-center">
          <motion.a
            href="/"
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2 text-white"
          >
            <FaHome />
            <span>Home</span>
          </motion.a>
          <motion.a
            href="marketplace"
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2 text-white"
          >
            <FaStore />
            <span>Marketplace</span>
          </motion.a>
          <motion.a
            href="farmer"
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2 text-white"
          >
            <FaTractor />
            <span>Farmer</span>
          </motion.a>
          <motion.a
            href="contractor"
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2 text-white"
          >
            <FaUserTie />
            <span>Contractor</span>
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2 text-white"
          >
            <FaInfo />
            <span>About</span>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2 text-white"
          >
            <FaEnvelope />
            <span>Contact</span>
          </motion.a>
        </div>

        {/* Sign In and Login buttons */}
        <div className="space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-black py-2 px-4 rounded shadow-md hover:bg-gray-100"
          >
            Sign In
          </motion.button>
          <motion.a

          href="login"
            whileHover={{ scale: 1.05 }}
            className="bg-white text-black py-2 px-4 rounded shadow-md hover:bg-gray-100"
          >
            Login
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
