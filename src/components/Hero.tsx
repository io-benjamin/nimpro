import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Professional Electrical Services</h1>
          <p>
            Trusted electrical contractors providing safe, reliable, and efficient 
            electrical solutions for residential and commercial projects.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Free Quote</button>
            <button className="btn-secondary">Our Services</button>
          </div>
        </div>
        <div className="hero-features">
          <div className="feature">
            <h3>⚡ Licensed & Insured</h3>
            <p>Fully certified electrical contractors</p>
          </div>
          <div className="feature">
            <h3>🔧 24/7 Emergency</h3>
            <p>Round-the-clock emergency services</p>
          </div>
          <div className="feature">
            <h3>✓ Quality Guaranteed</h3>
            <p>100% satisfaction guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;