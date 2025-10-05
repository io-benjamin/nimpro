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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields (Name, Email, Phone)');
      return;
    }

    setIsSubmitting(true);

    try {
      // Encode form data for Netlify
      const encode = (data: any) => {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
      };

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          "subject": "🔌 New Lead: Contact Form Submission - NIMPRO Electrical",
          // Send only the formatted inquiry to avoid duplicates
          "inquiry-details": `
═══════════════════════════════════════════════

📋 CUSTOMER INFORMATION:
Customer Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'Not provided'}

🔧 SERVICE DETAILS:
Service Type: ${formData.service || 'Not specified'}

💬 PROJECT DETAILS:
${formData.message || 'No additional details provided.'}

═══════════════════════════════════════════════
⚡ NIMPRO Electrical Inc. - Richmond's Premier Electrical Contractors
📞 (804) 386-4911 | 🌐 https://nimproelectrical.com

📅 Submitted: ${new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
          })}
          `
        })
      });

      // Success
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

    } catch (error) {
      console.error('Error:', error);
      alert('Sorry, there was an error sending your message. Please call us directly at (804) 386-4911.');
    } finally {
      setIsSubmitting(false);
    }
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
              We'd love to be a part of making your project come to life. Contact NIMPRO Electrical Inc. today for a consultation and estimate. We're here to help bring your electrical vision to reality.
            </p>

            <div style={styles.contactInfoSection}>
              <div style={styles.contactInfoItem}>
                <Phone style={styles.contactIcon} />
                <div>
                  <h3 style={styles.contactInfoTitle}>Phone</h3>
                  <p style={styles.contactInfoText}>(804) 386-4911</p>
                  <p style={styles.contactInfoSubtext}>Fast Response for Project Estimates</p>
                </div>
              </div>

              <div style={styles.contactInfoItem}>
                <Mail style={styles.contactIcon} />
                <div>
                  <h3 style={styles.contactInfoTitle}>Email Us</h3>
                  <p style={styles.contactInfoText}>cgarcia@nimproelectrical.com</p>
                  <p style={styles.contactInfoSubtext}>Foward All Bids Here</p>
                </div>
              </div>

              <div style={styles.contactInfoItem}>
                <MapPin style={styles.contactIcon} />
                <div>
                  <h3 style={styles.contactInfoTitle}>Service Area</h3>
                  <p style={styles.contactInfoText}>All of Virginia</p>
                  <p style={styles.contactInfoSubtext}>Richmond-Based, Virginia-Wide</p>
                </div>
              </div>
            </div>

            <div style={styles.businessHours}>
              <h3 style={styles.businessHoursTitle}>Business Hours</h3>
              <div style={styles.businessHoursText}>
                <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: 8:00 AM - 2:00 PM</p>
                <p style={styles.businessHoursEmergency}>
                  Project Consultations Available
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
              Request A Project Estimate
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