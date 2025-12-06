function SearchBar({ value, onChange }) {
  return (
    <div className="search-inline">
      <span className="search-icon">🔍</span>
      <input
        className="input search-input has-icon"
        type="text"
        placeholder="Name, Phone no."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
