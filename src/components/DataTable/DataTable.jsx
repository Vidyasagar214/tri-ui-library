import React from "react";
import "./DataTable.css";

/**
 * Data table with columns and rows.
 * @param {Array<{ key: string, header: string }>} columns - Column definitions
 * @param {Array<object>} data - Array of row objects (keys match column.key)
 * @param {string} className
 * @param {string} emptyMessage - Message when no data
 */
function DataTable({
  columns = [],
  data = [],
  className = "",
  emptyMessage = "No data",
}) {
  const classNames = ["ui-datatable", className].filter(Boolean).join(" ");

  if (!columns.length) {
    return (
      <div className={classNames} role="region" aria-label="Data table">
        <p className="ui-datatable-empty">{emptyMessage}</p>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className={classNames} role="region" aria-label="Data table">
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
          <tbody>
            <tr>
              <td colSpan={columns.length} className="ui-datatable-empty-cell">
                {emptyMessage}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className={classNames} role="region" aria-label="Data table">
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
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="ui-datatable-tr">
              {columns.map((col) => (
                <td key={col.key} className="ui-datatable-td">
                  {row[col.key] ?? ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
