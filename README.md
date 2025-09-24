# Sql-Data-WareHouse-Project
This project focuses on designing and implementing a modern data warehouse architecture that efficiently handles large volumes of structured data. It covers the entire ETL pipeline, data modeling, and analytics to support data-driven decision-making.


# 📊 SQL Data Warehouse Project  

A complete **SQL-based Data Warehouse** implementation showcasing data ingestion, transformation, schema design, and analytical queries.  
*(This README is adapted from the detailed [Notion Project Doc](https://www.notion.so/SQL-Data-Warehouse-Project-2786f2c67aeb801d9aa0e464b9d520b0?source=copy_link)).*  

---

## 📌 Objectives
- Build a scalable data warehouse  
- Design fact & dimension tables  
- Implement ETL workflows  
- Generate analytical insights with SQL  

---

## 🏗️ Architecture
![Architecture](./images/architecture.png)  
*(Image exported from Notion and placed in repo)*  

---

## 🗄️ Schema Design
### Fact Table(s):
- **Sales Fact** (sales_id, product_id, customer_id, date_id, sales_amount, quantity)  

### Dimension Table(s):
- **Customer Dimension**  
- **Product Dimension**  
- **Time Dimension**  
- **Region Dimension**  

![ER Diagram](./images/er_diagram.png)  

---

## 🔄 ETL Process
1. Load raw data into staging tables  
2. Clean & transform  
3. Insert into dimension & fact tables  

---

## 📊 Sample Queries
```sql
-- Monthly Sales Trend
SELECT d.month, SUM(f.sales_amount) AS total_sales
FROM fact_sales f
JOIN dim_date d ON f.date_id = d.date_id
GROUP BY d.month
ORDER BY d.month;

