import React from 'react';

function Services(): JSX.Element {
  const services = [
    { title: 'Vehicle Sourcing', desc: 'Find the perfect car from our global network' },
    { title: 'Restoration & Maintenance', desc: 'Expert care for classic and modern vehicles' },
    { title: 'Personalized Delivery', desc: 'Safe logistics to your doorstep' },
    { title: 'Financing Support', desc: 'Flexible payment options and appraisals' },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 scroll-reveal">
        <h1 className="text-4xl font-bold mb-12 text-white drop-shadow-lg text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/30 hover:border-cyan-400/60 transition duration-300">
              <h3 className="text-xl font-bold text-cyan-300 mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
