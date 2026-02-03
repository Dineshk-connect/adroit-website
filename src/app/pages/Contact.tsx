import React from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
 const onSubmit = async (data: any) => {
  try {
    await fetch("https://adroit-backend.onrender.com/enquiry",
 {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    alert("Thank you! Your enquiry has been submitted.");
    reset();   // clears the form
  } catch (error) {
    alert("Something went wrong!");
  }
};


  return (
    <div className="flex flex-col w-full">
      {/* Page Banner */}
      <section className="bg-blue-900 py-20 text-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Get in Touch With Us
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Connect with our team for apprenticeship partnerships, program
            onboarding, or any assistance regarding NAPS, NATS, and B.Voc
            initiatives.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 mx-auto mb-6">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
              <p className="text-slate-600">+91 89042 48937</p>
              <p className="text-slate-600">+91 81500 01116</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 mx-auto mb-6">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600">info@adroitss.com</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 mx-auto mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Office</h3>
              <p className="text-slate-600">
                SLN Bulding, 11/6, 2nd floor Iggaluru Village, Chandapura-
                Anekal Rd.
              </p>
              <p className="text-slate-600">
                Banglore, Karnataka 560099, India
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Contact Form */}
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Send Us Your Requirement
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      First Name
                    </label>
                    <input
                      {...register("firstName", { required: true })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your first name
"
                    />
                    {errors.firstName && (
                      <span className="text-red-500 text-xs mt-1">
                        Required
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name
                    </label>
                    <input
                      {...register("lastName", { required: true })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your last name
"
                    />
                    {errors.lastName && (
                      <span className="text-red-500 text-xs mt-1">
                        Required
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your official email address
"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs mt-1">
                      Valid email required
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    {...register("phone", { required: true })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your contact number
"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs mt-1">Required</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Briefly describe your requirement (Apprenticeship, Hiring, Partnership, Training, etc.)
"
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500 text-xs mt-1">Required</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  Submit Requirement
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* Google Map */}
            <div className="h-full min-h-[400px] w-full bg-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.738974438978!2d77.70372327454393!3d12.795447918716935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ca82f115c85%3A0x8c05254d20708ded!2sAdroit%20Staffing%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1770055764703!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Corporate Office Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
