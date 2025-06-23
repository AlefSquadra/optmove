import { useApplicationContext } from "@app/providers/ApplicationProvider/useApplication";
import { OptGridTable } from "@shared/components/gridTable/GridTable";
import type { IOfficializationFormData } from "@shared/types/Officialization.type";
import { DateFormat } from "@shared/utils/DateFormat";
import { type MRT_Cell, type MRT_ColumnDef } from "mantine-react-table";
import { MRT_Localization_PT_BR } from "mantine-react-table/locales/pt-BR/index.cjs";
import { useMemo, useRef } from "react";
import { useFormContext } from "react-hook-form";

export interface ISelectOfficializationDataGrid {
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
  data: ISelectOfficializationDataGrid[];
  handleTimelineClick?: (text: string) => void;
  handleSelectionChange?: (a: ISelectOfficializationDataGrid[]) => void;
  isLoading?: boolean;
}

const DataGridSelectOfficialization = (props: ISelectOfficializationDataGridProps) => {
  const { data = [], isLoading } = props;
  const contentRef = useRef<HTMLDivElement>(null);
  const { setValue, getValues } = useFormContext<IOfficializationFormData>();

  const { selectedOfficialization } = useApplicationContext();

  const columns = useMemo<MRT_ColumnDef<ISelectOfficializationDataGrid>[]>(
    () => [
      {
        accessorKey: "trainsOfficialization",
        header: "Trens oficializados",
      },
      {
        accessorKey: "user",
        header: "Usuário",
      },
      {
        accessorKey: "dateOfficialization",
        header: "Data oficialização",
      },
      {
        accessorKey: "mesa",
        header: "Mesa",
      },
      {
        accessorKey: "timeline",

        Cell: ({ cell }: { cell: MRT_Cell<ISelectOfficializationDataGrid, string> }) => {
          const isSelected = cell.row.getIsSelected();

          return (
            <span
              className="cursor-pointer"
              onClick={() => {
                if (isSelected) {
                  setValue("timelineDatetime", DateFormat.formatToISO(cell?.getValue()));
                }
              }}
            >
              {cell?.getValue()}
            </span>
          );
        },
        header: "Linha do tempo",
      },
      {
        accessorKey: "officializationType",
        header: "Tipo de oficialização",
      },
      {
        accessorKey: "versionModel",
        header: "Modelo de versão",
        enableResizing: false,
      },
    ],
    [],
  );

  return (
    <div className="flex h-full flex-col" ref={contentRef}>
      <OptGridTable
        defaultId="id"
        columns={columns}
        preSelectedItems={selectedOfficialization?.listOfficialization}
        data={data}
        initialState={{
          density: "xs",
          columnSizing: {
            trainsOfficialization: 50,
            user: 50,
            dateOfficialization: 50,
            mesa: 30,
            timeline: 50,
            officializationType: 80,
            versionModel: 20,
          },
        }}
        state={{ isLoading }}
        localization={MRT_Localization_PT_BR}
        onSelectionChange={(row) => {
          console.log(getValues("timelineDatetime"), row);
          if (!getValues("timelineDatetime")) {
            setValue("timelineDatetime", DateFormat.formatToISO(row[0]?.timeline));
          }
          props?.handleSelectionChange?.(row);
        }}
        mantineTableContainerProps={{ style: { height: contentRef.current?.clientHeight + "px", flex: 1 } }}
      />
    </div>
  );
};

export { DataGridSelectOfficialization };
