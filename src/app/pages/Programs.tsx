import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Award,
  Briefcase,
  TrendingUp,
  Users,
  ShieldCheck,
} from "lucide-react";

export const Programs = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Page Banner */}
      <section className="bg-blue-900 py-20 text-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Government Apprenticeship & Skill Programs
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Official government-recognized programs designed to build
            industry-ready talent through structured apprenticeship and
            work-integrated learning.
          </p>
        </div>
      </section>

      {/* Programs Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* NAPS */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 p-8 flex flex-col justify-end">
                <BookOpen
                  className="text-white mb-4 opacity-80 group-hover:scale-110 transition-transform"
                  size={40}
                />
                <h3 className="text-2xl font-bold text-white">NAPS</h3>
                <p className="text-blue-100 text-sm">
                  National Apprenticeship Promotion Scheme
                </p>
              </div>
              <div className="p-8">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  A flagship Government of India initiative that enables
                  organizations to engage apprentices with financial stipend
                  support, structured on-job training, and nationally recognized
                  skill certification.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 shrink-0"></span>
                    Government stipend support
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 shrink-0"></span>
                    CSR benefit for companies
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 shrink-0"></span>
                    Structured on-job training
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 shrink-0"></span>
                    Skill certification after completion
                  </li>
                </ul>
              </div>
            </div>

            {/* NATS */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 flex flex-col justify-end">
                <Award
                  className="text-white mb-4 opacity-80 group-hover:scale-110 transition-transform"
                  size={40}
                />
                <h3 className="text-2xl font-bold text-white">NATS</h3>
                <p className="text-indigo-100 text-sm">
                  National Apprenticeship Training Scheme
                </p>
              </div>
              <div className="p-8">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  A one-year apprenticeship program for technically qualified
                  graduates and diploma holders to gain real industry exposure
                  and hands-on experience.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 shrink-0"></span>
                    For Engineering & Diploma graduates
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 shrink-0"></span>
                    Industry-oriented practical training
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 shrink-0"></span>
                    Bridge between academics and industry
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 shrink-0"></span>
                    Government issued Certificate of Proficiency
                  </li>
                </ul>
              </div>
            </div>

            {/* B.Voc */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-900 p-8 flex flex-col justify-end">
                <Briefcase
                  className="text-white mb-4 opacity-80 group-hover:scale-110 transition-transform"
                  size={40}
                />
                <h3 className="text-2xl font-bold text-white">B.Voc</h3>
                <p className="text-slate-300 text-sm">Bachelor of Vocation</p>
              </div>
              <div className="p-8">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  A UGC-recognized work-integrated degree program where students
                  earn while they learn through continuous industry engagement
                  and practical training.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 shrink-0"></span>
                    UGC recognized degree program
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 shrink-0"></span>
                    Earn while you learn model
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 shrink-0"></span>
                    Continuous on-job practical training
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 shrink-0"></span>
                    High employee retention for companies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why Organizations Choose These Programs
            </h2>
            <p className="text-slate-600">
             Designed to reduce costs, build skilled talent pipelines, and ensure full compliance with apprenticeship regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg text-green-600 shrink-0">
                <TrendingUp size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">
                  Cost Effective
                </h4>
                <p className="text-sm text-slate-600">
                  Save significantly on workforce costs with government stipend reimbursements and training support.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600 shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">
                  Talent Pipeline
                </h4>
                <p className="text-sm text-slate-600">
                  Build a reliable pipeline of skilled professionals trained specifically for your organizational needs.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-lg text-orange-600 shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">
                  Compliance Safe
                </h4>
                <p className="text-sm text-slate-600">
                  Operate fully in compliance with the Apprenticeship Act and government apprenticeship guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Start Building Your Skilled Workforce Today
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
             From apprentice onboarding to documentation and compliance — we manage everything while you focus on developing talent.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
