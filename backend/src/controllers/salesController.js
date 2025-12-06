import { getFilteredSales } from "../services/salesService.js";

export const getSales = (req, res) => {
  try {
    const result = getFilteredSales(req.query);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
