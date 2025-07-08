import { useFTLayout } from "@features/home/providers/HomeFTLayoutProvider/useFtLayout";
import { Button, Field, Input } from "@fluentui/react-components";
import { Search20Regular } from "@fluentui/react-icons";
import { OptGridTable } from "@shared/components/gridTable/GridTable";
import { TabWindowHeader } from "@shared/components/tabWindowHeader/tabWindowHeader";
import { useQuery } from "@tanstack/react-query";
import type { MRT_ColumnDef } from "mantine-react-table";
import { MRT_Localization_PT_BR } from "mantine-react-table/locales/pt-BR/index.cjs";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface IRailwayTrainData {
  id: string;
  prefix: string;
  type: string;
  destination: string;
}

interface ISearchFormData {
  prefix: string;
  destination: string;
}

const columns = [
  { accessorKey: "prefix", header: "Prefixo" },
  { accessorKey: "type", header: "Tipo" },
  { accessorKey: "destination", header: "Destino" },
] as MRT_ColumnDef<IRailwayTrainData>[];

const GridSelectRailwayTrain = () => {
  const [selectedRows, setSelectedRows] = useState<IRailwayTrainData[]>([]);
  const { setSelectedPanelTabBarLeft } = useFTLayout();
  const contentRef = useRef<HTMLDivElement>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISearchFormData>({
    defaultValues: { prefix: "", destination: "" },
  });

  const [globalFilter, setGlobalFilter] = useState<string>("");

  const { data } = useQuery({
    queryKey: ["gridSelectRailwayTrain"],
    queryFn: async () => [
      { id: "1", prefix: "123", type: "123", destination: "123" },
      { id: "2", prefix: "prefix1", type: "prefix1type", destination: "destination" },
    ],
  });

  const onSelectionChange = (rows: IRailwayTrainData[]) => {
    setSelectedRows(rows);
  };

  const handleUnselectAll = () => setSelectedRows([]);

  const onSearch = (formData: ISearchFormData) => {
    // Junta os campos do formulário em uma string só para o filtro global
    const filtro = `${formData.prefix ?? ""} ${formData.destination ?? ""}`.trim();
    setGlobalFilter(filtro);
  };

  return (
    <div className="box-border flex h-full w-[500px] flex-col">
      <TabWindowHeader
        title={"Trens"}
        onClose={() => {
          setSelectedPanelTabBarLeft((prev) => ({ ...prev, openTabName: "" }));
        }}
      />
      <div className="flex h-full w-auto flex-col gap-4 border p-4">
        <form onSubmit={handleSubmit(onSearch)} className="flex flex-wrap items-end gap-2">
          <Controller
            name="prefix"
            control={control}
            render={({ field }) => (
              <Field validationMessage={errors.prefix?.message}>
                <Input {...field} placeholder="Prefixo" style={{ width: 100 }} />
              </Field>
            )}
          />

          <Controller
            name="destination"
            control={control}
            render={({ field }) => (
              <Field validationMessage={errors.destination?.message}>
                <Input {...field} placeholder="Destino" style={{ width: 100 }} />
              </Field>
            )}
          />

          <Button type="submit" appearance="primary" icon={<Search20Regular />} />

          <Button type="button" appearance="secondary" onClick={handleUnselectAll}>
            Desmarcar todos
          </Button>
        </form>

        <div className="flex h-full flex-col" ref={contentRef}>
          <OptGridTable
            defaultId="id"
            columns={columns}
            data={data ?? []}
            preSelectedItems={selectedRows}
            onSelectionChange={onSelectionChange}
            localization={MRT_Localization_PT_BR}
            mantineTableContainerProps={{ style: { height: contentRef.current?.clientHeight + "px", flex: 1 } }}
            // O ponto principal:
            state={{ globalFilter }}
            onGlobalFilterChange={setGlobalFilter}
          />
        </div>
      </div>
    </div>
  );
};

export { GridSelectRailwayTrain };
