import {
  Button,
  createTableColumn,
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  TableCellLayout,
  type DataGridProps,
  type TableColumnDefinition,
  type TableRowId,
} from "@fluentui/react-components";
import { ChevronDownRegular, ChevronRightRegular } from "@fluentui/react-icons";
import React from "react";

interface IDataGridTrainMovements {
  id: string;
  trainsOfficialization: string;
  user: string;
  dateOfficialization: string;
  mesa: string;
  timeline: string;
  officializationType: string;
  versionModel: string;
  details?: {
    description?: string;
    status?: string;
    observations?: string;
    attachments?: string[];
    history?: Array<{
      date: string;
      action: string;
      user: string;
    }>;
  };
}

interface IDataGridTrainMovementsGridProps {
  data: IDataGridTrainMovements[];
  handleSelectionChange?: DataGridProps["onSelectionChange"];
}

const DataGridTrainMovements: React.FC<IDataGridTrainMovementsGridProps> = (
  props: IDataGridTrainMovementsGridProps,
) => {
  const { data, handleSelectionChange } = props;
  const refMap = React.useRef<Record<string, HTMLElement | null>>({});
  const [selectedRows, setSelectedRows] = React.useState(new Set<TableRowId>([]));
  const [expandedRows, setExpandedRows] = React.useState(new Set<string>());

  const toggleExpanded = (rowId: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(rowId)) {
      newExpanded.delete(rowId);
    } else {
      newExpanded.add(rowId);
    }
    setExpandedRows(newExpanded);
  };

  const onSelectionChange: DataGridProps["onSelectionChange"] = (_, data) => {
    setSelectedRows(data.selectedItems);
    if (handleSelectionChange) handleSelectionChange(_, data);
  };

  // Criar array de dados expandido incluindo as linhas de detalhes
  const expandedData = React.useMemo(() => {
    const result: (IDataGridTrainMovements & { isDetailRow?: boolean; parentId?: string })[] = [];

    data.forEach((item) => {
      result.push(item);

      // Se a linha está expandida e tem detalhes, adiciona uma linha de detalhes
      if (expandedRows.has(item.id) && item.details) {
        result.push({
          id: `${item.id}-details`,
          isDetailRow: true,
          parentId: item.id,
          trainsOfficialization: "",
          user: "",
          dateOfficialization: "",
          mesa: "",
          timeline: "",
          officializationType: "",
          versionModel: "",
          details: item.details,
        });
      }
    });

    return result;
  }, [data, expandedRows]);

  const columns: TableColumnDefinition<IDataGridTrainMovements & { isDetailRow?: boolean }>[] = [
    createTableColumn<IDataGridTrainMovements & { isDetailRow?: boolean }>({
      columnId: "expand",
      renderHeaderCell: () => {
        return "";
      },
      renderCell: (item) => {
        if (item.isDetailRow) return <TableCellLayout></TableCellLayout>;

        const isExpanded = expandedRows.has(item.id);
        const hasDetails = item.details !== undefined;

        return (
          <TableCellLayout>
            {hasDetails ?
              <Button
                appearance="subtle"
                size="small"
                icon={isExpanded ? <ChevronDownRegular /> : <ChevronRightRegular />}
                onClick={() => toggleExpanded(item.id)}
                aria-label={isExpanded ? "Colapsar linha" : "Expandir linha"}
                style={{ minWidth: "32px", padding: "4px" }}
              />
            : null}
          </TableCellLayout>
        );
      },
    }),
    createTableColumn<IDataGridTrainMovements & { isDetailRow?: boolean }>({
      columnId: "trainsOfficialization",
      compare: (a, b) => {
        if (a.isDetailRow || b.isDetailRow) return 0;
        return a.trainsOfficialization.localeCompare(b.trainsOfficialization);
      },
      renderHeaderCell: () => {
        return "Trens Oficializados";
      },
      renderCell: (item) => {
        if (item.isDetailRow) {
          return (
            <TableCellLayout style={{ gridColumn: "1 / -1", padding: "0" }}>
              <div
                style={{
                  padding: "16px",
                  backgroundColor: "#f8f9fa",
                  border: "1px solid #e1e5e9",
                  borderRadius: "4px",
                  margin: "8px 0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  width: "100%",
                }}
              >
                <div style={{ display: "grid", gap: "12px" }}>
                  {item.details?.description && (
                    <div>
                      <strong>Descrição:</strong> {item.details.description}
                    </div>
                  )}
                  {item.details?.status && (
                    <div>
                      <strong>Status:</strong> {item.details.status}
                    </div>
                  )}
                  {item.details?.observations && (
                    <div>
                      <strong>Observações:</strong> {item.details.observations}
                    </div>
                  )}
                  {item.details?.attachments && item.details.attachments.length > 0 && (
                    <div>
                      <strong>Anexos:</strong>
                      <ul style={{ margin: "4px 0 0 16px" }}>
                        {item.details.attachments.map((attachment, index) => (
                          <li key={index}>{attachment}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {item.details?.history && item.details.history.length > 0 && (
                    <div>
                      <strong>Histórico:</strong>
                      <div style={{ marginLeft: "16px", marginTop: "8px" }}>
                        {item.details.history.map((historyItem, index) => (
                          <div key={index} style={{ marginBottom: "4px" }}>
                            <strong>{historyItem.date}</strong> - {historyItem.action}
                            <em> ({historyItem.user})</em>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TableCellLayout>
          );
        }
        return <TableCellLayout truncate>{item.trainsOfficialization}</TableCellLayout>;
      },
    }),
    createTableColumn<IDataGridTrainMovements & { isDetailRow?: boolean }>({
      columnId: "user",
      compare: (a, b) => {
        if (a.isDetailRow || b.isDetailRow) return 0;
        return a.user.localeCompare(b.user);
      },
      renderHeaderCell: () => {
        return "Usuário";
      },
      renderCell: (item) => {
        if (item.isDetailRow) return <TableCellLayout></TableCellLayout>;
        return <TableCellLayout truncate>{item.user}</TableCellLayout>;
      },
    }),
    createTableColumn<IDataGridTrainMovements & { isDetailRow?: boolean }>({
      columnId: "dateOfficialization",
      renderHeaderCell: () => {
        return "Data Oficialização";
      },
      renderCell: (item) => {
        if (item.isDetailRow) return <TableCellLayout></TableCellLayout>;
        return <TableCellLayout truncate>{item.dateOfficialization}</TableCellLayout>;
      },
    }),
    createTableColumn<IDataGridTrainMovements & { isDetailRow?: boolean }>({
      columnId: "mesa",
      compare: (a, b) => {
        if (a.isDetailRow || b.isDetailRow) return 0;
        return a.mesa.localeCompare(b.mesa);
      },
      renderHeaderCell: () => {
        return "Mesa";
      },
      renderCell: (item) => {
        if (item.isDetailRow) return <TableCellLayout></TableCellLayout>;
        return <TableCellLayout truncate>{item.mesa}</TableCellLayout>;
      },
    }),
    createTableColumn<IDataGridTrainMovements & { isDetailRow?: boolean }>({
      columnId: "timeline",
      compare: (a, b) => {
        if (a.isDetailRow || b.isDetailRow) return 0;
        return a.timeline.localeCompare(b.timeline);
      },
      renderHeaderCell: () => {
        return "Linha do tempo";
      },
      renderCell: (item) => {
        if (item.isDetailRow) return <TableCellLayout></TableCellLayout>;
        return <TableCellLayout truncate>{item.timeline}</TableCellLayout>;
      },
    }),
    createTableColumn<IDataGridTrainMovements & { isDetailRow?: boolean }>({
      columnId: "officializationType",
      compare: (a, b) => {
        if (a.isDetailRow || b.isDetailRow) return 0;
        return a.officializationType.localeCompare(b.officializationType);
      },
      renderHeaderCell: () => {
        return "Tipo de Oficialização";
      },
      renderCell: (item) => {
        if (item.isDetailRow) return <TableCellLayout></TableCellLayout>;
        return <TableCellLayout truncate>{item.officializationType}</TableCellLayout>;
      },
    }),
    createTableColumn<IDataGridTrainMovements & { isDetailRow?: boolean }>({
      columnId: "versionModel",
      compare: (a, b) => {
        if (a.isDetailRow || b.isDetailRow) return 0;
        return a.versionModel.localeCompare(b.versionModel);
      },
      renderHeaderCell: () => {
        return "Modelo de Versão";
      },
      renderCell: (item) => {
        if (item.isDetailRow) return <TableCellLayout></TableCellLayout>;
        return <TableCellLayout truncate>{item.versionModel}</TableCellLayout>;
      },
    }),
  ];

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        items={expandedData}
        columns={columns}
        getRowId={(item) => item.id}
        resizableColumns
        selectedItems={selectedRows}
        onSelectionChange={onSelectionChange}
        resizableColumnsOptions={{
          autoFitColumns: false,
        }}
        columnSizingOptions={{
          expand: { idealWidth: 50, minWidth: 50 },
          trainsOfficialization: { idealWidth: 200, minWidth: 150 },
          user: { idealWidth: 150, minWidth: 120 },
          dateOfficialization: { idealWidth: 160, minWidth: 140 },
          mesa: { idealWidth: 120, minWidth: 100 },
          timeline: { idealWidth: 150, minWidth: 120 },
          officializationType: { idealWidth: 180, minWidth: 150 },
          versionModel: { idealWidth: 150, minWidth: 120 },
        }}
      >
        <DataGridHeader>
          <DataGridRow
            selectionCell={
              {
                //checkboxIndicator: { "aria-label": "Select all rows" },
              }
            }
          >
            {({ renderHeaderCell, columnId }) => (
              <Menu openOnContext>
                <MenuTrigger>
                  <DataGridHeaderCell ref={(el) => (refMap.current[columnId] = el)}>
                    {renderHeaderCell()}
                  </DataGridHeaderCell>
                </MenuTrigger>
                <MenuPopover>
                  <MenuList>
                    <MenuItem>Keyboard Column Resizing</MenuItem>
                  </MenuList>
                </MenuPopover>
              </Menu>
            )}
          </DataGridRow>
        </DataGridHeader>

        <DataGridBody<IDataGridTrainMovements & { isDetailRow?: boolean }>>
          {({ item: rowItem, rowId }) => (
            <DataGridRow<IDataGridTrainMovements & { isDetailRow?: boolean }>
              key={rowId}
              selectionCell={
                rowItem.isDetailRow ? undefined : (
                  {
                    checkboxIndicator: { "aria-label": "Select row" },
                  }
                )
              }
              style={rowItem.isDetailRow ? { backgroundColor: "transparent" } : undefined}
            >
              {({ renderCell }) => <DataGridCell>{renderCell(rowItem)}</DataGridCell>}
            </DataGridRow>
          )}
        </DataGridBody>
      </DataGrid>
    </div>
  );
};

export { DataGridTrainMovements };
