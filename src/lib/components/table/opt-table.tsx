import type { TableProps } from "antd";
import { Card, Radio, Switch, Table } from "antd";

import { ColumnsType } from "antd/es/table";
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from "react";
import {
  OptTableColumnsType,
  OptTableExpandableConfig,
  OptTablePaginationPosition,
  OptTableProps,
  OptTableRef,
  OptTableRowSelection,
  OptTableSizeType,
} from "./opt-table.types";

const ControlItem: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div style={{ marginBottom: 8, marginRight: 16 }}>
    <span style={{ marginRight: 8, fontWeight: 500 }}>{label}:</span>
    {children}
  </div>
);

const OptTable = forwardRef(<T extends object = any>(props: OptTableProps<T>, ref: React.Ref<OptTableRef<T>>) => {
  const {
    dataSource: initialData = [],
    columns: initialColumns = [],
    onDataChange,
    onSelectionChange,
    showControls = true,
    defaultSettings = {},
    customTitle,
    customFooter,
    ...restProps
  } = props;

  const [data, setDataState] = useState<T[]>(initialData);
  const [columns, setColumnsState] = useState<ColumnsType<T>>(initialColumns);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>([]);

  const [bordered, setBordered] = useState(defaultSettings.bordered ?? false);
  const [loading, setLoading] = useState(defaultSettings.loading ?? false);
  const [size, setSize] = useState<OptTableSizeType>(defaultSettings.size ?? "large");
  const [showTitle, setShowTitle] = useState(defaultSettings.showTitle ?? false);
  const [showHeader, setShowHeader] = useState(defaultSettings.showHeader ?? true);
  const [showFooter, setShowFooter] = useState(defaultSettings.showFooter ?? false);
  const [ellipsis, setEllipsis] = useState(defaultSettings.ellipsis ?? false);
  const [hasRowSelection, setHasRowSelection] = useState(defaultSettings.rowSelection ?? true);
  const [tableLayout, setTableLayout] = useState(defaultSettings.tableLayout ?? "unset");
  const [top, setTop] = useState<OptTablePaginationPosition>(defaultSettings.paginationTop ?? "none");
  const [bottom, setBottom] = useState<OptTablePaginationPosition>(defaultSettings.paginationBottom ?? "bottomRight");
  const [yScroll, setYScroll] = useState(defaultSettings.yScroll ?? false);
  const [xScroll, setXScroll] = useState(defaultSettings.xScroll ?? "unset");

  const updateData = useCallback(
    (newData: T[]) => {
      setDataState(newData);
      onDataChange?.(newData);
    },
    [onDataChange],
  );

  useImperativeHandle(
    ref,
    () => ({
      setData: (newData: T[]) => updateData(newData),
      getData: () => data,
      addRow: (row: T) => updateData([...data, row]),
      removeRow: (key: any) => {
        const newData = data.filter((item: any) => item.key !== key);
        updateData(newData);
      },
      updateRow: (key: any, updates: Partial<T>) => {
        const newData = data.map((item: any) => (item.key === key ? { ...item, ...updates } : item));
        updateData(newData);
      },
      clearData: () => updateData([]),

      getSelectedRows: () => {
        return data.filter((item: any) => selectedRowKeys.includes(item.key));
      },
      getSelectedKeys: () => selectedRowKeys,
      setSelectedKeys: (keys: React.Key[]) => {
        setSelectedRowKeys(keys);
        const selectedRows = data.filter((item: any) => keys.includes(item.key));
        onSelectionChange?.(keys, selectedRows);
      },
      clearSelection: () => {
        setSelectedRowKeys([]);
        onSelectionChange?.([], []);
      },
      selectAll: () => {
        const allKeys = data.map((item: any) => item.key);
        setSelectedRowKeys(allKeys);
        onSelectionChange?.(allKeys, data);
      },

      expandAll: () => {
        const allKeys = data.map((item: any) => item.key);
        setExpandedRowKeys(allKeys);
      },
      collapseAll: () => setExpandedRowKeys([]),
      expandRow: (key: React.Key) => {
        if (!expandedRowKeys.includes(key)) {
          setExpandedRowKeys([...expandedRowKeys, key]);
        }
      },
      collapseRow: (key: React.Key) => {
        setExpandedRowKeys(expandedRowKeys.filter((k) => k !== key));
      },

      setLoading: (isLoading: boolean) => setLoading(isLoading),
      getLoading: () => loading,

      setColumns: (newColumns: OptTableColumnsType<T>) => setColumnsState(newColumns),
      setSize: (newSize: OptTableSizeType) => setSize(newSize),
      setPagination: (pagination: OptTableProps<T>["pagination"]) => {
        return pagination;
      },
      setEllipsis: (isEllipsis: boolean) => setEllipsis(isEllipsis),
      refresh: () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1000);
      },
    }),
    [data, selectedRowKeys, expandedRowKeys, loading, updateData, onSelectionChange],
  );

  const scroll: { x?: number | string; y?: number | string } = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll !== "unset") {
    scroll.x = "100vw";
  }

  const processedColumns = columns.map((item) => ({ ...item, ellipsis }));
  if (xScroll === "fixed" && processedColumns.length > 0) {
    processedColumns[0].fixed = true;
    processedColumns[processedColumns.length - 1].fixed = "right";
  }

  const rowSelection: OptTableRowSelection<T> | undefined =
    hasRowSelection ?
      {
        selectedRowKeys,
        onChange: (keys: React.Key[], rows: T[]) => {
          setSelectedRowKeys(keys);
          onSelectionChange?.(keys, rows);
        },
      }
    : undefined;

  const expandable: OptTableExpandableConfig<T> | undefined =
    restProps.expandable ?
      {
        ...restProps.expandable,
        expandedRowKeys,
        onExpandedRowsChange: (keys) => setExpandedRowKeys(keys as React.Key[]),
      }
    : undefined;

  useEffect(() => {
    setDataState(initialData);
  }, [initialData]);

  const tableProps: OptTableProps<T> = {
    ...restProps,
    bordered,
    loading,
    size,
    expandable,
    title: showTitle ? customTitle || (() => "Título da Tabela") : undefined,
    showHeader,
    footer: showFooter ? customFooter || (() => "Rodapé da Tabela") : undefined,
    rowSelection,
    scroll,
    tableLayout: tableLayout === "unset" ? undefined : (tableLayout as TableProps["tableLayout"]),
    pagination: { position: [top, bottom] },
    columns: processedColumns,
    dataSource: data,
  };

  return (
    <>
      {showControls && (
        <Card style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 0" }}>
            <ControlItem label="Bordered">
              <Switch checked={bordered} onChange={setBordered} />
            </ControlItem>
            <ControlItem label="Loading">
              <Switch checked={loading} onChange={setLoading} />
            </ControlItem>
            <ControlItem label="Title">
              <Switch checked={showTitle} onChange={setShowTitle} />
            </ControlItem>
            <ControlItem label="Column Header">
              <Switch checked={showHeader} onChange={setShowHeader} />
            </ControlItem>
            <ControlItem label="Footer">
              <Switch checked={showFooter} onChange={setShowFooter} />
            </ControlItem>
            <ControlItem label="Row Selection">
              <Switch checked={hasRowSelection} onChange={setHasRowSelection} />
            </ControlItem>
            <ControlItem label="Fixed Header">
              <Switch checked={yScroll} onChange={setYScroll} />
            </ControlItem>
            <ControlItem label="Ellipsis">
              <Switch checked={ellipsis} onChange={setEllipsis} />
            </ControlItem>
            <ControlItem label="Size">
              <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="middle">Middle</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
            </ControlItem>
            <ControlItem label="Table Scroll">
              <Radio.Group value={xScroll} onChange={(e) => setXScroll(e.target.value)}>
                <Radio.Button value="unset">Unset</Radio.Button>
                <Radio.Button value="scroll">Scroll</Radio.Button>
                <Radio.Button value="fixed">Fixed Columns</Radio.Button>
              </Radio.Group>
            </ControlItem>
            <ControlItem label="Table Layout">
              <Radio.Group value={tableLayout} onChange={(e) => setTableLayout(e.target.value)}>
                <Radio.Button value="unset">Unset</Radio.Button>
                <Radio.Button value="fixed">Fixed</Radio.Button>
              </Radio.Group>
            </ControlItem>
            <ControlItem label="Pagination Top">
              <Radio.Group value={top} onChange={(e) => setTop(e.target.value)}>
                <Radio.Button value="topLeft">TopLeft</Radio.Button>
                <Radio.Button value="topCenter">TopCenter</Radio.Button>
                <Radio.Button value="topRight">TopRight</Radio.Button>
                <Radio.Button value="none">None</Radio.Button>
              </Radio.Group>
            </ControlItem>
            <ControlItem label="Pagination Bottom">
              <Radio.Group value={bottom} onChange={(e) => setBottom(e.target.value)}>
                <Radio.Button value="bottomLeft">BottomLeft</Radio.Button>
                <Radio.Button value="bottomCenter">BottomCenter</Radio.Button>
                <Radio.Button value="bottomRight">BottomRight</Radio.Button>
                <Radio.Button value="none">None</Radio.Button>
              </Radio.Group>
            </ControlItem>
          </div>
        </Card>
      )}
      <Table<T> className="custom-table-scrollbar" {...tableProps} scroll={{ y: 240, ...tableProps.scroll }} />
    </>
  );
}) as <T extends object = any>(props: OptTableProps<T> & { ref?: React.Ref<OptTableRef<T>> }) => React.ReactElement;

export { OptTable };
