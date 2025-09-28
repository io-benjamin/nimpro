import React, { useState, useEffect } from 'react';
import { Zap, Shield, Wrench, Building, Lightbulb, CheckCircle } from 'lucide-react';
import { styles } from '../styles/styles';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const titleTransform = Math.min(scrollY * 0.8, 200);
  const servicesOpacity = scrollY > 150 ? 1 : 0;
  const servicesTransform = scrollY > 150 ? 0 : 30;

  const services = [
    { 
      icon: Building, 
      title: 'Commercial & Industrial Installations', 
      desc: 'Complete electrical installations for commercial and industrial facilities with expert craftsmanship and code compliance.', 
      color: '#2563eb' 
    },
    { 
      icon: Zap, 
      title: 'Power Distribution Systems', 
      desc: 'Design and installation of power distribution systems and equipment wiring for optimal performance and reliability.', 
      color: '#eab308' 
    },
    { 
      icon: Lightbulb, 
      title: 'LED Lighting & Controls', 
      desc: 'Energy-efficient LED lighting solutions and advanced control systems to reduce costs and improve functionality.', 
      color: '#16a34a' 
    },
    { 
      icon: CheckCircle, 
      title: 'Design-Build Support', 
      desc: 'Comprehensive design-build support and accurate estimating services for your electrical projects.', 
      color: '#9333ea' 
    },
    { 
      icon: Shield, 
      title: 'Safety-Focused Execution', 
      desc: 'All projects executed with the highest safety standards and protocols to protect your facility and our team.', 
      color: '#dc2626' 
    },
    { 
      icon: Wrench, 
      title: 'Maintenance & Troubleshooting', 
      desc: 'Expert troubleshooting, system upgrades, and preventive maintenance to keep your operations running smoothly.', 
      color: '#4338ca' 
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        style={{
          ...styles.heroSection,
          transform: `translateY(${titleTransform}px)`,
          zIndex: 10,
        }}
      >
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          textAlign: 'center', 
          position: 'relative', 
          zIndex: 10 
        }}>
          <h1 style={styles.heroTitle}>
            NIMPRO Electrical Inc.
          </h1>
          <p style={{ 
            fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
            marginBottom: '1rem', 
            fontWeight: 'bold' 
          }}>
            Richmond's Premier Electrical Contractors
          </p>
          <p style={{ 
            fontSize: '1.25rem', 
            marginBottom: '2rem', 
            maxWidth: '64rem', 
            margin: '0 auto 2rem', 
            lineHeight: 1.6, 
            color: '#cbd5e1' 
          }}>
            From complex industrial installations to energy-efficient LED upgrades, we deliver safe, 
            reliable electrical solutions that keep your business running smoothly. Class A licensed, 
            Master Electrician-led, and trusted by Richmond businesses since 2025.
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2rem', 
            marginBottom: '2rem', 
            flexWrap: 'wrap' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CheckCircle style={{ 
                height: '1.25rem', 
                width: '1.25rem', 
                color: '#facc15', 
                marginRight: '0.5rem' 
              }} />
              <span style={{ fontWeight: 500 }}>Class A Licensed</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Shield style={{ 
                height: '1.25rem', 
                width: '1.25rem', 
                color: '#facc15', 
                marginRight: '0.5rem' 
              }} />
              <span style={{ fontWeight: 500 }}>Fully Insured</span>
            </div>
          </div>
          
          <button 
            style={styles.button}
            onClick={() => setCurrentPage('contact')}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            }}
          >
            Get Free Quote Today
          </button>
          <p style={{ 
            fontSize: '0.875rem', 
            color: '#cbd5e1', 
            marginTop: '1rem' 
          }}>
            Fast response • Professional estimates • No obligation
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ 
        paddingTop: '14rem', 
        paddingBottom: '5rem', 
        background: 'linear-gradient(to bottom, #b9c1c8ff, white)',
        opacity: servicesOpacity,
        transform: `translateY(${servicesTransform}px)`,
        transition: 'all 0.7s ease'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 900,
            textAlign: 'center',
            marginBottom: '5rem',
            background: 'linear-gradient(to right, #0f172a, #1e40af, #0f172a)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Our Electrical Services
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {services.map((service, index) => (
              <div 
                key={index} 
                style={styles.serviceCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-0.5rem)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{ 
                  ...styles.iconContainer, 
                  background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)` 
                }}>
                  <service.icon style={{ height: '2rem', width: '2rem' }} />
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 'bold', 
                  marginBottom: '1rem', 
                  color: '#0f172a' 
                }}>
                  {service.title}
                </h3>
                <p style={{ color: '#475569', lineHeight: 1.6 }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;