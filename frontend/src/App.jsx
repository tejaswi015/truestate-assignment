import { useEffect, useState } from "react";
import "./index.css";
import { fetchSales } from "./services/api";
import SearchBar from "./components/SearchBar";
import FilterPanel from "./components/FilterPanel";
import SortDropdown from "./components/SortDropdown";
import SalesTable from "./components/SalesTable";
import PaginationControls from "./components/PaginationControls";

function App() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    region: "",
    gender: "",
    minAge: "",
    maxAge: "",
    productCategory: "",
    paymentMethod: "",
    startDate: "",
    endDate: "",
  });
  const [sortBy, setSortBy] = useState("name_asc");
  const [page, setPage] = useState(1);

  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadData = async () => {
    try {
      setLoading(true);
      setError("");

      const params = {
        search,
        sortBy,
        page,
        limit: 10,
        region: filters.region || undefined,
        gender: filters.gender || undefined,
        productCategory: filters.productCategory || undefined,
        paymentMethod: filters.paymentMethod || undefined,
        minAge: filters.minAge || undefined,
        maxAge: filters.maxAge || undefined,
        startDate: filters.startDate || undefined,
        endDate: filters.endDate || undefined,
      };

      const res = await fetchSales(params);
      setRows(res.data);
      setTotal(res.total);
      setTotalPages(res.totalPages);
    } catch (err) {
      console.error(err);
      setError("Failed to load data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, JSON.stringify(filters), sortBy, page]);

  const handleSearchChange = (value) => {
    setPage(1);
    setSearch(value);
  };

  const handleFilterChange = (newFilters) => {
    setPage(1);
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleSortChange = (value) => {
    setPage(1);
    setSortBy(value);
  };

  const totalUnits = rows.reduce((acc, r) => acc + (r.quantity || 0), 0);
  const totalAmount = rows.reduce(
    (acc, r) => acc + (r.finalAmount || 0),
    0
  );

  return (
    <div className="app">
      {/* Top bar like URL bar */}
      <header className="topbar">
        <div className="topbar-left">https://www.vault.ai</div>
        <div className="topbar-right">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </header>

      <main className="page">
        {/* TITLE + SEARCH */}
        <div className="page-header-row">
          <div>
            <h1 className="page-title">Sales Management System</h1>
           
          </div>
          <div className="page-header-search">
            <SearchBar value={search} onChange={handleSearchChange} />
          </div>
        </div>

        {/* TOTAL CARDS – heading kindha row, LEFT side */}
        <div className="stats-row">
          <div className="card stats-card">
            <div className="stats-label">Total units (this page)</div>
            <div className="stats-value">{totalUnits}</div>
          </div>
          <div className="card stats-card">
            <div className="stats-label">Total amount (this page)</div>
            <div className="stats-value">₹ {totalAmount.toFixed(2)}</div>
          </div>
          <div className="card stats-card">
            <div className="stats-label">Total records (all)</div>
            <div className="stats-value">{total}</div>
          </div>
        </div>

        {/* FILTER ROW – full width, left side start  */}
        <div className="card filters-bar filters-card">
          <FilterPanel filters={filters} onChange={handleFilterChange} />
          <div className="filters-bar-right">
            <SortDropdown value={sortBy} onChange={handleSortChange} />
          </div>
        </div>

        {/* TABLE + PAGINATION */}
        {loading && <div className="info-msg">Loading...</div>}
        {error && <div className="error-msg">{error}</div>}

        {!loading && !error && (
          <>
            <SalesTable rows={rows} />
            <PaginationControls
              page={page}
              totalPages={totalPages}
              total={total}
              onPageChange={setPage}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
