"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-80 backdrop-blur-md text-blue-600 py-4 shadow-md fixed w-full top-0 z-50 border-b border-blue-300">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-blue-700 tracking-wide">
          SHT
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Donate", path: "/donate" },
            { name: "Gallery", path: "/gallery" },
            // { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <li key={name}>
              <Link
                href={path}
                className="relative text-lg font-medium transition duration-300 hover:text-blue-800"
              >
                {name}
                {/* Underline effect */}
                <motion.div
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-transform origin-left"
                  whileHover={{ scaleX: 1 }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-blue-700 text-3xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white bg-opacity-90 backdrop-blur-md text-blue-700 absolute top-full left-0 w-full py-4 shadow-lg border-t border-blue-300"
        >
          <ul className="flex flex-col items-center space-y-4">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Donate", path: "/donate" },
              { name: "Gallery", path: "/gallery" },
              // { name: "Contact", path: "/contact" },
            ].map(({ name, path }) => (
              <li key={name}>
                <Link
                  href={path}
                  className="text-lg font-medium transition duration-300 hover:text-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;