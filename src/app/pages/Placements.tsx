import React from 'react';
import { Building2, UserCheck, Star } from 'lucide-react';

export const Placements = () => {
  // Mock client logos
  const clients = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    name: `Client ${i + 1}`,
    logo: `https://via.placeholder.com/150x80?text=Client+Logo+${i + 1}`
  }));

  const successStories = [
    {
      id: 1,
      name: 'Ravi Sharma',
      role: 'Mechanical Engineer',
      company: 'AutoCorp Ind',
      quote: 'Adroit helped me secure a position at a leading automobile giant. The NATS program bridged the gap between my degree and industry requirements.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'HR Executive',
      company: 'Tech Solutions',
      quote: 'The recruitment process was smooth and transparent. I am grateful for the guidance provided by the Adroit team throughout the interview process.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'Amit Singh',
      role: 'Machine Operator',
      company: 'SteelWorks Ltd',
      quote: 'I started as an apprentice and now I am a permanent employee. This program changed my life and gave me a secure career.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Banner */}
      <section className="bg-slate-50 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Impact</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Placements & Partners</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Connecting talent with top-tier organizations across industries.
          </p>
        </div>
      </section>

      {/* Client Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Esteemed Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70">
            {clients.map((client) => (
              <div key={client.id} className="bg-white border border-slate-100 p-4 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow hover:opacity-100 grayscale hover:grayscale-0">
                 <Building2 className="text-slate-300 w-full h-12" />
                 {/* Replaced placeholder image with icon for cleaner look if images fail, but structure remains */}
                 {/* <img src={client.logo} alt={client.name} className="max-h-12 w-auto" /> */}
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 mt-12">
            And 500+ other companies trust us with their workforce needs.
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="bg-blue-800 p-8 rounded-2xl relative">
                <div className="absolute -top-6 left-8">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full border-4 border-blue-900 object-cover"
                  />
                </div>
                <div className="mt-8">
                   <div className="flex gap-1 text-yellow-400 mb-4">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                   </div>
                  <p className="text-blue-100 italic mb-6">"{story.quote}"</p>
                  <div>
                    <h4 className="font-bold text-lg">{story.name}</h4>
                    <p className="text-blue-300 text-sm">{story.role} at {story.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Photos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Placement Drives</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="rounded-xl h-64 w-full object-cover hover:opacity-90 transition-opacity" alt="Placement Drive 1" />
              <img src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="rounded-xl h-64 w-full object-cover hover:opacity-90 transition-opacity" alt="Placement Drive 2" />
              <img src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="rounded-xl h-64 w-full object-cover hover:opacity-90 transition-opacity" alt="Placement Drive 3" />
           </div>
        </div>
      </section>
    </div>
  );
};
