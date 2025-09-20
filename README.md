# Sql-Data-WareHouse-Project
This project focuses on designing and implementing a modern data warehouse architecture that efficiently handles large volumes of structured data. It covers the entire ETL pipeline, data modeling, and analytics to support data-driven decision-making.

## 🏗️ Architecture Overview

This project implements a **3-Layer Data Warehouse Architecture**:

### 📊 **Bronze Layer** (Raw Data)
- **Purpose**: Store raw, unprocessed data from source systems
- **Sources**: CRM System, ERP System
- **Tables**: Customer info, Product info, Sales details, Location data
- **Format**: Exact copy of source data with minimal transformation

### 🔄 **Silver Layer** (Cleansed Data)
- **Purpose**: Clean, validate, and standardize data from Bronze layer
- **Transformations**: Data type conversions, null handling, deduplication
- **Quality**: Implements data quality checks and business rules
- **Schema**: Normalized structure with data lineage tracking

### ✨ **Gold Layer** (Business-Ready Data)
- **Purpose**: Create dimension and fact tables for analytics
- **Structure**: Star schema optimized for reporting and BI
- **Views**: `dim_customers`, `dim_products`, `fact_sales`
- **Usage**: Direct consumption by analytics tools and dashboards

---

## 🚀 **Frontend Dashboard**

A modern, responsive web application showcasing the data warehouse:

### **Features**
- 📈 **Interactive Analytics**: Real-time charts and KPIs
- 🎨 **Modern UI/UX**: Professional design with smooth animations
- 📱 **Responsive**: Works perfectly on all devices
- ⚡ **Fast Performance**: Optimized build with Vite
- 🔍 **Data Visualization**: Comprehensive charts using Recharts

### **Technology Stack**
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts library
- **Build Tool**: Vite
- **Deployment**: Render-ready configuration

---

## 📁 **Project Structure**

```
├── 📂 scripts/
│   ├── 📂 bronze/          # Bronze layer DDL and procedures
│   ├── 📂 silver/          # Silver layer transformations
│   ├── 📂 gold/            # Gold layer views and dimensions
│   └── init-database.sql   # Database and schema creation
├── 📂 tests/               # Data quality validation scripts
├── 📂 dataset/             # Sample data files (CSV)
├── 📂 src/                 # Frontend React application
├── 📂 documents/           # Project documentation
└── 🚀 render.yaml          # Deployment configuration
```

---

## 🛠️ **Setup Instructions**

### **Database Setup**
1. **Initialize Database**:
   ```sql
   -- Run scripts in order:
   scripts/init-database.sql
   scripts/bronze/DDL_Bronze.sql
   scripts/silver/ddl_silver.sql
   scripts/gold/ddl_gold.sql
   ```

2. **Load Data**:
   ```sql
   EXEC bronze.load_bronze;
   EXEC silver.load_silver;
   ```

3. **Quality Checks**:
   ```sql
   -- Run validation scripts:
   tests/quality_checks_silver.sql
   tests/quality_checks_gold.sql
   ```

### **Frontend Setup**
1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Development Server**:
   ```bash
   npm run dev
   ```

3. **Production Build**:
   ```bash
   npm run build
   ```

---

## 🌐 **Deployment**

### **Deploy to Render**
1. Push code to GitHub repository
2. Connect repository to Render
3. Configure build settings:
   - **Build Command**: `npm ci && npm run build`
   - **Publish Directory**: `dist`
4. Deploy automatically

**📋 Detailed deployment guide**: See [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 🎯 **Key Features**

### **Data Pipeline**
- ✅ **ETL Process**: Automated Bronze → Silver → Gold transformation
- ✅ **Data Quality**: Comprehensive validation and cleansing
- ✅ **Error Handling**: Robust error management and logging
- ✅ **Performance**: Optimized queries and indexing strategies

### **Analytics Dashboard**
- ✅ **Sales Analytics**: Revenue trends, product performance
- ✅ **Customer Insights**: Demographics, behavior analysis  
- ✅ **Interactive Charts**: Drill-down capabilities
- ✅ **Real-time Updates**: Dynamic data visualization

### **Technical Excellence**
- ✅ **Scalable Architecture**: Modular, maintainable codebase
- ✅ **Type Safety**: Full TypeScript implementation
- ✅ **Modern Stack**: Latest React, Vite, and Tailwind CSS
- ✅ **Production Ready**: Optimized for deployment

---

## 📊 **Sample Analytics**

The dashboard includes:
- **Revenue Metrics**: Total sales, growth trends
- **Product Analysis**: Top performers, category breakdown
- **Customer Segmentation**: Demographics, purchase patterns
- **Geographic Distribution**: Sales by region
- **Time Series Analysis**: Monthly/quarterly trends

---

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run quality checks
5. Submit a pull request

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🎉 **Live Demo**

🌐 **Frontend Dashboard**: [Deploy on Render](https://render.com) using the configuration provided

**Built with ❤️ by [YASH AGARWAL](https://github.com/yourusername)**