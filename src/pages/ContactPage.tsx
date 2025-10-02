import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { styles } from '../styles/styles';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields (Name, Email, Phone)');
      return;
    }

    setIsSubmitting(true);

    // Submit form data to Netlify
    const form = e.target as HTMLFormElement;
    const formDataToSubmit = new FormData(form);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataToSubmit as any).toString()
    })
    .then(() => {
      // Success popup
      alert('Thank you for your message! We will contact you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    })
    .catch(() => {
      alert('Sorry, there was an error sending your message. Please call us directly at (804) 386-4911.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.contactContainer}>
        <h1 style={styles.sectionTitle}>Contact Us</h1>
        
        <div style={styles.gridContact}>
          <div>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: '#1e40af', 
              marginBottom: '1.5rem' 
            }}>
              Get In Touch
            </h2>
            <p style={styles.contactIntro}>
              Ready to discuss your electrical project? Contact NIMPRO Electrical Inc. today for a free 
              consultation and estimate. We're here to help with all your commercial and industrial electrical needs.
            </p>
            
            <div style={styles.contactInfoSection}>
              <div style={styles.contactInfoItem}>
                <Phone style={styles.contactIcon} />
                <div>
                  <h3 style={styles.contactInfoTitle}>Phone</h3>
                  <p style={styles.contactInfoText}>(804) 386-4911</p>
                  <p style={styles.contactInfoSubtext}>24/7 Emergency Services Available</p>
                </div>
              </div>
              
              <div style={styles.contactInfoItem}>
                <Mail style={styles.contactIcon} />
                <div>
                  <h3 style={styles.contactInfoTitle}>Email</h3>
                  <p style={styles.contactInfoText}>cgarcia@nimproelectrical.com</p>
                  <p style={styles.contactInfoSubtext}>We respond within 24 hours</p>
                </div>
              </div>
              
              <div style={styles.contactInfoItem}>
                <MapPin style={styles.contactIcon} />
                <div>
                  <h3 style={styles.contactInfoTitle}>Service Area</h3>
                  <p style={styles.contactInfoText}>Richmond, VA and surrounding areas</p>
                  <p style={styles.contactInfoSubtext}>Central Virginia region</p>
                </div>
              </div>
            </div>

            <div style={styles.businessHours}>
              <h3 style={styles.businessHoursTitle}>Business Hours</h3>
              <div style={styles.businessHoursText}>
                <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                <p>Saturday: 8:00 AM - 2:00 PM</p>
                <p>Sunday: Emergency calls only</p>
                <p style={styles.businessHoursEmergency}>
                  Emergency services available 24/7
                </p>
              </div>
            </div>
          </div>

          <div style={styles.formCard}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: '#1e40af', 
              marginBottom: '1.5rem' 
            }}>
              Request a Free Quote
            </h2>
            
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              style={styles.formSection}
            >
              {/* Hidden field for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />
              {/* Hidden field for email notifications */}
              <input type="hidden" name="subject" value="New Contact Form Submission - NIMPRO Electrical" />
              {/* Honeypot field for spam protection */}
              <p style={{ display: 'none' }}>
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              <div style={styles.gridForm}>
                <div>
                  <label style={styles.formLabel}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={styles.formInput}
                    onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                  />
                </div>
                <div>
                  <label style={styles.formLabel}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={styles.formInput}
                    onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                  />
                </div>
              </div>

              <div style={styles.gridForm}>
                <div>
                  <label style={styles.formLabel}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={styles.formInput}
                    onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                  />
                </div>
                <div>
                  <label style={styles.formLabel}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    style={styles.formInput}
                    onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={styles.formLabel}>
                  Service Needed
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  style={styles.formInput}
                  onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                >
                  <option value="">Select a service</option>
                  <option value="commercial-installation">Commercial Installation</option>
                  <option value="industrial-installation">Industrial Installation</option>
                  <option value="power-distribution">Power Distribution Systems</option>
                  <option value="lighting-controls">LED Lighting & Controls</option>
                  <option value="design-build">Design-Build Support</option>
                  <option value="maintenance">Maintenance & Troubleshooting</option>
                  <option value="emergency">Emergency Service</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={styles.formLabel}>
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your project requirements, timeline, and any specific needs..."
                  style={styles.formTextarea}
                  onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  ...styles.submitButton,
                  backgroundColor: isSubmitting ? '#9ca3af' : '#2563eb',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) e.currentTarget.style.backgroundColor = '#1d4ed8';
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) e.currentTarget.style.backgroundColor = '#2563eb';
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;