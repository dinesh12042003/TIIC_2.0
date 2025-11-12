import React from 'react';
import { Shield, Users, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Safe Innovation Environment',
      description: 'Risk-free space to experiment, fail, and learn with expert guidance and support.',
    },
    {
      icon: Users,
      title: 'Collaborative Community',
      description: 'Connect with like-minded innovators, mentors, and industry experts.',
    },
    {
      icon: Target,
      title: 'Focused Acceleration',
      description: 'Structured programs to rapidly scale your technology venture.',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Successful alumni network with demonstrated market impact.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About TIIC
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a premier technology innovation hub dedicated to nurturing 
            the next generation of tech entrepreneurs and groundbreaking solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To democratize innovation by providing accessible resources, mentorship, 
              and funding opportunities for technology entrepreneurs from all backgrounds.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              Creating a world where every great technological idea has the opportunity 
              to flourish and make a positive impact on society.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Why Choose TIIC?</h3>
            <ul className="space-y-3">
              {[
                'State-of-the-art infrastructure',
                'Industry expert mentorship',
                'Access to venture capital network',
                'Global partnership opportunities',
                'Cutting-edge research facilities',
                'Entrepreneur-first approach'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;