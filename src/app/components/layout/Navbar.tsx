import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../../../assets/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Programs", path: "/programs" },
    { name: "Placements", path: "/placements" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 top-0 left-0 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-0 h-16 group">
            <img
              src={logo}
              alt="Adroit Staffing Solutions Logo"
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col justify-center leading-tight">
              <span className="text-xl font-bold text-slate-900">Adroit</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                Staffing Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-900 bg-blue-50"
                      : "text-slate-600 hover:text-blue-900 hover:bg-slate-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="bg-blue-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2"
            >
              Get Quote
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-900 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-base font-medium ${
                      isActive
                        ? "text-blue-900 bg-blue-50"
                        : "text-slate-600 hover:text-blue-900 hover:bg-slate-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-blue-900 text-white px-5 py-3 rounded-lg text-base font-semibold hover:bg-blue-800 transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
