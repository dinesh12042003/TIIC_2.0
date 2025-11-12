import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-8">
            <Star className="h-4 w-4 mr-1 fill-current" />
            Leading Technology Incubator Since 2020
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Igniting
            <span className="text-blue-600 block">Digital Innovation</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We transform groundbreaking ideas into successful technology ventures. 
            Join our ecosystem of innovators, mentors, and investors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="flex items-center">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="flex items-center">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { number: '50+', label: 'Startups' },
              { number: '$10M+', label: 'Funding Raised' },
              { number: '200+', label: 'Mentors' },
              { number: '15+', label: 'Countries' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;