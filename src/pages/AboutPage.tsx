import React from 'react';
import { Shield, CheckCircle, Lightbulb, Building, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Who We Are</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">About NIMPRO Electrical Inc.</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Established in 2025, NIMPRO Electrical Inc. is a Class A licensed electrical contracting company 
            based in Richmond, Virginia. We specialize in providing comprehensive commercial and industrial 
            electrical solutions throughout the Richmond metropolitan area and surrounding regions.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            As a Master Electrician-led company, we bring decades of combined experience to every project, 
            ensuring the highest standards of workmanship, safety, and code compliance. Our commitment to 
            excellence has quickly established us as a trusted partner for businesses throughout Central Virginia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide safe, reliable, and innovative electrical solutions that power businesses and 
              support economic growth throughout Central Virginia. We are committed to delivering 
              exceptional service while maintaining the highest safety standards in every project we undertake.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Values</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                Safety first in everything we do
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                Quality workmanship and attention to detail
              </li>
              <li className="flex items-start">
                <Lightbulb className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                Innovation and energy efficiency
              </li>
              <li className="flex items-start">
                <Building className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                Professional integrity and reliability
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Expertise</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Commercial Services</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Office building electrical systems</li>
                <li>• Retail and restaurant installations</li>
                <li>• Healthcare facility electrical work</li>
                <li>• Educational institution projects</li>
                <li>• LED lighting retrofits and upgrades</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Industrial Services</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Manufacturing facility electrical systems</li>
                <li>• Power distribution and motor control</li>
                <li>• Industrial automation and controls</li>
                <li>• Equipment wiring and installations</li>
                <li>• Emergency power systems</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 text-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Licensed & Insured</h3>
          <p className="text-blue-100 mb-4">
            NIMPRO Electrical Inc. is a fully licensed Class A electrical contractor in the Commonwealth of Virginia, 
            with comprehensive insurance coverage for your peace of mind.
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm">
            <div>
              <CheckCircle className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <p>Class A Licensed</p>
            </div>
            <div>
              <Shield className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <p>Fully Insured</p>
            </div>
            <div>
              <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <p>Master Electrician</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;