import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./DataTable.css";

function PaginationIconFirst() {
  return (
    <svg className="ui-datatable-page-btn__icon" viewBox="0 0 24 24" fill="none" aria-hidden>
      <polyline
        points="11 7 6 12 11 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="18 7 13 12 18 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PaginationIconPrev() {
  return (
    <svg className="ui-datatable-page-btn__icon" viewBox="0 0 24 24" fill="none" aria-hidden>
      <polyline
        points="15 18 9 12 15 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PaginationIconNext() {
  return (
    <svg className="ui-datatable-page-btn__icon" viewBox="0 0 24 24" fill="none" aria-hidden>
      <polyline
        points="9 18 15 12 9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PaginationIconLast() {
  return (
    <svg className="ui-datatable-page-btn__icon" viewBox="0 0 24 24" fill="none" aria-hidden>
      <polyline
        points="13 7 18 12 13 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="6 7 11 12 6 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Data table with columns and rows.
 * @param {Array<{ key: string, header: string }>} columns - Column definitions
 * @param {Array<object>} data - Array of row objects (keys match column.key)
 * @param {number} pageSize - Rows per page; omit or `0` to disable pagination
 * @param {number} [page] - Controlled current page (1-based); use with `onPageChange`
 * @param {number} [defaultPage=1] - Initial page when uncontrolled
 * @param {(page: number) => void} [onPageChange] - Controlled page change handler
 * @param {'md'|'sm'} size
 * @param {'default'|'dark'} variant
 * @param {false|'rows'|'columns'|'both'} striped
 * @param {'always'|'breakpoint'|false|'never'} responsive
 * @param {'sm'|'md'|'lg'|'xl'|'xxl'} responsiveBreakpoint
 * @param {string} className
 * @param {string} emptyMessage
 */
function DataTable({
  columns = [],
  data = [],
  className = "",
  emptyMessage = "No data",
  size = "md",
  variant = "default",
  striped = false,
  responsive = "always",
  responsiveBreakpoint = "md",
  pageSize = 0,
  page: pageProp,
  defaultPage = 1,
  onPageChange,
}) {
  const bpSet = new Set(["sm", "md", "lg", "xl", "xxl"]);
  const safeBreakpoint = bpSet.has(responsiveBreakpoint) ? responsiveBreakpoint : "md";

  const scrollNever = responsive === false || responsive === "never";
  const scrollBreakpoint = responsive === "breakpoint";
  const scrollAlways =
    !scrollNever && !scrollBreakpoint && (responsive === true || responsive === "always" || responsive == null);

  const scrollClass = scrollNever
    ? "ui-datatable--scroll-never"
    : scrollBreakpoint
      ? `ui-datatable--scroll-below-${safeBreakpoint}`
      : scrollAlways
        ? "ui-datatable--scroll-always"
        : "ui-datatable--scroll-always";

  const rootClass = [
    "ui-datatable",
    size === "sm" && "ui-datatable--sm",
    variant === "dark" && "ui-datatable--dark",
    striped === "rows" && "ui-datatable--striped-rows",
    striped === "columns" && "ui-datatable--striped-cols",
    striped === "both" && "ui-datatable--striped-rows ui-datatable--striped-cols",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const paginationEnabled = typeof pageSize === "number" && pageSize > 0;
  const totalRows = data.length;
  const totalPages = paginationEnabled ? Math.max(1, Math.ceil(totalRows / pageSize)) : 1;

  const controlled = typeof pageProp === "number" && typeof onPageChange === "function";
  const [internalPage, setInternalPage] = useState(() => Math.max(1, defaultPage));

  const rawPage = controlled ? pageProp : internalPage;
  const currentPage = Math.min(Math.max(1, Number(rawPage) || 1), totalPages);

  useEffect(() => {
    if (!paginationEnabled || controlled) return;
    setInternalPage((p) => Math.min(Math.max(1, p), totalPages));
  }, [paginationEnabled, controlled, totalPages]);

  const goToPage = useCallback(
    (next) => {
      const clamped = Math.min(Math.max(1, next), totalPages);
      if (controlled) onPageChange(clamped);
      else setInternalPage(clamped);
    },
    [controlled, onPageChange, totalPages]
  );

  const { visibleRows, rangeStart, rangeEnd } = useMemo(() => {
    if (!paginationEnabled) {
      return {
        visibleRows: data,
        rangeStart: totalRows > 0 ? 1 : 0,
        rangeEnd: totalRows,
      };
    }
    const start = (currentPage - 1) * pageSize;
    const end = Math.min(start + pageSize, totalRows);
    return {
      visibleRows: data.slice(start, end),
      rangeStart: totalRows === 0 ? 0 : start + 1,
      rangeEnd: end,
    };
  }, [data, paginationEnabled, pageSize, currentPage, totalRows]);

  const table = (body) => (
    <div className={["ui-datatable-scroll", scrollClass].filter(Boolean).join(" ")}>
      <table className="ui-datatable-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} scope="col" className="ui-datatable-th">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        {body}
      </table>
    </div>
  );

  const paginationNav =
    paginationEnabled && totalRows > 0 ? (
      <nav className="ui-datatable-pagination" aria-label="Table pagination">
        <p className="ui-datatable-pagination-summary">
          Showing <strong>{rangeStart}</strong>–<strong>{rangeEnd}</strong> of <strong>{totalRows}</strong>
        </p>
        <div className="ui-datatable-pagination-actions">
          <button
            type="button"
            className="ui-datatable-page-btn"
            onClick={() => goToPage(1)}
            disabled={currentPage <= 1}
            aria-label="First page"
            title="First page"
          >
            <PaginationIconFirst />
          </button>
          <button
            type="button"
            className="ui-datatable-page-btn"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage <= 1}
            aria-label="Previous page"
            title="Previous page"
          >
            <PaginationIconPrev />
          </button>
          <span className="ui-datatable-pagination-status" aria-live="polite">
            Page {currentPage} of {totalPages}
          </span>
          <button
            type="button"
            className="ui-datatable-page-btn"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage >= totalPages}
            aria-label="Next page"
            title="Next page"
          >
            <PaginationIconNext />
          </button>
          <button
            type="button"
            className="ui-datatable-page-btn"
            onClick={() => goToPage(totalPages)}
            disabled={currentPage >= totalPages}
            aria-label="Last page"
            title="Last page"
          >
            <PaginationIconLast />
          </button>
        </div>
      </nav>
    ) : null;

  if (!columns.length) {
    return (
      <div className={rootClass} role="region" aria-label="Data table">
        <p className="ui-datatable-empty">{emptyMessage}</p>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className={rootClass} role="region" aria-label="Data table">
        {table(
          <tbody>
            <tr>
              <td colSpan={columns.length} className="ui-datatable-empty-cell">
                {emptyMessage}
              </td>
            </tr>
          </tbody>
        )}
      </div>
    );
  }

  return (
    <div className={rootClass} role="region" aria-label="Data table">
      {table(
        <tbody>
          {visibleRows.map((row, rowIndex) => {
            const globalIndex = paginationEnabled ? (currentPage - 1) * pageSize + rowIndex : rowIndex;
            return (
              <tr key={row.id != null ? String(row.id) : `row-${globalIndex}`} className="ui-datatable-tr">
                {columns.map((col) => (
                  <td key={col.key} className="ui-datatable-td">
                    {row[col.key] ?? ""}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      )}
      {paginationNav}
    </div>
  );
}

export default DataTable;
