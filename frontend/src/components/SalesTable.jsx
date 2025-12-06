function formatDate(d) {
  if (!d) return "";
  try {
    return new Date(d).toLocaleDateString();
  } catch {
    return d;
  }
}

function SalesTable({ rows }) {
  if (!rows || rows.length === 0) {
    return <div className="info-msg">No records found.</div>;
  }

  return (
    <div className="card table-card">
      <table className="sales-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Customer</th>
            <th>Phone</th>
            <th>Region</th>
            <th>Product</th>
            <th>Category</th>
            <th>Qty</th>
            <th>Final Amount</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td>{formatDate(row.date)}</td>
              <td>{row.customerName}</td>
              <td>{row.phone}</td>
              <td>{row.customerRegion}</td>
              <td>{row.productName}</td>
              <td>{row.productCategory}</td>
              <td>{row.quantity}</td>
              <td>{row.finalAmount}</td>
              <td>{row.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
