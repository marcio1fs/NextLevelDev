import React from 'react';
import { SERVICES } from '../constants';
import Section from './Section';

const Services: React.FC = () => {
  return (
    <Section id="services" title="Serviços">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <div key={index} className="relative group bg-dark-card p-8 rounded-lg text-center shadow-md hover:shadow-brand-primary/20 transition-all duration-300 transform hover:-translate-y-2 border border-slate-800">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800/50 border border-slate-700 mb-6 group-hover:bg-brand-primary/10 group-hover:border-brand-primary/30 transition-colors duration-300">
                    {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-dark-text-secondary">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;