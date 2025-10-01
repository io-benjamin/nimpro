import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { styles } from '../styles/styles';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerGrid}>
          <div>
            <div style={styles.footerBrand}>
          <img 
            src="/nimproLogo.png" 
            alt="NIMPRO Logo" 
            style={{ 
              height: '2rem', 
              width: '2rem', 
              filter: 'brightness(0) invert(1)',
              marginRight: '0.75rem' 
            }} 
          /><span style={styles.footerBrandText}>
                NIMPRO Electrical Inc.
              </span>
            </div>
            <p style={styles.footerDescription}>
              Professional electrical contractor serving Richmond, VA and surrounding areas with 
              commercial and industrial electrical solutions.
            </p>
            <p style={styles.footerTagline}>
              Class A Licensed | Master Electrician | Established 2025
            </p>
          </div>
          
          <div>
            <h3 style={styles.footerSectionTitle}>
              Services
            </h3>
            <ul style={styles.footerList}>
              <li>Commercial & Industrial Installations</li>
              <li>Power Distribution Systems</li>
              <li>LED Lighting & Controls</li>
              <li>Design-Build Support</li>
              <li>Maintenance & Troubleshooting</li>
            </ul>
          </div>
          
          <div>
            <h3 style={styles.footerSectionTitle}>
              Contact Info
            </h3>
            <div style={styles.footerContactList}>
              <div style={styles.footerContactItem}>
                <Phone style={styles.footerContactIcon} />
                <span>(804) 386-4911 </span>
              </div>
              <div style={styles.footerContactItem}>
                <Mail style={styles.footerContactIcon} />
                <span>cgarcia@nimproelectrical.com</span>
              </div>
              <div style={styles.footerContactItem}>
                <MapPin style={styles.footerContactIcon} />
                <span>Richmond, VA & Surrounding Areas</span>
              </div>
            </div>
          </div>
        </div>
        
        <div style={styles.footerBottom}>
          <p>&copy; 2025 NIMPRO Electrical Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;