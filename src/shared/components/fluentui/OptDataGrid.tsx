import {
  DataGrid,
  type DataGridProps,
  DataGridBody,
  type DataGridBodyProps,
  DataGridCell,
  type DataGridCellProps,
  DataGridHeader,
  type DataGridHeaderProps,
  DataGridHeaderCell,
  type DataGridHeaderCellProps,
  DataGridRow,
  type DataGridRowProps,
  TableCellLayout,
  type TableCellLayoutProps,
  createTableColumn,
  type TableColumnDefinition,
  type TableRowId,
} from "@fluentui/react-components";

// Re-export types for convenience
export type OptDataGridProps = DataGridProps;
export type OptTableColumnDefinition<T> = TableColumnDefinition<T>;
export type OptTableRowId = TableRowId;

// Custom types based on DataGrid usage
export type OnSelectionChangeData = {
  selectedItems: Set<TableRowId>;
};

const OptDataGrid = (props: DataGridProps) => {
  return <DataGrid {...props} />;
};

const OptDataGridBody = (props: DataGridBodyProps) => {
  return <DataGridBody {...props} />;
};

const OptDataGridCell = (props: DataGridCellProps) => {
  return <DataGridCell {...props} />;
};

const OptDataGridHeader = (props: DataGridHeaderProps) => {
  return <DataGridHeader {...props} />;
};

const OptDataGridHeaderCell = (props: DataGridHeaderCellProps) => {
  return <DataGridHeaderCell {...props} />;
};

const OptDataGridRow = (props: DataGridRowProps) => {
  return <DataGridRow {...props} />;
};

const OptTableCellLayout = (props: TableCellLayoutProps) => {
  return <TableCellLayout {...props} />;
};

const optCreateTableColumn = createTableColumn;

export {
  OptDataGrid,
  OptDataGridBody,
  OptDataGridCell,
  OptDataGridHeader,
  OptDataGridHeaderCell,
  OptDataGridRow,
  OptTableCellLayout,
  optCreateTableColumn,
};
