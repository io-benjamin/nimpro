import React from 'react';
import { Phone, Mail, MapPin, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-yellow-400 mr-3" />
              <span className="font-bold text-xl">NIMPRO Electrical Inc.</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional electrical contractor serving Richmond, VA and surrounding areas with 
              commercial and industrial electrical solutions.
            </p>
            <p className="text-sm text-gray-400">
              Class A Licensed | Master Electrician | Established 2025
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Commercial & Industrial Installations</li>
              <li>Power Distribution Systems</li>
              <li>LED Lighting & Controls</li>
              <li>Design-Build Support</li>
              <li>Maintenance & Troubleshooting</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <div className="text-gray-300 space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(804) 555-0123</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@nimproelectrical.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Richmond, VA & Surrounding Areas</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 NIMPRO Electrical Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;