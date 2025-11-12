import React from 'react';
import { Calendar, Users, Target, Zap } from 'lucide-react';
import Button from '../ui/Button';

const Programs: React.FC = () => {
  const programs = [
    {
      icon: Zap,
      title: 'Spark Program',
      duration: '3 Months',
      participants: 'Early-stage Ideas',
      description: 'Ideal for validating your technology concept and building MVP',
      features: ['Idea Validation', 'MVP Development', 'Market Research', 'Pitch Training'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Target,
      title: 'Growth Program',
      duration: '6 Months',
      participants: 'Seed-stage Startups',
      description: 'Comprehensive acceleration for scaling your technology venture',
      features: ['Product-Market Fit', 'Funding Preparation', 'Team Scaling', 'Go-to-Market Strategy'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Scale Program',
      duration: '12 Months',
      participants: 'Series A Ready',
      description: 'Advanced support for high-growth technology companies',
      features: ['International Expansion', 'Corporate Partnerships', 'Advanced Funding', 'Leadership Development'],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored incubation programs designed to support your venture at every stage 
            of the innovation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className={`bg-gradient-to-r ${program.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <program.icon className="h-8 w-8" />
                  <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full">
                    {program.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-white/90 text-sm">{program.participants}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6">{program.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Program Features:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full">Learn More</Button>
              </div>
            </div>
          ))}
        </div>

        {/* Program Comparison */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
            <Calendar className="h-4 w-4 mr-2" />
            Applications open quarterly
          </div>
          <p className="mt-4 text-gray-600">
            Ready to transform your idea into reality? 
            <button className="text-blue-600 font-semibold ml-1 hover:underline">
              Check upcoming deadlines
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programs;