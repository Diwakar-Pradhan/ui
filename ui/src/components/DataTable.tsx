import React, { useState } from "react";

export interface Column<T> {
  key: keyof T;
  label: string;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });

  // Sorting logic
  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.key!];
      const bVal = b[sortConfig.key!];
      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const handleSort = (key: keyof T) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

  const handleRowSelect = (row: T) => {
    let newSelected: T[];
    if (selectedRows.includes(row)) {
      newSelected = selectedRows.filter((r) => r !== row);
    } else {
      newSelected = [...selectedRows, row];
    }
    setSelectedRows(newSelected);
    onRowSelect?.(newSelected);
  };

  if (loading) {
    return <p className="p-4 text-gray-600 font-medium">Loading...</p>;
  }

  if (!data.length) {
    return <p className="p-4 text-gray-500 italic">No data available</p>;
  }

  return (
    <div className="overflow-x-auto border rounded-lg shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            {selectable && <th className="p-2"></th>}
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="p-3 text-left font-medium text-gray-700 uppercase tracking-wider"
              >
                <button
                  onClick={() => handleSort(col.key)}
                  className="flex items-center gap-1 focus:outline-none cursor-pointer"
                >
                  {col.label}
                  {sortConfig.key === col.key ? (
                    sortConfig.direction === "asc" ? (
                      <span>▲</span>
                    ) : (
                      <span>▼</span>
                    )
                  ) : (
                    <span className="text-gray-400">▲▼</span>
                  )}
                </button>
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {sortedData.map((row) => (
            <tr
              key={row.id}
              className={`hover:bg-gray-50 ${
                selectedRows.includes(row) ? "bg-blue-50" : ""
              }`}
            >
              {selectable && (
                <td className="p-2 text-center">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row)}
                    onChange={() => handleRowSelect(row)}
                    className="cursor-pointer"
                  />
                </td>
              )}
              {columns.map((col) => (
                <td key={String(col.key)} className="p-3 text-left text-gray-700">
                  {String(row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
