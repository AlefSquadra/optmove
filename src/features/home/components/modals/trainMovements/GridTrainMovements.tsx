import { ChartDyeing } from "@features/home/components/charts/chartDyeing/ChartDyeing";
import type { TrainMovement } from "@features/home/components/charts/GHTChartD3/GHTChartD3";
import { Box } from "@mantine/core";
import { OptGridTable } from "@shared/components/gridTable/GridTable";
import type { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";

type TrainMovementData = TrainMovement;

interface GridTrainMovementsProps {
  trainMovements?: TrainMovement[];
}

const GridTrainMovements = ({ trainMovements }: GridTrainMovementsProps) => {
  const columns = useMemo<MRT_ColumnDef<TrainMovementData>[]>(
    () => [
      {
        accessorKey: "idFicha",
        header: "SB",
      },
      {
        accessorKey: "segmento",
        header: "Tipo",
      },
      {
        accessorKey: "chegada",
        header: "Data Ocupação",
      },
      {
        accessorKey: "fimOcupacao",
        header: "Fim Ocupação",
      },
      {
        accessorKey: "alias",
        header: "Parada",
      },
      {
        accessorKey: "destino",
        header: "Duração PAT",
      },
      {
        accessorKey: "fimCurso",
        header: "Fim PAT",
      },
      {
        accessorKey: "partida",
        header: "Data Saída Cabeça",
      },
      {
        accessorKey: "id",
        header: "SB CBTC",
      },
      {
        accessorKey: "segmento",
        header: "Zona Controle",
      },
      {
        accessorKey: "linha",
        header: "Ramal",
      },
    ],
    [],
  );
  const tableData = trainMovements || [];

  const processedData = useMemo(() => {
    return tableData.map((item: any, index: number) => {
      const itemId = item.id || `${item.sb || "item"}-${index}`;
      return { ...item, id: itemId };
    });
  }, [tableData]);

  return (
    <div className="h-full w-full">
      <OptGridTable<TrainMovementData>
        columns={columns}
        data={processedData}
        defaultId="id"
        enableExpandAll
        enableRowSelection={false}
        columnResizeMode="onEnd"
        initialState={{
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
        mantineTableContainerProps={{ style: { height: "100%", flex: 1 } }}
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
    </div>
  );
};

export default GridTrainMovements;
