import React from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  CheckCircle,
  Award,
  Globe,
  Zap,
} from "lucide-react";

export const About = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Page Banner */}
      <section className="bg-blue-900 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Your trusted partner in workforce solutions, committed to excellence
            and integrity.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
                Who We Are
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Driving Business Success Through People
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Adroit Staffing Solutions Pvt Ltd is a Bengaluru-based HR
                outsourcing company specializing in providing reliable manpower
                solutions to organizations based on their exact workforce
                requirements. We offer both contractual and permanent staffing
                services across multiple industry sectors with a strong focus on
                quality, compliance, and efficiency.
              </p>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Our expertise includes temporary staffing, one-time sourcing,
                payroll management, statutory compliance, and pre &
                post-employment verification. In addition, we actively promote
                skill development through government-recognized apprenticeship
                programs such as NAPS, NATS, and B.Voc, enabling businesses to
                build a skilled and job-ready workforce.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-3xl font-bold text-blue-900">500+</h3>
                  <p className="text-slate-500">Clients Served</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-900">10k+</h3>
                  <p className="text-slate-500">Candidates Placed</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-900">50+</h3>
                  <p className="text-slate-500">Cities Covered</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-900">100%</h3>
                  <p className="text-slate-500">Compliance</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1758520144661-73849bde0da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcHJvZmVzc2lvbmFsJTIwdGVhbSUyMGhhcHB5JTIwb2ZmaWNlfGVufDF8fHx8MTc3MDAzOTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our Team"
                className="rounded-2xl shadow-xl w-full object-cover h-[600px]"
              />
              <div className="absolute -bottom-10 -right-10 bg-blue-600 p-8 rounded-2xl shadow-xl hidden lg:block max-w-xs text-white">
                <p className="font-bold text-lg mb-2">
                  "Empowering businesses with the right people and empowering people with the right opportunities."

                </p>
                <p className="opacity-80 text-sm">- CEO, Adroit Staffing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-600 hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our mission is to redefine recruitment standards by delivering
                efficient, reliable, and scalable staffing solutions. We believe
                people are our business, and we strive to meet the expectations
                of our clients, candidates, service providers, and employees
                through excellence in execution.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-900 hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-900 mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our vision is to offer unique and flexible HR solutions that
                consistently meet client expectations in terms of quality, cost,
                performance, and reliability while contributing to India’s skill
                development and employment growth.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-600 hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Values
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-blue-500" /> Integrity
                  & Transparency
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-blue-500" /> Customer
                  Centricity
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-blue-500" /> Excellence
                  in Delivery
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-blue-500" /> Continuous
                  Innovation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
              Our Advantage
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Adroit?
            </h2>
            <p className="text-slate-600">
              We combine industry expertise, government-recognized training
              programs, and end-to-end workforce management to deliver
              dependable staffing solutions that help businesses grow faster.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-blue-900 mb-4">
                <Award size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Industry Expertise</h4>
              <p className="text-slate-600 text-sm">
                Deep understanding of diverse industry verticals.
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-blue-900 mb-4">
                <Globe size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Pan-India Presence</h4>
              <p className="text-slate-600 text-sm">
                Serving clients across multiple locations efficiently.
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-blue-900 mb-4">
                <Zap size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Quick Turnaround</h4>
              <p className="text-slate-600 text-sm">
                Rapid deployment of skilled resources.
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-blue-900 mb-4">
                <CheckCircle size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">100% Compliance</h4>
              <p className="text-slate-600 text-sm">
                Strict adherence to all labor laws and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Partner with us today and experience the difference of professional
            staffing solutions.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};
