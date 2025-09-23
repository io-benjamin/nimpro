import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Residential Electrical',
      description: 'Complete electrical services for homes including wiring, outlets, lighting, and panel upgrades.',
      icon: '🏠'
    },
    {
      title: 'Commercial Electrical',
      description: 'Professional electrical solutions for businesses, offices, and commercial buildings.',
      icon: '🏢'
    },
    {
      title: 'Emergency Repairs',
      description: '24/7 emergency electrical repair services to keep your property safe and powered.',
      icon: '🚨'
    },
    {
      title: 'Panel Upgrades',
      description: 'Electrical panel upgrades and replacements to meet modern safety standards.',
      icon: '⚡'
    },
    {
      title: 'LED Lighting',
      description: 'Energy-efficient LED lighting installation and upgrades for homes and businesses.',
      icon: '💡'
    },
    {
      title: 'Safety Inspections',
      description: 'Comprehensive electrical safety inspections and code compliance services.',
      icon: '🔍'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Professional electrical solutions tailored to your needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;