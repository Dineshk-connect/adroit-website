import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

export const Services = () => {
  const services = [
    {
      id: "contract-staffing",
      title: "Contract Staffing",
      description:
        "Adroit provides contractual manpower solutions based on client-specific workforce requirements. We help organizations quickly deploy skilled candidates for short-term projects, seasonal demands, and operational support.",
      features: [
        "Quick deployment of trained manpower",
        "Reduced HR and administrative workload",
        "Complete statutory compliance handling",
        "Option to convert contract staff to permanent",
      ],
      image:
        "https://images.unsplash.com/photo-1690356107486-0796de806f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      reverse: false,
    },
    {
      id: "permanent-recruitment",
      title: "Permanent Recruitment",
      description:
        "We assist companies in hiring the right candidates for long-term roles by understanding job requirements, company culture, and operational goals. Our screening process ensures quality and reliability.",
      features: [
        "Detailed candidate screening and verification",
        "Industry-specific sourcing",
        "Pre & post-employment verification",
        "Reduced hiring time and effort",
      ],
      image:
        "https://images.unsplash.com/photo-1549923746-9507eec27243?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      reverse: true,
    },
    {
      id: "apprenticeship",
      title: "Apprenticeship Programs (NAPS, NATS & B.Voc)",
      description:
        "Adroit actively participates in government-recognized apprenticeship and skill development programs such as NAPS, NATS, and B.Voc. We help companies build a skilled workforce while enabling students to learn and earn.",
      features: [
        "Implementation of NAPS & NATS programs",
        "Skill-based training and certification",
        "Government benefit and subsidy assistance",
        "On-job training across multiple industry sectors",
      ],
      image:
        "https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      reverse: false,
    },
    {
      id: "payroll",
      title: "Payroll & Statutory Compliance",
      description:
        "We manage complete payroll processing and statutory compliance including PF, ESI, PT, and labor law requirements. Our services ensure accuracy, transparency, and risk-free workforce management.",
      features: [
        "Accurate salary processing",
        "PF, ESI, PT and labor law compliance",
        "Documentation and reporting",
        "Continuous support for workforce management",
      ],
      image:
        "https://images.unsplash.com/photo-1765438863717-49fca900f861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      reverse: true,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Banner */}
      <section className="bg-slate-900 py-20 text-center text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive staffing, training, and compliance solutions tailored
            to your workforce requirements.
          </p>
        </div>
      </section>
    
      {/* Services List */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                service.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-xl w-full object-cover h-[400px] hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  {service.title}
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-slate-700 font-medium"
                    >
                      <CheckCircle
                        className="text-blue-600 flex-shrink-0"
                        size={20}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-900 font-bold hover:text-blue-700 group"
                >
                  Request Service{" "}
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Strip */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-2">
              Need a customized solution?
            </h3>
            <p className="text-blue-100">
              Talk to our experts to design a staffing plan that fits your
              budget and goals.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors shadow-lg whitespace-nowrap"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};
