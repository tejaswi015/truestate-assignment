function FilterPanel({ filters, onChange }) {
  return (
    <div className="filters-row">
      <div className="filter-item">
        <label className="label">Customer Region</label>
        <select
          className="input"
          value={filters.region}
          onChange={(e) => onChange({ region: e.target.value })}
        >
          <option value="">All</option>
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="East">East</option>
          <option value="West">West</option>
        </select>
      </div>

      <div className="filter-item">
        <label className="label">Gender</label>
        <select
          className="input"
          value={filters.gender}
          onChange={(e) => onChange({ gender: e.target.value })}
        >
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <div className="filter-item filter-age">
        <label className="label">Age Range</label>
        <div className="age-range">
          <input
            className="input"
            type="number"
            placeholder="Min"
            value={filters.minAge}
            onChange={(e) => onChange({ minAge: e.target.value })}
          />
          <input
            className="input"
            type="number"
            placeholder="Max"
            value={filters.maxAge}
            onChange={(e) => onChange({ maxAge: e.target.value })}
          />
        </div>
      </div>

      <div className="filter-item">
        <label className="label">Product Category</label>
        <input
          className="input"
          type="text"
          placeholder="Clothing, Electronics..."
          value={filters.productCategory}
          onChange={(e) => onChange({ productCategory: e.target.value })}
        />
      </div>

      <div className="filter-item">
        <label className="label">Payment Method</label>
        <select
          className="input"
          value={filters.paymentMethod}
          onChange={(e) => onChange({ paymentMethod: e.target.value })}
        >
          <option value="">All</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="Cash">Cash</option>
          <option value="Online Payment">Online Payment</option>
        </select>
      </div>

      {/* ✅ SINGLE DATE FIELD ONLY */}
      <div className="filter-item filter-date">
        <label className="label">Date</label>
        <input
          className="input"
          type="date"
          value={filters.startDate}
          onChange={(e) =>
            onChange({ startDate: e.target.value, endDate: "" })
          }
        />
      </div>
    </div>
  );
}

export default FilterPanel;
