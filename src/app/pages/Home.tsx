import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  Users,
  Briefcase,
  GraduationCap,
  Calculator,
  CheckCircle,
  Quote,
} from "lucide-react";

export const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Empowering Workforce Growth with{" "}
                <span className="text-blue-900">Skilled & Reliable Talent</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
                Adroit Staffing Solutions provides contractual staffing,
                permanent recruitment, apprenticeship programs, and payroll
                compliance services to help organizations build a dependable and
                job-ready workforce.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex justify-center items-center px-8 py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20"
                >
                  Get a Quote
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex justify-center items-center px-8 py-4 bg-white text-blue-900 font-bold border-2 border-blue-900 rounded-lg hover:bg-blue-50 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
              <img
                src="https://images.unsplash.com/photo-1758691737182-d42aefd6dee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjB0ZWFtJTIwYmx1ZSUyMHdoaXRlJTIwdGhlbWV8ZW58MXx8fHwxNzcwMDM5NzczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Corporate Team"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Trusted Partner</p>
                    <p className="text-sm text-slate-500">For 500+ Companies</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhhbmRzaGFrZSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcwMDM5NzczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional Handshake"
                className="rounded-2xl shadow-xl w-full object-cover h-[450px]"
              />
              <div className="absolute top-10 -left-10 w-24 h-24 bg-dots-pattern opacity-20 hidden lg:block"></div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
                About Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Bridging the Gap Between Talent and Opportunity
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Adroit Staffing Solutions is a Bengaluru-based HR outsourcing
                company offering manpower solutions based on client
                requirements. We specialize in temporary staffing, one-time
                sourcing, payroll management, statutory compliance, and
                employment verification.
              </p>

              <p className="text-slate-600 mb-8 leading-relaxed">
                We also promote government-recognized skill development
                initiatives such as NAPS, NATS, and B.Voc programs, helping
                companies create a trained workforce while enabling candidates
                to learn and earn.
              </p>

              <Link
                to="/about"
                className="text-blue-900 font-bold hover:text-blue-700 inline-flex items-center group"
              >
                Learn More About Us
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
              Our Expertise
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Staffing Services
            </h2>
            <p className="text-slate-600">
             Our services are designed to support organizations with end-to-end staffing, training, and compliance solutions across multiple industry sectors.

            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-900 mb-6 group-hover:scale-110 transition-transform">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Contract Staffing
              </h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                Flexible staffing solutions to meet seasonal demands and
                project-based requirements.
              </p>
              <Link
                to="/services"
                className="text-blue-600 font-semibold text-sm hover:text-blue-800 flex items-center"
              >
                Read More <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-900 mb-6 group-hover:scale-110 transition-transform">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Permanent Recruitment
              </h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                Finding the perfect long-term fit for your organization's
                culture and goals.
              </p>
              <Link
                to="/services"
                className="text-blue-600 font-semibold text-sm hover:text-blue-800 flex items-center"
              >
                Read More <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-900 mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Apprenticeship Programs
              </h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                NAPS and NATS implementation to skill the youth and build your
                future workforce.
              </p>
              <Link
                to="/services"
                className="text-blue-600 font-semibold text-sm hover:text-blue-800 flex items-center"
              >
                Read More <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-900 mb-6 group-hover:scale-110 transition-transform">
                <Calculator size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Payroll & Compliance
              </h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                End-to-end payroll management and statutory compliance
                assurance.
              </p>
              <Link
                to="/services"
                className="text-blue-600 font-semibold text-sm hover:text-blue-800 flex items-center"
              >
                Read More <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm mb-2 block">
              Process
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-blue-200">
              Our streamlined process ensures efficient and effective results
              for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto bg-blue-700 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-blue-500 mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-blue-200 text-sm">
                We understand your manpower requirement and workforce challenges.

              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto bg-blue-700 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-blue-500 mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Sourcing</h3>
              <p className="text-blue-200 text-sm">
                We source candidates from our database and apprenticeship programs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto bg-blue-700 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-blue-500 mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Screening</h3>
              <p className="text-blue-200 text-sm">
               Candidates undergo screening, verification, and skill evaluation.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto bg-white text-blue-900 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-blue-200 mb-6">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Placement</h3>
              <p className="text-blue-200 text-sm">
                Deployment, onboarding, payroll management, and continuous support.
              </p>
            </div>

            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-blue-700 -z-0 transform translate-y-1/2"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
              Testimonials
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
              <Quote
                className="absolute top-8 right-8 text-blue-100"
                size={48}
              />
              <p className="text-slate-600 mb-6 italic relative z-10">
                "Adroit Staffing Solutions has been instrumental in helping us
                scale our workforce during peak seasons. Their candidate quality
                and turnaround time are unmatched."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-300 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Client"
                  />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Rajesh Kumar</p>
                  <p className="text-sm text-slate-500">
                    HR Director, TechFlow Systems
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
              <Quote
                className="absolute top-8 right-8 text-blue-100"
                size={48}
              />
              <p className="text-slate-600 mb-6 italic relative z-10">
                "Their understanding of NAPS compliance and execution is
                excellent. We've successfully trained over 100 apprentices
                through their program."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-300 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Client"
                  />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Anita Desai</p>
                  <p className="text-sm text-slate-500">
                    Operations Manager, Indus Manufacturing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
