import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export async function fetchSales(params) {
  const response = await axios.get(`${API_BASE_URL}/api/sales`, { params });
  return response.data; // { data, total, page, totalPages }
}
