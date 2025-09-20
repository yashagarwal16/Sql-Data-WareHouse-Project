import React from 'react';
import { ArrowRight, Database, Layers, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: 'Multi-Source Integration',
      description: 'CRM and ERP systems unified'
    },
    {
      icon: Layers,
      title: '3-Layer Architecture',
      description: 'Bronze, Silver, Gold data layers'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Business intelligence dashboards'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Modern Data Warehouse
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Architecture
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            A comprehensive data warehouse solution implementing Bronze, Silver, and Gold layers 
            for efficient ETL processing, data quality management, and advanced analytics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Explore Architecture
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-700 transition-colors">
              View Analytics
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {features.map(({ icon: Icon, title, description }, index) => (
              <div 
                key={title}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-blue-100">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;