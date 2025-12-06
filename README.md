# Sales Management System – Assignment

This project is a full-stack sales management application built using Node.js and React. It allows filtering, sorting, and searching across a large dataset of sales records.

## Tech Stack

- Frontend: React (Vite)
- Backend: Node.js, Express
- CSV Parsing: csv-parser
- HTTP Client: Axios

## Features

- View 10,00,000+ sales records with pagination
- Search by customer name or phone number
- Filters:
  - Customer Region
  - Gender
  - Age Range
  - Product Category
  - Payment Method
  - Date
- Sorting by Customer Name
- Summary Cards:
  - Total Units (Current Page)
  - Total Amount (Current Page)
  - Total Records (Overall)
 
Note: The original sales.csv dataset (~223 MB) is not checked into GitHub due to size limits. 
It can be provided separately on request.

## How to Run the Project

### 1. Backend Setup

```bash
cd backend
npm install
npm run dev

