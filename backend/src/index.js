import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import salesRoutes from "./routes/salesRoutes.js";
import { loadCSVData } from "./utils/csvLoader.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(cors());
app.use(express.json());

// Load CSV before starting API
await loadCSVData();

// Routes
app.use("/api/sales", salesRoutes);

app.get("/", (req, res) => {
  res.send("TruEstate Backend is Running");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

