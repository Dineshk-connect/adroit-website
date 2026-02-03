import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import logo from "../../../assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-3 mb-6 h-14">
                <img
                  src={logo}
                  alt="Adroit Staffing Solutions Logo"
                  className="h-10 w-auto object-contain"
                />

                <div className="flex flex-col justify-center leading-tight">
                  <span className="text-xl font-bold text-white">Adroit</span>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                    Staffing Solutions
                  </span>
                </div>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Authorized implementation partner for Government apprenticeship
              programs including NAPS, NATS, and B.Voc, enabling organizations
              to build skilled workforce through structured training and
              compliance-driven staffing solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight size={16} className="text-blue-600" /> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight size={16} className="text-blue-600" /> Staffing
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight size={16} className="text-blue-600" />{" "}
                  Apprenticeship Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/placements"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight size={16} className="text-blue-600" /> Placements
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight size={16} className="text-blue-600" /> Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Apprenticeship Program Implementation (NAPS / NATS)
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Corporate Staffing Solutions
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Payroll & Statutory Compliance
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Skill Development & Training
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                HR & Workforce Consulting
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-600 shrink-0 mt-1" />
                <span>
                  SLN Building, 11/6, 2nd Floor, Iggaluru Village, Chandapura –
                  Anekal Road, Bengaluru, Karnataka 560099, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-600 shrink-0" />
                <span>+91 81500 01116</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-600 shrink-0" />
                <span>info@adroitss.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Adroit Staffing Solutions Pvt. Ltd. |
            Government Apprenticeship Program Partner. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
