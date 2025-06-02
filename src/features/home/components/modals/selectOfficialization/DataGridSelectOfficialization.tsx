import {
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
import React from "react";

interface ISelectOfficializationData {
  id: string;
  trainsOfficialization: string;
  user: string;
  dateOfficialization: string;
  mesa: string;
  timeline: string;
  officializationType: string;
  versionModel: string;
}

interface ISelectOfficializationDataGridProps {
  data: ISelectOfficializationData[];
  handleSelectionChange?: DataGridProps["onSelectionChange"];
}

const columns: TableColumnDefinition<ISelectOfficializationData>[] = [
  createTableColumn<ISelectOfficializationData>({
    columnId: "trainsOfficialization",
    compare: (a, b) => {
      return a.trainsOfficialization.localeCompare(b.trainsOfficialization);
    },
    renderHeaderCell: () => {
      return "Trens Oficializados";
    },
    renderCell: (item) => {
      return <TableCellLayout truncate>{item.trainsOfficialization}</TableCellLayout>;
    },
  }),
  createTableColumn<ISelectOfficializationData>({
    columnId: "user",
    compare: (a, b) => {
      return a.user.localeCompare(b.user);
    },
    renderHeaderCell: () => {
      return "Usuário";
    },
    renderCell: (item) => {
      return <TableCellLayout truncate>{item.user}</TableCellLayout>;
    },
  }),
  createTableColumn<ISelectOfficializationData>({
    columnId: "dateOfficialization",
    renderHeaderCell: () => {
      return "Data Oficialização";
    },
    renderCell: (item) => {
      return <TableCellLayout truncate>{item.dateOfficialization}</TableCellLayout>;
    },
  }),
  createTableColumn<ISelectOfficializationData>({
    columnId: "mesa",
    compare: (a, b) => {
      return a.mesa.localeCompare(b.mesa);
    },
    renderHeaderCell: () => {
      return "Mesa";
    },
    renderCell: (item) => {
      return <TableCellLayout truncate>{item.mesa}</TableCellLayout>;
    },
  }),
  createTableColumn<ISelectOfficializationData>({
    columnId: "timeline",
    compare: (a, b) => {
      return a.timeline.localeCompare(b.timeline);
    },
    renderHeaderCell: () => {
      return "Linha do tempo";
    },
    renderCell: (item) => {
      return <TableCellLayout truncate>{item.timeline}</TableCellLayout>;
    },
  }),
  createTableColumn<ISelectOfficializationData>({
    columnId: "officializationType",
    compare: (a, b) => {
      return a.officializationType.localeCompare(b.officializationType);
    },
    renderHeaderCell: () => {
      return "Tipo de Oficialização";
    },
    renderCell: (item) => {
      return <TableCellLayout truncate>{item.officializationType}</TableCellLayout>;
    },
  }),
  createTableColumn<ISelectOfficializationData>({
    columnId: "versionModel",
    compare: (a, b) => {
      return a.versionModel.localeCompare(b.versionModel);
    },
    renderHeaderCell: () => {
      return "Modelo de Versão";
    },
    renderCell: (item) => {
      return <TableCellLayout truncate>{item.versionModel}</TableCellLayout>;
    },
  }),
];

const DataGridSelectOfficialization: React.FC<ISelectOfficializationDataGridProps> = (
  props: ISelectOfficializationDataGridProps,
) => {
  const { data, handleSelectionChange } = props;
  const refMap = React.useRef<Record<string, HTMLElement | null>>({});
  const [selectedRows, setSelectedRows] = React.useState(new Set<TableRowId>([]));
  const onSelectionChange: DataGridProps["onSelectionChange"] = (_, data) => {
    setSelectedRows(data.selectedItems);
    if (handleSelectionChange) handleSelectionChange(_, data);
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <DataGrid
        items={data}
        columns={columns}
        sortable
        getRowId={(item) => item.id}
        selectionMode="multiselect"
        resizableColumns
        columnSizingOptions={{
          timeLine: {
            defaultWidth: 200,
            minWidth: 120,
            idealWidth: 180,
          },
        }}
        resizableColumnsOptions={{
          autoFitColumns: true,
        }}
        selectedItems={selectedRows}
        onSelectionChange={onSelectionChange}
      >
        <DataGridHeader>
          <DataGridRow
            selectionCell={{
              checkboxIndicator: { "aria-label": "Select all rows" },
            }}
          >
            {({ renderHeaderCell, columnId }, dataGrid) =>
              dataGrid.resizableColumns ?
                <Menu openOnContext>
                  <MenuTrigger>
                    <DataGridHeaderCell ref={(el) => (refMap.current[columnId] = el)}>
                      {renderHeaderCell()}
                    </DataGridHeaderCell>
                  </MenuTrigger>
                  <MenuPopover>
                    <MenuList>
                      <MenuItem onClick={dataGrid.columnSizing_unstable.enableKeyboardMode(columnId)}>
                        Keyboard Column Resizing
                      </MenuItem>
                    </MenuList>
                  </MenuPopover>
                </Menu>
              : <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
            }
          </DataGridRow>
        </DataGridHeader>
        <DataGridBody<ISelectOfficializationData>>
          {({ item, rowId }) => (
            <DataGridRow<ISelectOfficializationData>
              key={rowId}
              selectionCell={{
                checkboxIndicator: { "aria-label": "Select row" },
              }}
            >
              {({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}
            </DataGridRow>
          )}
        </DataGridBody>
      </DataGrid>
    </div>
  );
};

export { DataGridSelectOfficialization };
export type { ISelectOfficializationData, ISelectOfficializationDataGridProps };
