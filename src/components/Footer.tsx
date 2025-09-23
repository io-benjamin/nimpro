import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>NIMPRO</h3>
            <p>Professional electrical contractors committed to safety, quality, and customer satisfaction.</p>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@nimpro.com</p>
              <p>📍 123 Electric Ave, City, State 12345</p>
            </div>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Residential Electrical</li>
              <li>Commercial Electrical</li>
              <li>Emergency Repairs</li>
              <li>Panel Upgrades</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Business Hours</h4>
            <div className="hours">
              <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
              <p>Saturday: 8:00 AM - 4:00 PM</p>
              <p>Sunday: Emergency Only</p>
              <p className="emergency">🚨 24/7 Emergency Service Available</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 NIMPRO Electrical Contractors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;