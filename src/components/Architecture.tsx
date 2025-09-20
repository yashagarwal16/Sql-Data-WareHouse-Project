import React from 'react';
import { Database, Filter, Star, ArrowRight } from 'lucide-react';

const Architecture: React.FC = () => {
  const layers = [
    {
      name: 'Bronze Layer',
      icon: Database,
      color: 'bronze',
      description: 'Raw data ingestion from multiple sources',
      features: [
        'CRM Customer Information',
        'CRM Product Details',
        'CRM Sales Transactions',
        'ERP Location Data',
        'ERP Customer Demographics',
        'ERP Product Categories'
      ],
      bgColor: 'bg-bronze-100',
      iconColor: 'text-bronze-600',
      borderColor: 'border-bronze-500'
    },
    {
      name: 'Silver Layer',
      icon: Filter,
      color: 'silver',
      description: 'Cleaned and transformed data with business rules',
      features: [
        'Data Quality Validation',
        'Standardized Formats',
        'Duplicate Removal',
        'Missing Value Handling',
        'Business Rule Application',
        'Historical Data Management'
      ],
      bgColor: 'bg-silver-100',
      iconColor: 'text-silver-600',
      borderColor: 'border-silver-500'
    },
    {
      name: 'Gold Layer',
      icon: Star,
      color: 'gold',
      description: 'Analytics-ready dimensional model (Star Schema)',
      features: [
        'Customer Dimension',
        'Product Dimension',
        'Sales Fact Table',
        'Optimized for Analytics',
        'Business Intelligence Ready',
        'Performance Optimized'
      ],
      bgColor: 'bg-gold-100',
      iconColor: 'text-gold-600',
      borderColor: 'border-gold-500'
    }
  ];

  return (
    <section id="architecture" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Data Warehouse Architecture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A modern three-layer architecture ensuring data quality, consistency, and optimal performance 
            for analytics and business intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <div key={layer.name} className="relative">
                <div className={`${layer.bgColor} rounded-2xl p-8 h-full border-2 ${layer.borderColor} card-hover`}>
                  <div className="flex items-center mb-6">
                    <div className={`p-3 ${layer.bgColor} rounded-xl border ${layer.borderColor}`}>
                      <Icon className={`w-8 h-8 ${layer.iconColor}`} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-900">{layer.name}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 text-lg">{layer.description}</p>
                  
                  <ul className="space-y-3">
                    {layer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className={`w-2 h-2 ${layer.iconColor.replace('text-', 'bg-')} rounded-full mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {index < layers.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            ETL Process Flow
          </h3>
          <div className="data-flow-line mb-6"></div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-bronze-600 mb-2">Extract</h4>
              <p className="text-gray-600">Raw data from CRM and ERP systems</p>
            </div>
            <div>
              <h4 className="font-semibold text-silver-600 mb-2">Transform</h4>
              <p className="text-gray-600">Clean, validate, and standardize data</p>
            </div>
            <div>
              <h4 className="font-semibold text-gold-600 mb-2">Load</h4>
              <p className="text-gray-600">Dimensional model for analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;