import React from 'react';
import { Shield, CheckCircle, Lightbulb, Building, Zap } from 'lucide-react';
import { styles } from '../styles/styles';

const AboutPage: React.FC = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.aboutContainer}>
        <h1 style={styles.sectionTitle}>Who We Are</h1>
        
        <div style={styles.card}>
          <h2 style={styles.subsectionTitle}>About NIMPRO Electrical Inc.</h2>
          <p style={styles.bodyText}>
            Established in 2025, NIMPRO Electrical Inc. is a Class A licensed electrical contracting company 
            based in Richmond, Virginia. We specialize in providing comprehensive commercial and industrial 
            electrical solutions throughout the Richmond metropolitan area and surrounding regions.
          </p>
          <p style={styles.bodyText}>
            As a Master Electrician-led company, we bring decades of combined experience to every project, 
            ensuring the highest standards of workmanship, safety, and code compliance. Our commitment to 
            excellence has quickly established us as a trusted partner for businesses throughout Central Virginia.
          </p>
        </div>

        <div style={styles.grid2}>
          <div style={styles.missionCard}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: '#1e40af', 
              marginBottom: '1rem' 
            }}>
              Our Mission
            </h3>
            <p style={{ color: '#374151', lineHeight: 1.7 }}>
              To provide safe, reliable, and innovative electrical solutions that power businesses and 
              support economic growth throughout Central Virginia. We are committed to delivering 
              exceptional service while maintaining the highest safety standards in every project we undertake.
            </p>
          </div>
          
          <div style={styles.valuesCard}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: '#1e40af', 
              marginBottom: '1rem' 
            }}>
              Our Values
            </h3>
            <ul style={styles.valuesList}>
              <li style={styles.valuesListItem}>
                <Shield style={styles.valuesIcon} />
                Safety first in everything we do
              </li>
              <li style={styles.valuesListItem}>
                <CheckCircle style={styles.valuesIcon} />
                Quality workmanship and attention to detail
              </li>
              <li style={styles.valuesListItem}>
                <Lightbulb style={styles.valuesIcon} />
                Innovation and energy efficiency
              </li>
              <li style={styles.valuesListItem}>
                <Building style={styles.valuesIcon} />
                Professional integrity and reliability
              </li>
            </ul>
          </div>
        </div>

        <div style={styles.card}>
          <h3 style={styles.subsectionTitle}>Our Expertise</h3>
          <div style={styles.gridServices}>
            <div>
              <h4 style={styles.expertiseTitle}>Commercial Services</h4>
              <ul style={styles.expertiseList}>
                <li>Office building electrical systems</li>
                <li>Retail and restaurant installations</li>
                <li>Healthcare facility electrical work</li>
                <li>Educational institution projects</li>
                <li>LED lighting retrofits and upgrades</li>
              </ul>
            </div>
            <div>
              <h4 style={styles.expertiseTitle}>Industrial Services</h4>
              <ul style={styles.expertiseList}>
                <li>Manufacturing facility electrical systems</li>
                <li>Power distribution and motor control</li>
                <li>Industrial automation and controls</li>
                <li>Equipment wiring and installations</li>
                <li>Emergency power systems</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={styles.licensedSection}>
          <h3 style={styles.licensedTitle}>Licensed & Insured</h3>
          <p style={styles.licensedText}>
            NIMPRO Electrical Inc. is a fully licensed Class A electrical contractor in the Commonwealth of Virginia, 
            with comprehensive insurance coverage for your peace of mind.
          </p>
          <div style={styles.licensedBadges}>
            <div style={styles.licensedBadge}>
              <CheckCircle style={styles.licensedIcon} />
              <p>Class A Licensed</p>
            </div>
            <div style={styles.licensedBadge}>
              <Shield style={styles.licensedIcon} />
              <p>Fully Insured</p>
            </div>
            <div style={styles.licensedBadge}>
              <Zap style={styles.licensedIcon} />
              <p>Master Electrician</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;