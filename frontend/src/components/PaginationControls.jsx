function PaginationControls({ page, totalPages, total, onPageChange }) {
  if (!totalPages || totalPages === 0) return null;

  return (
    <div className="pagination">
      <span>
        Page <strong>{page}</strong> of <strong>{totalPages}</strong> —{" "}
        <strong>{total}</strong> records
      </span>
      <div className="pagination-buttons">
        <button
          className="btn"
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
        >
          Previous
        </button>
        <button
          className="btn"
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginationControls;
