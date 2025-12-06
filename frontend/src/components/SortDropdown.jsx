function SortDropdown({ value, onChange }) {
  return (
    <div className="card sort-card">
      <label className="label">Sort By</label>
      <select
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="date_desc">Date (Newest first)</option>
        <option value="quantity">Quantity</option>
        <option value="name_asc">Customer Name (A–Z)</option>
      </select>
    </div>
  );
}

export default SortDropdown;
