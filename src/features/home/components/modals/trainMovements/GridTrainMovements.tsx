import { ChartDyeing } from "@features/home/components/charts/chartDyeing/ChartDyeing";
import { Box } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineReactTable, type MRT_ColumnDef } from "mantine-react-table";
import { MRT_Localization_PT_BR } from "mantine-react-table/locales/pt-BR/index.cjs";
import "mantine-react-table/styles.css";
import { useMemo } from "react";

const data = [
  {
    sb: "T123",
    type: "Carga",
    startOccupation: "2025-06-04 08:00",
    endOccupation: "2025-06-04 09:30",
    stop: "Estação Central",
    durationPat: "01:30",
    endPat: "2025-06-04 09:45",
    headDepartureDate: "2025-06-04 10:00",
    sbCbtc: "CBTC-01",
    controlZone: "Zona A",
    branch: "Ramal Norte",
    subRows: [
      {
        sb: "T123-A",
        type: "Manobra",
        startOccupation: "2025-06-04 08:15",
        endOccupation: "2025-06-04 08:45",
        stop: "Pátio 1",
        durationPat: "00:30",
        endPat: "2025-06-04 08:50",
        headDepartureDate: "2025-06-04 09:00",
        sbCbtc: "CBTC-01-A",
        controlZone: "Zona A1",
        branch: "Ramal Norte",
        subRows: [],
      },
    ],
  },
  {
    sb: "T456",
    type: "Passageiros",
    startOccupation: "2025-06-04 09:00",
    endOccupation: "2025-06-04 10:15",
    stop: "Estação Sul",
    durationPat: "01:15",
    endPat: "2025-06-04 10:20",
    headDepartureDate: "2025-06-04 10:30",
    sbCbtc: "CBTC-02",
    controlZone: "Zona B",
    branch: "Ramal Sul",
    subRows: [
      {
        sb: "T456-A",
        type: "Manobra",
        startOccupation: "2025-06-04 09:30",
        endOccupation: "2025-06-04 09:50",
        stop: "Pátio 2",
        durationPat: "00:20",
        endPat: "2025-06-04 09:55",
        headDepartureDate: "2025-06-04 10:00",
        sbCbtc: "CBTC-02-A",
        controlZone: "Zona B1",
        branch: "Ramal Sul",
        subRows: [],
      },
      {
        sb: "T456-B",
        type: "Manutenção",
        startOccupation: "2025-06-04 09:55",
        endOccupation: "2025-06-04 10:10",
        stop: "Oficina 3",
        durationPat: "00:15",
        endPat: "2025-06-04 10:12",
        headDepartureDate: "2025-06-04 10:15",
        sbCbtc: "CBTC-02-B",
        controlZone: "Zona B2",
        branch: "Ramal Sul",
        subRows: [],
      },
    ],
  },
];

const Example = () => {
  const columns = useMemo<MRT_ColumnDef<typeof data>[]>(
    () => [
      {
        accessorKey: "sb",
        header: "SB",
      },
      {
        accessorKey: "type",
        header: "Tipo",
      },
      {
        accessorKey: "startOccupation",
        header: "Data Ocupação",
      },
      {
        accessorKey: "endOccupation",
        header: "Fim Ocupação",
      },
      {
        accessorKey: "stop",
        header: "Parada",
      },
      {
        accessorKey: "durationPat",
        header: "Duração PAT",
      },
      {
        accessorKey: "endPat",
        header: "Fim PAT",
      },
      {
        accessorKey: "headDepartureDate",
        header: "Data Saída Cabeça",
      },
      {
        accessorKey: "sbCbtc",
        header: "SB CBTC",
      },
      {
        accessorKey: "controlZone",
        header: "Zona Controle",
      },
      {
        accessorKey: "branch",
        header: "Ramal",
      },
    ],
    [],
  );

  return (
    <Box
      style={{
        width: "100%",
        overflow: "auto",
      }}
    >
      <MantineReactTable
        columns={columns}
        data={data as any}
        enableExpanding
        enableExpandAll={false}
        enableColumnResizing
        columnResizeMode="onEnd"
        selectAllMode="all"
        enableSelectAll
        enableRowSelection={false}
        initialState={{
          density: "xs",
          columnSizing: {
            sb: 50,
            type: 100,
            startOccupation: 50,
            endOccupation: 50,
            stop: 50,
            durationPat: 100,
            endPat: 100,
            headDepartureDate: 100,
            sbCbtc: 100,
            controlZone: 100,
            branch: 100,
          },
        }}
        enableBottomToolbar={false}
        enableTopToolbar={false}
        enablePagination={false}
        enableFilters={false}
        layoutMode="grid"
        localization={MRT_Localization_PT_BR}
        mantineTableProps={{
          style: {
            tableLayout: "fixed",
            width: "100%",
          },
        }}
        mantineTableHeadCellProps={{
          style: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          },
        }}
        mantineTableBodyCellProps={{
          style: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          },
        }}
        renderDetailPanel={() => (
          <Box
            style={{
              display: "grid",
              margin: "auto",
              gridTemplateColumns: "1fr",
              width: "100%",
            }}
          >
            <ChartDyeing />
          </Box>
        )}
      />
    </Box>
  );
};

export default Example;
