import { getSalesData } from "../utils/csvLoader.js";

export const getFilteredSales = (params) => {
  let data = [...getSalesData()];

  const {
    search,
    region,
    gender,
    minAge,
    maxAge,
    productCategory,
    paymentMethod,
    startDate,
    endDate,
    sortBy = "date_desc",
    page = 1,
    limit = 10,
  } = params;

  if (search) {
    const q = search.toLowerCase();
    data = data.filter(
      (item) =>
        item.customerName?.toLowerCase().includes(q) ||
        item.phone?.toLowerCase().includes(q)
    );
  }

  if (region)
    data = data.filter((i) => i.customerRegion === region);

  if (gender)
    data = data.filter((i) => i.gender === gender);

  if (minAge && maxAge)
    data = data.filter(
      (i) => i.age >= Number(minAge) && i.age <= Number(maxAge)
    );

  if (productCategory)
    data = data.filter((i) => i.productCategory === productCategory);

  if (paymentMethod)
    data = data.filter((i) => i.paymentMethod === paymentMethod);

  if (startDate && endDate)
    data = data.filter(
      (i) =>
        new Date(i.date) >= new Date(startDate) &&
        new Date(i.date) <= new Date(endDate)
    );

  if (sortBy === "date_desc")
    data.sort((a, b) => new Date(b.date) - new Date(a.date));
  else if (sortBy === "quantity")
    data.sort((a, b) => a.quantity - b.quantity);
  else if (sortBy === "name_asc")
    data.sort((a, b) => a.customerName.localeCompare(b.customerName));

  const start = (page - 1) * limit;
  const paginated = data.slice(start, start + Number(limit));

  return {
    data: paginated,
    total: data.length,
    page: Number(page),
    totalPages: Math.ceil(data.length / limit),
  };
};
