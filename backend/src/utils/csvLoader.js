import fs from "fs";
import path from "path";
import csv from "csv-parser";

let salesData = [];

export const loadCSVData = () => {
  return new Promise((resolve, reject) => {
    const results = [];

    const filePath = path.join(process.cwd(), "data", "sales.csv");

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        results.push({
          customerId: row["Customer ID"],
          customerName: row["Customer Name"],
          phone: row["Phone Number"],
          gender: row["Gender"],
          age: Number(row["Age"]),
          customerRegion: row["Customer Region"],
          customerType: row["Customer Type"],

          productId: row["Product ID"],
          productName: row["Product Name"],
          brand: row["Brand"],
          productCategory: row["Product Category"],
          tags: row["Tags"] ? row["Tags"].split(",").map(t => t.trim()) : [],

          quantity: Number(row["Quantity"]),
          pricePerUnit: Number(row["Price per Unit"]),
          discountPercentage: Number(row["Discount Percentage"]),
          totalAmount: Number(row["Total Amount"]),
          finalAmount: Number(row["Final Amount"]),

          date: new Date(row["Date"]),
          paymentMethod: row["Payment Method"],
          orderStatus: row["Order Status"],
          deliveryType: row["Delivery Type"],
          storeId: row["Store ID"],
          storeLocation: row["Store Location"],
          salespersonId: row["Salesperson ID"],
          employeeName: row["Employee Name"]
        });
      })
      .on("end", () => {
        salesData = results;
        console.log("✅ CSV Loaded:", salesData.length, "records");
        resolve();
      })
      .on("error", (err) => reject(err));
  });
};

export const getSalesData = () => salesData;
