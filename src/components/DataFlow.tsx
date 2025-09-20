import React from 'react';
import { FileText, Database, Settings, BarChart } from 'lucide-react';

const DataFlow: React.FC = () => {
  const processes = [
    {
      icon: FileText,
      title: 'Source Systems',
      description: 'CRM & ERP Data Sources',
      items: ['Customer Information', 'Product Catalog', 'Sales Transactions', 'Location Data'],
      color: 'bg-blue-500'
    },
    {
      icon: Database,
      title: 'Data Ingestion',
      description: 'Bronze Layer Processing',
      items: ['Bulk Data Loading', 'Schema Validation', 'Error Handling', 'Data Archival'],
      color: 'bg-bronze-500'
    },
    {
      icon: Settings,
      title: 'Data Transformation',
      description: 'Silver Layer ETL',
      items: ['Data Cleansing', 'Business Rules', 'Quality Checks', 'Standardization'],
      color: 'bg-silver-500'
    },
    {
      icon: BarChart,
      title: 'Analytics Ready',
      description: 'Gold Layer Dimensions',
      items: ['Star Schema', 'Fact Tables', 'Dimensions', 'BI Integration'],
      color: 'bg-gold-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Data Processing Pipeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automated ETL processes ensure data quality and consistency throughout the pipeline
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-bronze-500 via-silver-500 to-gold-500 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {processes.map((process, index) => {
              const Icon = process.icon;
              return (
                <div key={process.title} className="text-center">
                  <div className="bg-white rounded-2xl p-6 shadow-lg card-hover mb-4">
                    <div className={`w-16 h-16 ${process.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                    <p className="text-gray-600 mb-4">{process.description}</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      {process.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center justify-center">
                          <div className={`w-1.5 h-1.5 ${process.color} rounded-full mr-2`}></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-2xl font-bold text-gray-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Automated data validation checks
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Duplicate detection and removal
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Business rule enforcement
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Data lineage tracking
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Features</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Optimized stored procedures
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Batch processing capabilities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Error handling and logging
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Performance monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataFlow;