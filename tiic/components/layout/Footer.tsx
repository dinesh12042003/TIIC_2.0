import React from 'react';
import { Rocket, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <Rocket className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">TIIC</span>
            </div>
            <p className="text-gray-300 text-base">
              Fostering innovation and entrepreneurship through technology incubation 
              and startup support.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Programs
                </h3>
                <ul className="mt-4 space-y-4">
                  {['Incubation', 'Acceleration', 'Mentorship', 'Workshops'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Resources
                </h3>
                <ul className="mt-4 space-y-4">
                  {['Open Source', 'Documentation', 'Tutorials', 'Research Papers'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {['About', 'Team', 'Partners', 'Careers'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Contact
                </h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                    <span className="text-gray-300">Tech Park, Innovation Road</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-gray-400" />
                    <span className="text-gray-300">contact@tiic.org</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-gray-400" />
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2024 Technology Innovation & Incubation Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;