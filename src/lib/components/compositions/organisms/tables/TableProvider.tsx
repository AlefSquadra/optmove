import { ReactNode, useState } from "react";
import { SortState, TableContext } from "./TableContext";

export interface TableProviderProps {
  children: ReactNode;
}

export const TableProvider = ({ children }: TableProviderProps) => {
  const [sortState, setSortState] = useState<SortState[]>([]);
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  const toggleSort = (accessor: string) => {
    setSortState((prev) => {
      const existing = prev.find((s) => s.accessor === accessor);
      const newOrder = existing?.order === "asc" ? "desc" : "asc";
      return [{ accessor, order: newOrder || "asc" }];
    });
  };

  const toggleRow = (id: string) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <TableContext.Provider value={{ sortState, toggleSort, expandedRows, toggleRow }}>{children}</TableContext.Provider>
  );
};
