import { createContext, useContext } from "react";

export interface SortState {
  accessor: string;
  order: "asc" | "desc";
}

export interface TableContextProps {
  sortState: SortState[];
  toggleSort: (accessor: string) => void;
  expandedRows: Record<string, boolean>;
  toggleRow: (id: string) => void;
}

export const TableContext = createContext<TableContextProps | undefined>(undefined);

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTableContext must be used within a TableProvider");
  }
  return context;
};
