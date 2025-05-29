import { FilterOutlined } from "@ant-design/icons";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

export interface IOptDataGridRow {
  id: number;
  [key: string]: any;
}

export interface IOptDataGridColumn {
  field: string;
  headerName: string;
  width: string | number;
  editable?: boolean;
  sortable?: boolean;
  type?: "string" | "number" | "boolean" | "date";
  valueGetter?: (row: IOptDataGridRow) => any;
  valueFormatter?: (value: any) => string;
  renderCell?: (params: { row: IOptDataGridRow; value: any; field: string }) => React.ReactNode;
}

interface ColumnFilter {
  field: string;
  value: string;
  operator: "contains" | "equals" | "startsWith" | "endsWith" | "greaterThan" | "lessThan";
}

interface GroupNode {
  key: string;
  children: IOptDataGridRow[] | GroupNode[];
}

interface ResizeState {
  isResizing: boolean;
  columnIndex: number;
  startX: number;
  startWidths: (string | number)[];
  tableWidth: number;
}

interface DataGridLabels {
  resizableColumns?: string;
  resizeMode?: string;
  resizeModeFit?: string;
  resizeModeExpand?: string;
  resizeModeDescription?: string;
  resizeModeDescriptionFit?: string;
  resizeModeDescriptionExpand?: string;
  dragColumnsToGroup?: string;
  filtersActive?: string;
  rowsPerPage?: string;
  showing?: string;
  of?: string;
  lines?: string;
  sortAsc?: string;
  sortDesc?: string;
  filter?: string;
  editFilter?: string;
  removeFilter?: string;
  filterCondition?: string;
  filterValue?: string;
  cancel?: string;
  clear?: string;
  apply?: string;
  contains?: string;
  equals?: string;
  startsWith?: string;
  endsWith?: string;
  greaterThan?: string;
  lessThan?: string;
  columnOptions?: string;
  resizeColumn?: string;
}

interface DataGridProps {
  rows: IOptDataGridRow[];
  columns: IOptDataGridColumn[];

  // Configurações básicas
  pageSize?: number;
  checkboxSelection?: boolean;
  disableColumnMenu?: boolean;
  disableColumnFilter?: boolean;
  disableColumnSort?: boolean;
  disableRowSelection?: boolean;

  // Configurações de paginação
  hasPagination?: boolean;

  // Configurações de redimensionamento
  resizable?: boolean;
  resizeMode?: "fit" | "expand";
  showResizeControls?: boolean;

  // Configurações de agrupamento
  groupBy?: string[];
  disableGrouping?: boolean;

  // Configurações visuais
  height?: number | string;
  className?: string;
  headerClassName?: string;
  rowClassName?: string | ((row: IOptDataGridRow) => string);
  cellClassName?: string | ((params: { row: IOptDataGridRow; field: string; value: any }) => string);

  // Labels e textos (para internacionalização)
  labels?: DataGridLabels;

  // Callbacks
  onRowEdit?: (id: number, field: string, value: any, row: IOptDataGridRow) => void;
  onRowSelect?: (selectedIds: number[]) => void;
  onRowSelectionChange?: (selection: { selected: Set<number>; rows: IOptDataGridRow[] }) => void;
  onSort?: (field: string, direction: "asc" | "desc" | null) => void;
  onFilter?: (filters: Record<string, ColumnFilter>) => void;
  onGroupBy?: (fields: string[]) => void;
  onColumnResize?: (columns: IOptDataGridColumn[]) => void;
  onCellClick?: (params: { row: IOptDataGridRow; field: string; value: any; event: React.MouseEvent }) => void;
  onCellDoubleClick?: (params: { row: IOptDataGridRow; field: string; value: any; event: React.MouseEvent }) => void;
  onRowClick?: (params: { row: IOptDataGridRow; event: React.MouseEvent }) => void;
  onRowDoubleClick?: (params: { row: IOptDataGridRow; event: React.MouseEvent }) => void;

  // Estados controlados externamente (opcional)
  selectedRows?: Set<number>;
  sortModel?: { field: string; sort: "asc" | "desc" } | null;
  filterModel?: Record<string, ColumnFilter>;
  groupModel?: string[];
  columnModel?: IOptDataGridColumn[];

  // Controle de loading e estados
  loading?: boolean;
  loadingComponent?: React.ReactNode;
  noRowsComponent?: React.ReactNode;

  // Customizações avançadas
  components?: {
    Checkbox?: React.ComponentType<any>;
    Pagination?: React.ComponentType<any>;
    ColumnMenu?: React.ComponentType<any>;
    FilterMenu?: React.ComponentType<any>;
    GroupHeader?: React.ComponentType<any>;
  };

  // Slots para customização
  slots?: {
    toolbar?: React.ReactNode;
    footer?: React.ReactNode;
    noRowsOverlay?: React.ReactNode;
    loadingOverlay?: React.ReactNode;
  };
}

const defaultLabels: Required<DataGridLabels> = {
  resizableColumns: "Colunas Redimensionáveis",
  resizeMode: "Modo de Redimensionamento:",
  resizeModeFit: "Fit (ajustar)",
  resizeModeExpand: "Expand (expandir)",
  resizeModeDescription: "Modo de redimensionamento",
  resizeModeDescriptionFit: "Redimensionar uma coluna ajusta as outras para manter a largura total",
  resizeModeDescriptionExpand: "Redimensionar uma coluna altera a largura total da tabela",
  dragColumnsToGroup: "Arraste colunas aqui para agrupar",
  filtersActive: "filtro(s) ativo(s)",
  rowsPerPage: "Linhas por página:",
  showing: "Mostrando",
  of: "de",
  lines: "linhas",
  sortAsc: "Ordenar ASC",
  sortDesc: "Ordenar DESC",
  filter: "Filtrar",
  editFilter: "Editar Filtro",
  removeFilter: "Remover Filtro",
  filterCondition: "Condição",
  filterValue: "Valor",
  cancel: "Cancelar",
  clear: "Limpar",
  apply: "Aplicar",
  contains: "contém",
  equals: "igual a",
  startsWith: "começa com",
  endsWith: "termina com",
  greaterThan: "maior que",
  lessThan: "menor que",
  columnOptions: "Opções da coluna",
  resizeColumn: "Redimensionar coluna",
};

export default function DataGrid({
  rows: initialRows = [],
  columns: initialColumns = [],
  pageSize = 10,
  checkboxSelection = true,
  disableColumnMenu = false,
  disableColumnFilter = false,
  disableColumnSort = false,
  disableRowSelection = false,
  hasPagination = false,
  resizable = true,
  resizeMode = "fit",
  showResizeControls = false,
  groupBy = [],
  disableGrouping = true,
  height = 400,
  className = "",
  headerClassName = "",
  rowClassName = "",
  cellClassName = "",
  labels = {},
  onRowEdit,
  onRowSelect,
  onRowSelectionChange,
  onSort,
  onFilter,
  onGroupBy,
  onColumnResize,
  onCellClick,
  onCellDoubleClick,
  onRowClick,
  onRowDoubleClick,
  selectedRows: controlledSelectedRows,
  sortModel: controlledSortModel,
  filterModel: controlledFilterModel,
  groupModel: controlledGroupModel,
  columnModel: controlledColumnModel,
  loading = false,
  loadingComponent,
  noRowsComponent,
  components = {},
  slots = {},
}: DataGridProps) {
  // Merge labels com defaults
  const mergedLabels = { ...defaultLabels, ...labels };

  // Estados internos ou controlados
  const [internalColumns, setInternalColumns] = useState<IOptDataGridColumn[]>(initialColumns || []);
  const [internalRows, setInternalRows] = useState<IOptDataGridRow[]>(initialRows || []);
  const [internalSelectedRows, setInternalSelectedRows] = useState<Set<number>>(new Set());
  const [internalSortField, setInternalSortField] = useState<string | null>(null);
  const [internalSortDirection, setInternalSortDirection] = useState<"asc" | "desc">("asc");
  const [internalFilters, setInternalFilters] = useState<Record<string, ColumnFilter>>({});
  const [internalGroupByColumns, setInternalGroupByColumns] = useState<string[]>(groupBy || []);

  // Estados sempre internos
  const [currentPage, setCurrentPage] = useState(0);
  const [editingCell, setEditingCell] = useState<{ rowId: number; field: string } | null>(null);
  const [editValue, setEditValue] = useState<string>("");
  const [activeColumnMenu, setActiveColumnMenu] = useState<string | null>(null);
  const [activeFilterMenu, setActiveFilterMenu] = useState<{ field: string; x: number; y: number } | null>(null);
  const [tempFilterValue, setTempFilterValue] = useState<string>("");
  const [tempFilterOperator, setTempFilterOperator] = useState<ColumnFilter["operator"]>("contains");
  const [resizeState, setResizeState] = useState<ResizeState | null>(null);
  const [internalResizable, setInternalResizable] = useState<boolean>(resizable);
  const [internalResizeMode, setInternalResizeMode] = useState<"fit" | "expand">(resizeMode);

  const tableRef = useRef<HTMLTableElement>(null);

  // Usar estados controlados se fornecidos, senão usar internos
  const columns = controlledColumnModel || internalColumns || [];
  const rows = internalRows || [];
  const selectedRows = controlledSelectedRows || internalSelectedRows || new Set();
  const sortField = controlledSortModel?.field || internalSortField;
  const sortDirection = controlledSortModel?.sort || internalSortDirection;
  const filters = controlledFilterModel || internalFilters || {};
  const groupByColumns = controlledGroupModel || internalGroupByColumns || [];

  useEffect(() => {
    if (Array.isArray(initialRows) && initialRows !== internalRows) {
      setInternalRows(initialRows);
    }
  }, [initialRows]);

  // Função auxiliar para converter width para pixels
  const convertWidthToPixels = useCallback((width: string | number, tableWidth: number): number => {
    if (typeof width === "number") return width;

    if (typeof width === "string") {
      if (width.endsWith("%")) {
        const percentage = parseFloat(width) / 100;
        return tableWidth * percentage;
      }
      if (width.endsWith("px")) {
        return parseFloat(width);
      }
      if (width === "auto") {
        return 100; // valor padrão para auto
      }
      // Tenta converter string para número
      const numValue = parseFloat(width);
      return isNaN(numValue) ? 100 : numValue;
    }

    return 100; // valor padrão
  }, []);

  // Função auxiliar para obter a largura total da tabela
  const getTableWidth = useCallback(() => {
    if (tableRef.current) {
      return tableRef.current.offsetWidth;
    }
    return 800; // valor padrão
  }, []);

  // Função para agrupar os dados
  const groupData = useCallback(
    (data: IOptDataGridRow[], groupBy: string[]): IOptDataGridRow[] | GroupNode[] => {
      if (!Array.isArray(data) || !Array.isArray(groupBy) || groupBy.length === 0) return data || [];

      const groupByField = groupBy[0];
      const grouped = data.reduce(
        (acc, row) => {
          if (!row) return acc;

          const column = columns.find((col) => col && col.field === groupByField);
          let key = column?.valueGetter ? column.valueGetter(row) : String(row[groupByField] || "");
          if (column?.valueFormatter) {
            key = column.valueFormatter(key);
          }
          if (!acc[key]) acc[key] = [];
          acc[key].push(row);
          return acc;
        },
        {} as Record<string, IOptDataGridRow[]>,
      );

      return Object.entries(grouped).map(([key, rows]) => ({
        key,
        children: groupData(rows, groupBy.slice(1)),
      }));
    },
    [columns],
  );

  // Filtragem
  const filteredRows = useMemo(() => {
    if (!rows || !Array.isArray(rows)) return [];

    return rows.filter((row) => {
      if (!filters || typeof filters !== "object") return true;

      return Object.values(filters).every((filter) => {
        if (!filter || !filter.value) return true;

        const column = columns.find((col) => col && col.field === filter.field);
        let cellValue = column?.valueGetter ? column.valueGetter(row) : row[filter.field];

        if (column?.valueFormatter) {
          cellValue = column.valueFormatter(cellValue);
        }

        const stringValue = String(cellValue || "").toLowerCase();
        const filterValue = String(filter.value || "").toLowerCase();

        switch (filter.operator) {
          case "contains":
            return stringValue.includes(filterValue);
          case "equals":
            return stringValue === filterValue;
          case "startsWith":
            return stringValue.startsWith(filterValue);
          case "endsWith":
            return stringValue.endsWith(filterValue);
          case "greaterThan":
            return Number(cellValue) > Number(filter.value);
          case "lessThan":
            return Number(cellValue) < Number(filter.value);
          default:
            return true;
        }
      });
    });
  }, [rows, filters, columns]);

  // Ordenação
  const sortedRows = useMemo(() => {
    if (!sortField || !Array.isArray(filteredRows)) return filteredRows;

    return [...filteredRows].sort((a, b) => {
      const column = columns.find((col) => col && col.field === sortField);
      let aValue = column?.valueGetter ? column.valueGetter(a) : a[sortField];
      let bValue = column?.valueGetter ? column.valueGetter(b) : b[sortField];

      if (column?.valueFormatter) {
        aValue = column.valueFormatter(aValue);
        bValue = column.valueFormatter(bValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
      }

      return sortDirection === "asc" ?
          String(aValue || "").localeCompare(String(bValue || ""))
        : String(bValue || "").localeCompare(String(aValue || ""));
    });
  }, [filteredRows, sortField, sortDirection, columns]);

  // Dados agrupados
  const groupedData = useMemo(() => groupData(sortedRows, groupByColumns), [sortedRows, groupByColumns, groupData]);

  // Função para achatar os dados agrupados
  const flattenGroupedData = useCallback((data: IOptDataGridRow[] | GroupNode[]): IOptDataGridRow[] => {
    if (!Array.isArray(data)) return [];

    return (data as IOptDataGridRow[]).reduce((acc, item) => {
      if (!item) return acc;

      if ("children" in item && item.children) {
        return [...acc, ...flattenGroupedData(item.children)];
      }
      return [...acc, item];
    }, [] as IOptDataGridRow[]);
  }, []);

  // Dados finais para renderização (com ou sem paginação)
  const displayedRows = useMemo(() => {
    const flatRows = flattenGroupedData(groupedData);

    if (!hasPagination) {
      return flatRows;
    }

    const start = currentPage * pageSize;
    return flatRows.slice(start, start + pageSize);
  }, [groupedData, currentPage, pageSize, hasPagination, flattenGroupedData]);

  const totalItems = flattenGroupedData(groupedData || []).length;
  const totalPages = Math.ceil(totalItems / pageSize);

  // Função para iniciar o redimensionamento de coluna
  const handleResizeStart = useCallback(
    (e: React.MouseEvent, columnIndex: number) => {
      if (!internalResizable) return;

      e.preventDefault();
      const startX = e.clientX;
      const tableWidth = getTableWidth();
      const startWidths = columns.map((col) => col.width);

      setResizeState({
        isResizing: true,
        columnIndex,
        startX,
        startWidths,
        tableWidth,
      });
    },
    [internalResizable, columns, getTableWidth],
  );

  // Função para processar o redimensionamento
  const handleResize = useCallback(
    (e: MouseEvent) => {
      if (!resizeState) return;

      const deltaX = e.clientX - resizeState.startX;
      const newWidths = [...resizeState.startWidths];
      const minWidth = 50;
      const tableWidth = resizeState.tableWidth;

      if (internalResizeMode === "fit") {
        // No modo fit, mantemos a largura total da tabela fixa
        const currentPixelWidth = convertWidthToPixels(resizeState.startWidths[resizeState.columnIndex], tableWidth);
        const newPixelWidth = Math.max(minWidth, currentPixelWidth + deltaX);
        const widthDiff = newPixelWidth - currentPixelWidth;

        // Ajusta a coluna sendo redimensionada
        newWidths[resizeState.columnIndex] = newPixelWidth;

        // Distribui a diferença entre as outras colunas
        if (widthDiff !== 0 && columns.length > 1) {
          const otherColumnsCount = columns.length - 1;
          const adjustmentPerColumn = -widthDiff / otherColumnsCount;

          for (let i = 0; i < columns.length; i++) {
            if (i !== resizeState.columnIndex) {
              const currentOtherWidth = convertWidthToPixels(newWidths[i], tableWidth);
              const newOtherWidth = Math.max(minWidth, currentOtherWidth + adjustmentPerColumn);
              newWidths[i] = newOtherWidth;
            }
          }
        }
      } else {
        // No modo expand, apenas ajusta a coluna atual
        const currentPixelWidth = convertWidthToPixels(resizeState.startWidths[resizeState.columnIndex], tableWidth);
        const newPixelWidth = Math.max(minWidth, currentPixelWidth + deltaX);
        newWidths[resizeState.columnIndex] = newPixelWidth;
      }

      const newColumns = columns.map((col, index) => ({
        ...col,
        width: newWidths[index],
      }));

      if (controlledColumnModel) {
        onColumnResize?.(newColumns);
      } else {
        setInternalColumns(newColumns);
      }
    },
    [resizeState, internalResizeMode, columns, controlledColumnModel, onColumnResize, convertWidthToPixels],
  );

  // Função para finalizar o redimensionamento
  const handleResizeEnd = useCallback(() => {
    setResizeState(null);
  }, []);

  // Event listeners para o redimensionamento
  useEffect(() => {
    if (resizeState?.isResizing) {
      document.addEventListener("mousemove", handleResize);
      document.addEventListener("mouseup", handleResizeEnd);

      return () => {
        document.removeEventListener("mousemove", handleResize);
        document.removeEventListener("mouseup", handleResizeEnd);
      };
    }
  }, [resizeState?.isResizing, handleResize, handleResizeEnd]);

  // Função para renderizar linhas agrupadas
  const renderGroupedRows = useCallback(
    (data: IOptDataGridRow[] | GroupNode[], level = 0): JSX.Element[] => {
      return data.map((item, index) => (
        <React.Fragment key={index}>
          {"key" in item ?
            <>
              <tr className={`bg-gray-100 ${level > 0 ? `pl-${level * 4}` : ""}`}>
                <td
                  colSpan={columns.length + (checkboxSelection ? 1 : 0)}
                  className="border-r border-gray-100 p-2 font-semibold text-gray-700"
                >
                  {components.GroupHeader ?
                    <components.GroupHeader groupKey={item.key} level={level} />
                  : item.key}
                </td>
              </tr>
              {renderGroupedRows(item.children, level + 1)}
            </>
          : <tr
              className={`hover:bg-gray-50 ${typeof rowClassName === "function" ? rowClassName(item) : rowClassName}`}
              onClick={(e) => onRowClick?.({ row: item, event: e })}
              onDoubleClick={(e) => onRowDoubleClick?.({ row: item, event: e })}
            >
              {checkboxSelection && (
                <td className="w-12 border-r border-gray-100 px-3 py-2">
                  {components.Checkbox ?
                    <components.Checkbox
                      checked={selectedRows.has(item.id)}
                      onChange={(checked: boolean) => handleSelectRow(item.id, checked)}
                    />
                  : <input
                      type="checkbox"
                      checked={selectedRows?.has(item.id) || false}
                      onChange={(e) => handleSelectRow(item.id, e.target.checked)}
                      className="rounded border-gray-300"
                    />
                  }
                </td>
              )}
              {columns.map((column) => (
                <td
                  key={column.field}
                  className={`border-r border-gray-100 px-3 py-2 text-sm text-gray-900 ${
                    typeof cellClassName === "function" ?
                      cellClassName({ row: item, field: column.field, value: getCellValue(item, column) })
                    : cellClassName
                  }`}
                  style={{
                    width: column.width,
                    minWidth: typeof column.width === "number" ? `${column.width}px` : column.width,
                    maxWidth: typeof column.width === "number" ? `${column.width}px` : column.width,
                  }}
                  onClick={(e) =>
                    onCellClick?.({ row: item, field: column.field, value: getCellValue(item, column), event: e })
                  }
                  onDoubleClick={(e) => {
                    onCellDoubleClick?.({
                      row: item,
                      field: column.field,
                      value: getCellValue(item, column),
                      event: e,
                    });
                    handleCellDoubleClick(item.id, column.field, getCellValue(item, column));
                  }}
                >
                  {editingCell?.rowId === item.id && editingCell?.field === column.field ?
                    <input
                      type={column.type === "number" ? "number" : "text"}
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={() => handleCellEdit(item.id, column.field, editValue)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleCellEdit(item.id, column.field, editValue);
                        else if (e.key === "Escape") setEditingCell(null);
                      }}
                      className="w-full rounded border border-blue-500 px-1 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      autoFocus
                    />
                  : column.renderCell ?
                    column.renderCell({ row: item, value: getCellValue(item, column), field: column.field })
                  : <span
                      className={`block truncate ${column.editable ? "cursor-pointer" : ""}`}
                      title={String(getCellValue(item, column))}
                    >
                      {column.valueFormatter ?
                        column.valueFormatter(getCellValue(item, column))
                      : getCellValue(item, column)}
                    </span>
                  }
                </td>
              ))}
            </tr>
          }
        </React.Fragment>
      ));
    },
    [
      columns,
      checkboxSelection,
      rowClassName,
      cellClassName,
      selectedRows,
      editingCell,
      editValue,
      components,
      onRowClick,
      onRowDoubleClick,
      onCellClick,
      onCellDoubleClick,
    ],
  );

  const handleSort = (field: string, direction?: "asc" | "desc") => {
    const column = columns.find((col) => col.field === field);
    if (column?.sortable === false || disableColumnSort) return;

    const newDirection = direction || (sortField === field && sortDirection === "asc" ? "desc" : "asc");

    if (controlledSortModel) {
      onSort?.(field, newDirection);
    } else {
      setInternalSortField(field);
      setInternalSortDirection(newDirection);
    }

    setActiveColumnMenu(null);
  };

  const handleSelectAll = (checked: boolean) => {
    if (disableRowSelection) return;

    const flatRows = flattenGroupedData(groupedData || []);
    const newSelected =
      checked ? new Set(flatRows.map((row) => row.id).filter((id) => id !== undefined)) : new Set<number>();

    if (controlledSelectedRows) {
      onRowSelectionChange?.({ selected: newSelected, rows: flatRows });
    } else {
      setInternalSelectedRows(newSelected);
    }

    onRowSelect?.(Array.from(newSelected));
  };

  const handleSelectRow = (id: number, checked: boolean) => {
    if (disableRowSelection || id === undefined) return;

    const newSelected = new Set(selectedRows || new Set<number>());
    if (checked) newSelected.add(id);
    else newSelected.delete(id);

    if (controlledSelectedRows) {
      const flatRows = flattenGroupedData(groupedData || []);
      onRowSelectionChange?.({ selected: newSelected, rows: flatRows });
    } else {
      setInternalSelectedRows(newSelected);
    }

    onRowSelect?.(Array.from(newSelected));
  };

  const handleCellDoubleClick = (rowId: number, field: string, currentValue: any) => {
    const column = columns.find((col) => col.field === field);
    if (column?.editable) {
      setEditingCell({ rowId, field });
      setEditValue(currentValue?.toString() || "");
    }
  };

  const handleCellEdit = (rowId: number, field: string, value: string) => {
    const column = columns.find((col) => col.field === field);
    let parsedValue: any = value;

    if (column?.type === "number") {
      parsedValue = value === "" ? null : Number(value);
    } else if (column?.type === "boolean") {
      parsedValue = value === "true";
    }

    const row = rows.find((r) => r.id === rowId);
    if (row) {
      onRowEdit?.(rowId, field, parsedValue, { ...row, [field]: parsedValue });
    }

    setEditingCell(null);
  };

  const getCellValue = (row: IOptDataGridRow, column: IOptDataGridColumn) => {
    if (!row || !column) return "";

    if (column.valueGetter) return column.valueGetter(row);
    const value = row[column.field];
    return value === null || value === undefined ? "" : value;
  };

  const openFilterMenu = (field: string, event: React.MouseEvent) => {
    if (disableColumnFilter) return;

    event.preventDefault();
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    const column = columns.find((col) => col.field === field);
    const existingFilter = filters[field];
    setTempFilterValue(existingFilter?.value || "");
    setTempFilterOperator(existingFilter?.operator || (column?.type === "number" ? "equals" : "contains"));
    setActiveColumnMenu(null);
    setActiveFilterMenu({ field, x: rect.left, y: rect.bottom + 4 });
  };

  const applyFilter = () => {
    if (!activeFilterMenu) return;

    const newFilters = { ...filters };

    if (tempFilterValue.trim()) {
      newFilters[activeFilterMenu.field] = {
        field: activeFilterMenu.field,
        value: tempFilterValue,
        operator: tempFilterOperator,
      };
    } else {
      delete newFilters[activeFilterMenu.field];
    }

    if (controlledFilterModel) {
      onFilter?.(newFilters);
    } else {
      setInternalFilters(newFilters);
    }

    setActiveFilterMenu(null);
  };

  const removeFilter = (field: string) => {
    const newFilters = { ...filters };
    delete newFilters[field];

    if (controlledFilterModel) {
      onFilter?.(newFilters);
    } else {
      setInternalFilters(newFilters);
    }

    setActiveFilterMenu(null);
  };

  const handleGroupByChange = (newGroupBy: string[]) => {
    if (disableGrouping) return;

    if (controlledGroupModel) {
      onGroupBy?.(newGroupBy);
    } else {
      setInternalGroupByColumns(newGroupBy);
    }
  };

  const getOperatorLabel = (operator: string) => {
    const operatorMap: Record<string, string> = {
      contains: mergedLabels.contains,
      equals: mergedLabels.equals,
      startsWith: mergedLabels.startsWith,
      endsWith: mergedLabels.endsWith,
      greaterThan: mergedLabels.greaterThan,
      lessThan: mergedLabels.lessThan,
    };
    return operatorMap[operator] || mergedLabels.contains;
  };

  const getOperatorOptions = (columnType?: string) => {
    const baseOptions = [
      { value: "contains", label: mergedLabels.contains },
      { value: "equals", label: mergedLabels.equals },
      { value: "startsWith", label: mergedLabels.startsWith },
      { value: "endsWith", label: mergedLabels.endsWith },
    ];

    return columnType === "number" ?
        [
          ...baseOptions,
          { value: "greaterThan", label: mergedLabels.greaterThan },
          { value: "lessThan", label: mergedLabels.lessThan },
        ]
      : baseOptions;
  };

  const allSelected = totalItems > 0 && (selectedRows?.size || 0) === totalItems;
  const someSelected = (selectedRows?.size || 0) > 0 && (selectedRows?.size || 0) < totalItems;

  if (loading) {
    return (
      <div className={`space-y-4 ${className}`}>
        {loadingComponent || (
          <div className="flex items-center justify-center p-8">
            <div className="text-gray-500">Carregando...</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Toolbar customizável */}
      {slots.toolbar}

      {/* Controles de Redimensionamento */}
      {showResizeControls && (
        <div className="flex items-center space-x-4 rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="resizableColumns"
              checked={internalResizable}
              onChange={(e) => setInternalResizable(e.target.checked)}
              className="rounded border-gray-300"
            />
            <label htmlFor="resizableColumns" className="text-sm font-medium text-gray-700">
              {mergedLabels.resizableColumns}
            </label>
          </div>

          {internalResizable && (
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">{mergedLabels.resizeMode}</label>
              <select
                value={internalResizeMode}
                onChange={(e) => setInternalResizeMode(e.target.value as "fit" | "expand")}
                className="rounded border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="fit">{mergedLabels.resizeModeFit}</option>
                <option value="expand">{mergedLabels.resizeModeExpand}</option>
              </select>
            </div>
          )}

          <div className="flex-1"></div>

          <div className="text-xs text-gray-500">
            {internalResizeMode === "fit" ?
              mergedLabels.resizeModeDescriptionFit
            : mergedLabels.resizeModeDescriptionExpand}
          </div>
        </div>
      )}

      <div
        className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white"
        onClick={() => {
          setActiveColumnMenu(null);
          setActiveFilterMenu(null);
        }}
      >
        {/* Área de Drop para Agrupamento */}
        {!disableGrouping && (
          <div className="border-b border-gray-200 bg-gray-50 p-2">
            <div className="flex space-x-2">
              {groupByColumns.map((field) => (
                <div key={field} className="flex items-center rounded bg-white p-1 shadow">
                  {columns.find((col) => col.field === field)?.headerName}
                  <button
                    onClick={() => handleGroupByChange(groupByColumns.filter((f) => f !== field))}
                    className="ml-2 text-red-600 hover:text-red-800"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <div
                className="flex-1 p-2 text-start text-gray-500"
                onDrop={(e) => {
                  e.preventDefault();
                  const field = e.dataTransfer.getData("field");
                  if (field && !groupByColumns.includes(field)) {
                    handleGroupByChange([...groupByColumns, field]);
                  }
                }}
                onDragOver={(e) => e.preventDefault()}
              >
                {mergedLabels.dragColumnsToGroup}
              </div>
            </div>
          </div>
        )}

        {/* Controles de Filtros */}
        {!disableColumnFilter && Object.keys(filters)?.length > 0 && (
          <div className="border-b border-gray-200 bg-gray-50 p-3">
            <div className="text-sm text-gray-600">
              {Object.keys(filters).length} {mergedLabels.filtersActive}
              {Object.keys(filters).length > 0 && (
                <span className="ml-2">
                  {Object.entries(filters).map(([field, filter]) => (
                    <span
                      key={field}
                      className="ml-2 inline-flex items-center rounded bg-blue-100 px-2 py-1 text-xs text-blue-800"
                    >
                      {columns.find((col) => col.field === field)?.headerName}: {getOperatorLabel(filter.operator)} "
                      {filter.value}"
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFilter(field);
                        }}
                        className="ml-1 text-blue-600 hover:text-blue-800"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Tabela */}
        <div
          className="overflow-auto"
          style={{
            height: typeof height === "number" ? `${height}px` : height,
            ...(internalResizeMode === "fit" ? { overflowX: "auto" } : {}),
          }}
        >
          <table
            ref={tableRef}
            className={`data-grid w-full ${headerClassName}`}
            style={{
              tableLayout: internalResizeMode === "fit" ? "fixed" : "auto",
              borderCollapse: "separate",
              borderSpacing: 0,
              width: internalResizeMode === "fit" ? "100%" : "auto",
            }}
          >
            <thead className="sticky top-0 bg-gray-50">
              <tr>
                {checkboxSelection && (
                  <th className="w-12 border-b border-r border-gray-200 px-3 py-2" style={{ width: "48px" }}>
                    <input
                      type="checkbox"
                      checked={allSelected}
                      ref={(input) => {
                        if (input) input.indeterminate = someSelected;
                      }}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="rounded border-gray-300"
                      disabled={disableRowSelection}
                    />
                  </th>
                )}
                {columns.map((column, columnIndex) => (
                  <th
                    key={column.field}
                    className="group relative select-none border-b border-r border-gray-200 p-1 text-left text-[0.675rem] font-medium uppercase tracking-wider text-gray-500"
                    style={{
                      width: column.width,
                      minWidth: typeof column.width === "number" ? `${column.width}px` : column.width,
                      maxWidth:
                        internalResizeMode === "fit" ?
                          typeof column.width === "number" ?
                            `${column.width}px`
                          : column.width
                        : "none",
                    }}
                    draggable={!disableGrouping}
                    onDragStart={(e) => e.dataTransfer.setData("field", column.field)}
                  >
                    <div className="flex min-w-0 items-center justify-between">
                      <div
                        className={`flex min-w-0 flex-1 items-center space-x-1 ${
                          column.sortable !== false && !disableColumnSort ?
                            "cursor-pointer rounded px-1 py-1 hover:bg-gray-100"
                          : ""
                        }`}
                        onClick={() => handleSort(column.field)}
                      >
                        <span className="truncate" title={column.headerName}>
                          {column.headerName}
                        </span>
                        {column.sortable !== false && !disableColumnSort && sortField === column.field && (
                          <span className="flex-shrink-0 text-blue-500">{sortDirection === "asc" ? "↑" : "↓"}</span>
                        )}
                        {filters[column.field] && <span className="ml-1 flex-shrink-0 text-blue-500">🔍</span>}
                      </div>

                      {!disableColumnMenu && (
                        <div className="relative flex flex-shrink-0 items-center">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveFilterMenu(null);
                              setActiveColumnMenu(activeColumnMenu === column.field ? null : column.field);
                            }}
                            className="flex items-center justify-center rounded p-1 opacity-0 transition-opacity hover:bg-gray-200 hover:opacity-100 group-hover:opacity-100"
                            title={mergedLabels.columnOptions}
                          >
                            <FilterOutlined className="text-sm text-gray-600" />
                          </button>

                          {/* Menu da coluna */}
                          {activeColumnMenu === column.field && (
                            <div
                              className="absolute right-0 top-full z-50 mt-1 min-w-40 rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {column.sortable !== false && !disableColumnSort && (
                                <>
                                  <button
                                    onClick={() => handleSort(column.field, "asc")}
                                    className="flex w-full items-center space-x-2 px-3 py-2 text-left text-sm hover:bg-gray-100"
                                  >
                                    <span>↑</span>
                                    <span>{mergedLabels.sortAsc}</span>
                                  </button>
                                  <button
                                    onClick={() => handleSort(column.field, "desc")}
                                    className="flex w-full items-center space-x-2 px-3 py-2 text-left text-sm hover:bg-gray-100"
                                  >
                                    <span>↓</span>
                                    <span>{mergedLabels.sortDesc}</span>
                                  </button>
                                  <hr className="my-1" />
                                </>
                              )}

                              {!disableColumnFilter && (
                                <button
                                  onClick={(e) => openFilterMenu(column.field, e)}
                                  className="flex w-full items-center space-x-2 px-3 py-2 text-left text-sm hover:bg-gray-100"
                                >
                                  <span>🔍</span>
                                  <span>{filters[column.field] ? mergedLabels.editFilter : mergedLabels.filter}</span>
                                </button>
                              )}

                              {filters[column.field] && (
                                <button
                                  onClick={() => {
                                    removeFilter(column.field);
                                    setActiveColumnMenu(null);
                                  }}
                                  className="flex w-full items-center space-x-2 px-3 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
                                >
                                  <span>✕</span>
                                  <span>{mergedLabels.removeFilter}</span>
                                </button>
                              )}
                            </div>
                          )}

                          {/* Menu de filtro */}
                          {activeFilterMenu?.field === column?.field && (
                            <div
                              className="absolute -right-3 top-full z-50 mt-1 min-w-[200px] rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-lg"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="space-y-3">
                                <div className="text-sm font-medium text-gray-700">
                                  Filtro: {columns.find((col) => col.field === activeFilterMenu.field)?.headerName}
                                </div>
                                <div>
                                  <label className="mb-1 block text-xs font-medium text-gray-600">
                                    {mergedLabels.filterCondition}
                                  </label>
                                  <select
                                    value={tempFilterOperator}
                                    onChange={(e) => setTempFilterOperator(e.target.value as ColumnFilter["operator"])}
                                    className="w-full rounded border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                  >
                                    {getOperatorOptions(
                                      columns.find((col) => col.field === activeFilterMenu.field)?.type,
                                    ).map((option) => (
                                      <option key={option.value} value={option.value}>
                                        {option.label}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <div>
                                  <label className="mb-1 block text-xs font-medium text-gray-600">
                                    {mergedLabels.filterValue}
                                  </label>
                                  <input
                                    type={
                                      columns.find((col) => col.field === activeFilterMenu.field)?.type === "number" ?
                                        "number"
                                      : "text"
                                    }
                                    value={tempFilterValue}
                                    onChange={(e) => setTempFilterValue(e.target.value)}
                                    placeholder="Digite o valor do filtro"
                                    className="w-full rounded border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter") applyFilter();
                                      else if (e.key === "Escape") setActiveFilterMenu(null);
                                    }}
                                    autoFocus
                                  />
                                </div>
                                <div className="flex items-center justify-between pt-2">
                                  <button
                                    onClick={() => setActiveFilterMenu(null)}
                                    className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
                                  >
                                    {mergedLabels.cancel}
                                  </button>
                                  <div className="space-x-2">
                                    {filters[activeFilterMenu.field] && (
                                      <button
                                        onClick={() => removeFilter(activeFilterMenu.field)}
                                        className="px-3 py-1 text-sm text-red-600 hover:text-red-800"
                                      >
                                        {mergedLabels.clear}
                                      </button>
                                    )}
                                    <button
                                      onClick={applyFilter}
                                      className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
                                    >
                                      {mergedLabels.apply}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      {/* Handle de redimensionamento */}
                      {internalResizable && (
                        <div
                          className="absolute right-0 top-0 z-10 h-full w-px cursor-col-resize bg-gray-200 transition-colors hover:bg-gray-400"
                          onMouseDown={(e) => handleResizeStart(e, columnIndex)}
                          title={mergedLabels.resizeColumn}
                          style={{ transform: "translateX(0.5px)" }}
                        />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {totalItems === 0 ?
                <tr>
                  <td colSpan={columns.length + (checkboxSelection ? 1 : 0)} className="p-8 text-center text-gray-500">
                    {noRowsComponent || "Nenhum dado encontrado"}
                  </td>
                </tr>
              : groupByColumns.length > 0 ?
                renderGroupedRows(groupedData)
              : displayedRows.map((row) => (
                  <tr
                    key={row.id}
                    className={`text-center hover:bg-gray-50 ${typeof rowClassName === "function" ? rowClassName(row) : rowClassName}`}
                    onClick={(e) => onRowClick?.({ row, event: e })}
                    onDoubleClick={(e) => onRowDoubleClick?.({ row, event: e })}
                  >
                    {checkboxSelection && (
                      <td className="w-12 border-r border-gray-100 px-3 py-2" style={{ width: "48px" }}>
                        <input
                          type="checkbox"
                          checked={selectedRows?.has(row.id) || false}
                          onChange={(e) => handleSelectRow(row.id, e.target.checked)}
                          className="rounded border-gray-300"
                          disabled={disableRowSelection}
                        />
                      </td>
                    )}
                    {columns.map((column) => (
                      <td
                        key={column.field}
                        className={`border-r border-gray-100 p-1 text-start text-[.675rem] text-gray-900 ${
                          typeof cellClassName === "function" ?
                            cellClassName({ row, field: column.field, value: getCellValue(row, column) })
                          : cellClassName
                        }`}
                        style={{
                          width: column.width,
                          minWidth: typeof column.width === "number" ? `${column.width}px` : column.width,
                          maxWidth:
                            internalResizeMode === "fit" ?
                              typeof column.width === "number" ?
                                `${column.width}px`
                              : column.width
                            : "none",
                        }}
                        onClick={(e) =>
                          onCellClick?.({ row, field: column.field, value: getCellValue(row, column), event: e })
                        }
                        onDoubleClick={(e) => {
                          onCellDoubleClick?.({ row, field: column.field, value: getCellValue(row, column), event: e });
                          handleCellDoubleClick(row.id, column.field, getCellValue(row, column));
                        }}
                      >
                        {editingCell?.rowId === row.id && editingCell?.field === column.field ?
                          <input
                            type={column.type === "number" ? "number" : "text"}
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            onBlur={() => handleCellEdit(row.id, column.field, editValue)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") handleCellEdit(row.id, column.field, editValue);
                              else if (e.key === "Escape") setEditingCell(null);
                            }}
                            className="w-full rounded border border-blue-500 px-1 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            autoFocus
                          />
                        : column.renderCell ?
                          column.renderCell({ row, value: getCellValue(row, column), field: column.field })
                        : <span
                            className={`block truncate ${column.editable ? "cursor-pointer" : ""}`}
                            title={String(getCellValue(row, column))}
                          >
                            {column.valueFormatter ?
                              column.valueFormatter(getCellValue(row, column))
                            : getCellValue(row, column)}
                          </span>
                        }
                      </td>
                    ))}
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        {/* Paginação - Só renderizada se pagination for true */}
        {hasPagination && (
          <div className="flex h-16 items-center justify-between border-t border-gray-200 bg-white px-4">
            <div className="text-sm text-gray-700">
              {mergedLabels.rowsPerPage} {pageSize} | {mergedLabels.showing} {totalItems} {mergedLabels.of}{" "}
              {rows?.length || 0} {mergedLabels.lines}
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">
                {currentPage * pageSize + 1}-{Math.min((currentPage + 1) * pageSize, totalItems)} {mergedLabels.of}{" "}
                {totalItems}
              </span>
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="rounded border border-gray-300 p-1 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                ‹
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage >= totalPages - 1}
                className="rounded border border-gray-300 p-1 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer customizável */}
      {slots.footer}
    </div>
  );
}
