import type { IPrioridadeParametrizada } from "@features/home/services/PriorizarDestinoService";
import { PriorizarDestinoService } from "@features/home/services/PriorizarDestinoService";
import { OptButton, OptCheckbox, OptDropdown, OptOption } from "@shared/components/fluentui";
import { OptGridTable } from "@shared/components/gridTable/GridTable";
import { WindowModal } from "@shared/components/windowModal/WindowModal";
import { useMutation, useQuery } from "@tanstack/react-query";
import type { MRT_ColumnDef, MRT_RowSelectionState } from "mantine-react-table";
import { MRT_Localization_PT_BR } from "mantine-react-table/locales/pt-BR/index.cjs";
import React, { useEffect, useMemo, useState } from "react";

/** Achata recursivamente arrays de qualquer profundidade */
const flattenData = (arr: any[]): IPrioridadeParametrizada[] =>
  arr.reduce<IPrioridadeParametrizada[]>((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(flattenData(item));
    } else {
      return acc.concat(item as IPrioridadeParametrizada);
    }
  }, []);

/* -------------------------------------------------------------------------- */
/* Typings                                                                     */
/* -------------------------------------------------------------------------- */

interface IPriorizarDestinoModalProps {
  open: boolean;
  onClose: () => void;
}

/* -------------------------------------------------------------------------- */
/* Component                                                                   */
/* -------------------------------------------------------------------------- */

export const PriorizarDestinoModal: React.FC<IPriorizarDestinoModalProps> = ({ open, onClose }) => {
  /* Queries */
  const { data: patios = [] } = useQuery({
    queryKey: ["patios"],
    queryFn: PriorizarDestinoService.getPatios,
  });

  // idem para produtos e terminais
  const { data: produtos = [] } = useQuery({
    queryKey: ["produtos"],
    queryFn: PriorizarDestinoService.getProdutos,
  });
  const { data: terminais = [] } = useQuery({
    queryKey: ["terminais"],
    queryFn: PriorizarDestinoService.getTerminais,
  });

  const [ordered, setOrdered] = useState(false);
  const { data: prioridadesRaw = [], refetch: refetchPrioridades } = useQuery({
    queryKey: ["prioridades", ordered],
    queryFn: () => PriorizarDestinoService.getPrioridades(ordered),
  });

  const [gridData, setGridData] = useState<IPrioridadeParametrizada[]>([]);
  useEffect(() => {
    // achata antes de setar
    setGridData(flattenData(prioridadesRaw));
  }, [prioridadesRaw]);

  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  /* Mutations */
  const refreshMemoryMutation = useMutation({
    mutationFn: PriorizarDestinoService.refreshPrioridadesMemory,
    onSuccess: () => refetchPrioridades(),
  });
  const refreshDBMutation = useMutation({
    mutationFn: PriorizarDestinoService.refreshPrioridadesDB,
    onSuccess: () => refetchPrioridades(),
  });
  const saveMutation = useMutation({
    mutationFn: (items: IPrioridadeParametrizada[]) => PriorizarDestinoService.savePrioridades(items),
    onSuccess: () => onClose(),
  });

  /* Helper para editar in-place */
  const updateMyData = (rowIndex: number, columnId: keyof IPrioridadeParametrizada, value: unknown) => {
    setGridData((old) => old.map((row, idx) => (idx === rowIndex ? { ...row, [columnId]: value } : row)));
  };

  /* Columns com dropdowns */
  const columns = useMemo<MRT_ColumnDef<IPrioridadeParametrizada>[]>(
    () => [
      {
        accessorKey: "segmento",
        header: "Pátio",
        enableEditing: true,
        editComponent: ({ cell, column, row, table }) => (
          <OptDropdown
            placeholder="Selecione"
            value={cell.getValue() ?? ""}
            onOptionSelect={(_, data) =>
              (table.options.meta as any).updateMyData(
                row.index,
                column.id as keyof IPrioridadeParametrizada,
                data.optionValue,
              )
            }
          >
            {patios.map((p) => (
              <OptOption key={p} value={p} text={p}>
                {p}
              </OptOption>
            ))}
          </OptDropdown>
        ),
      },
      {
        accessorKey: "tipoMovimento",
        header: "Origem/Destino",
        enableEditing: true,
        editComponent: ({ cell, column, row, table }) => (
          <OptDropdown
            value={cell.getValue() ?? ""}
            onOptionSelect={(_, data) =>
              (table.options.meta as any).updateMyData(
                row.index,
                column.id as keyof IPrioridadeParametrizada,
                data.optionValue,
              )
            }
          >
            <OptOption value="" text=" " />
            <OptOption value="Destino" text="Destino" />
            <OptOption value="Origem" text="Origem" />
          </OptDropdown>
        ),
      },
      {
        accessorKey: "lotacao",
        header: "Lotação",
        enableEditing: true,
        editComponent: ({ cell, column, row, table }) => (
          <OptDropdown
            value={cell.getValue() ?? ""}
            onOptionSelect={(_, data) =>
              (table.options.meta as any).updateMyData(
                row.index,
                column.id as keyof IPrioridadeParametrizada,
                data.optionValue,
              )
            }
          >
            <OptOption value="" text=" " />
            <OptOption value="Carregado" text="Carregado" />
            <OptOption value="Vazio" text="Vazio" />
          </OptDropdown>
        ),
      },
      {
        accessorKey: "produto",
        header: "Produto",
        enableEditing: true,
        editComponent: ({ cell, column, row, table }) => (
          <OptDropdown
            value={cell.getValue() ?? ""}
            onOptionSelect={(_, data) =>
              (table.options.meta as any).updateMyData(
                row.index,
                column.id as keyof IPrioridadeParametrizada,
                data.optionValue,
              )
            }
          >
            {produtos.map((p) => (
              <OptOption key={p} value={p} text={p}>
                {p}
              </OptOption>
            ))}
          </OptDropdown>
        ),
      },
      {
        accessorKey: "terminal",
        header: "Terminal",
        enableEditing: true,
        editComponent: ({ cell, column, row, table }) => (
          <OptDropdown
            value={cell.getValue() ?? ""}
            onOptionSelect={(_, data) =>
              (table.options.meta as any).updateMyData(
                row.index,
                column.id as keyof IPrioridadeParametrizada,
                data.optionValue,
              )
            }
          >
            {terminais.map((t) => (
              <OptOption key={t} value={t} text={t}>
                {t}
              </OptOption>
            ))}
          </OptDropdown>
        ),
      },
    ],
    [patios, produtos, terminais],
  );

  return (
    <WindowModal title="Priorizar Circulação" initialWidth="60%" initialHeight="80%" open={open} onClose={onClose}>
      {/* Toolbar */}
      <WindowModal.Header>
        <div className="flex items-center gap-2 p-2">
          <OptButton
            onClick={() =>
              setGridData((old) => [
                ...old,
                {
                  id: String(Date.now()),
                  segmento: "",
                  tipoMovimento: "",
                  lotacao: "",
                  produto: "",
                  terminal: "",
                },
              ])
            }
          >
            Adicionar
          </OptButton>
          <OptButton
            onClick={() => {
              const ids = Object.keys(rowSelection);
              setGridData((old) => old.filter((r) => !ids.includes(r.id)));
              setRowSelection({});
            }}
          >
            Remover
          </OptButton>
          <OptButton onClick={() => refreshMemoryMutation.mutate()}>Recarregar Memória</OptButton>
          <OptButton onClick={() => refreshDBMutation.mutate()}>Recarregar BD</OptButton>
          <OptCheckbox label="Itens Ordenados" checked={ordered} onChange={(_, d) => setOrdered(d.checked === true)} />
        </div>
      </WindowModal.Header>

      {/* Grid com inline cell editing */}
      <WindowModal.Body>
        <OptGridTable<IPrioridadeParametrizada>
          defaultId="id"
          data={gridData}
          columns={columns}
          enableEditing
          editDisplayMode="cell"
          mantineEditTextInputProps={({ cell, column, table }) => ({
            onBlur: (e) => {
              (table.options.meta as any).updateMyData(
                cell.row.index,
                column.id as keyof IPrioridadeParametrizada,
                (e.target as HTMLInputElement).value,
              );
              table.setEditingCell(null);
            },
            onKeyDown: (e) => {
              if (e.key === "Enter") {
                (e.currentTarget as HTMLInputElement).blur();
              }
            },
          })}
          mantineTableContainerProps={{ style: { height: "100%" } }}
          localization={MRT_Localization_PT_BR}
          meta={{ updateMyData }}
          onRowSelectionChange={setRowSelection}
          state={{ rowSelection }}
        />
      </WindowModal.Body>

      {/* Footer */}
      <WindowModal.Footer>
        <div className="flex justify-end gap-2 p-2">
          <OptButton onClick={onClose}>Cancelar</OptButton>
          <OptButton
            appearance="primary"
            disabled={saveMutation.isPending}
            onClick={() =>
              // achata antes de enviar
              saveMutation.mutate(flattenData(gridData))
            }
          >
            {saveMutation.isPending ? "Salvando..." : "Ok"}
          </OptButton>
        </div>
      </WindowModal.Footer>
    </WindowModal>
  );
};
