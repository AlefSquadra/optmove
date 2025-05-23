import React, { useState } from "react";
import { OptMoveIcon } from "../../../ui";
import { OptButton } from "../../../ui/buttons/OptButton";
import { useTableContext } from "./TableContext";
import { TableProvider } from "./TableProvider";

export interface ITableProps {
  children?: React.ReactNode;
}

export interface ITableHeadProps {
  columns: {
    label: string;
    accessor: string;
    sortable?: boolean;
  }[];
}

export interface ITableBodyProps<T = any> {
  data: T[];
  groupBy?: string;
  columnIdName: string;
  renderRow: (row: any, isExpanded: boolean, toggleExpand: () => void) => React.ReactNode;
  renderExpandedContent?: (row: T) => React.ReactNode;
}

type TableComponent = React.FC<ITableProps> & {
  Head: typeof THeadTable;
  Body: typeof TBodyTable;
};

export const THeadTable = ({ columns }: ITableHeadProps) => {
  const { sortState, toggleSort } = useTableContext();

  return (
    <thead className="min-h-[30.94px] bg-gray-light-100 text-xs">
      <tr>
        {columns.map((col) => {
          console.log(sortState);
          const currentSort = sortState.find((s) => s.accessor === col.accessor);

          return (
            <th
              key={col.accessor}
              className="cursor-pointer select-none px-6 py-2"
              onClick={() => col.sortable && toggleSort(col.accessor)}
            >
              <div className="flex items-center gap-1">
                <span>{col.label}</span>
                <span className="flex w-4 justify-center">
                  {col.sortable && currentSort?.accessor === col.accessor ?
                    currentSort.order === "asc" ?
                      <OptMoveIcon name="ArrowUpIcon" height={18} />
                    : <OptMoveIcon name="ArrowDownIcon" height={18} />
                  : null}
                </span>
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export const TBodyTable = <T,>({ data, groupBy, renderRow, renderExpandedContent }: ITableBodyProps<T>) => {
  const { expandedRows, toggleRow, sortState } = useTableContext();
  const [collapsedGroups, setCollapsedGroups] = useState<{ [key: string]: boolean }>({});

  const sortedData = [...data].sort((a, b) => {
    for (const sort of sortState) {
      const aVal = a[sort.accessor];
      const bVal = b[sort.accessor];

      if (aVal == null || bVal == null) continue;

      if (typeof aVal === "number" && typeof bVal === "number") {
        if (aVal < bVal) return sort.order === "asc" ? -1 : 1;
        if (aVal > bVal) return sort.order === "asc" ? 1 : -1;
      } else {
        const aStr = String(aVal).toLowerCase();
        const bStr = String(bVal).toLowerCase();
        if (aStr < bStr) return sort.order === "asc" ? -1 : 1;
        if (aStr > bStr) return sort.order === "asc" ? 1 : -1;
      }
    }
    return 0;
  });

  const groupedData =
    groupBy ?
      sortedData.reduce(
        (acc, item) => {
          const groupKey = item[groupBy];
          if (!acc[groupKey]) acc[groupKey] = [];
          acc[groupKey].push(item);
          return acc;
        },
        {} as Record<string, any[]>,
      )
    : { All: sortedData };

  const handleGroupCollapse = (group: string) => {
    setCollapsedGroups((prevCollapsedGroups) => ({
      ...prevCollapsedGroups,
      [group]: !prevCollapsedGroups[group],
    }));
  };

  return (
    <tbody>
      {Object.entries(groupedData).map(([group, rows]) => (
        <React.Fragment key={group}>
          {groupBy && (
            <tr className="min-h-[30.94px] bg-gray-light-100 transition duration-300 ease-in-out">
              <td colSpan={100} className="px-6 py-2 text-xs font-bold">
                <div className="flex items-center justify-between gap-1">
                  <span>{group}</span>
                  <span className="flex w-4 justify-center">
                    <OptButton onClick={() => handleGroupCollapse(group)}>
                      <OptMoveIcon name={collapsedGroups[group] ? "MinusIcon" : "PlusIcon"} />
                    </OptButton>
                  </span>
                </div>
              </td>
            </tr>
          )}
          {!collapsedGroups[group] &&
            rows.map((row) => (
              <React.Fragment key={row.id}>
                {renderRow(row, expandedRows[(row as any).id], () => toggleRow((row as any).id))}
                {expandedRows[(row as any).id] && (
                  <tr className="transition duration-300 ease-in-out">
                    <td
                      colSpan={100}
                      className="text-gray_light_200 whitespace-nowrap border-y border-l border-gray-light-100 px-6 font-manrope text-13"
                    >
                      {renderExpandedContent ? renderExpandedContent(row) : "Expanded content here..."}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
        </React.Fragment>
      ))}
    </tbody>
  );
};

const TableContainer: TableComponent = Object.assign(
  ({ children }: ITableProps) => {
    return (
      <TableProvider>
        <table className="w-full border-separate border-spacing-y-2 text-left text-sm">{children}</table>
      </TableProvider>
    );
  },
  {
    Head: THeadTable,
    Body: TBodyTable,
  },
);

export { TableContainer as Table };
