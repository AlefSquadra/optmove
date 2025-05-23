import { GetProp, TableProps } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { ColumnsType } from "antd/es/table";

export type OptTableSizeType = TableProps["size"];
export type OptTableColumnsType<T extends object> = GetProp<TableProps<T>, "columns">;
export type OptTablePagination<T extends object> = NonNullable<Exclude<TableProps<T>["pagination"], boolean>>;
export type OptTablePaginationPosition = NonNullable<OptTablePagination<any>["position"]>[number];
export type OptTableExpandableConfig<T extends object> = TableProps<T>["expandable"];
export type OptTableRowSelection<T extends object> = TableProps<T>["rowSelection"];

export interface OptTableRef<T extends object> {
  setData: (data: T[]) => void;
  getData: () => T[];
  addRow: (row: T) => void;
  removeRow: (key: any) => void;
  updateRow: (key: any, updates: Partial<T>) => void;
  clearData: () => void;

  getSelectedRows: () => T[];
  getSelectedKeys: () => React.Key[];
  setSelectedKeys: (keys: React.Key[]) => void;
  clearSelection: () => void;
  selectAll: () => void;

  expandAll: () => void;
  collapseAll: () => void;
  expandRow: (key: React.Key) => void;
  collapseRow: (key: React.Key) => void;

  setLoading: (loading: boolean) => void;
  setEllipsis: (element: boolean) => void;
  getLoading: () => boolean;

  setColumns: (columns: ColumnsType<T>) => void;
  setSize: (size: SizeType) => void;
  setPagination: (pagination: TableProps<T>["pagination"]) => void;

  refresh: () => void;
}

export interface OptTableProps<T extends object> extends Omit<TableProps<T>, "dataSource" | "columns"> {
  dataSource?: T[];
  columns?: ColumnsType<T>;
  onDataChange?: (data: T[]) => void;
  onSelectionChange?: (selectedKeys: React.Key[], selectedRows: T[]) => void;
  showControls?: boolean;
  resizableColumns?: boolean;
  defaultSettings?: {
    bordered?: boolean;
    loading?: boolean;
    size?: SizeType;
    showTitle?: boolean;
    showHeader?: boolean;
    showFooter?: boolean;
    ellipsis?: boolean;
    rowSelection?: boolean;
    yScroll?: boolean;
    xScroll?: string;
    tableLayout?: string;
    paginationTop?: OptTablePaginationPosition;
    paginationBottom?: OptTablePaginationPosition;
  };
  customTitle?: () => React.ReactNode;
  customFooter?: () => React.ReactNode;
}
