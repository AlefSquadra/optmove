import { Button, Text } from "@fluentui/react-components";
import { OptGridTable } from "@shared/components/gridTable/GridTable";
import { WindowModal } from "@shared/components/windowModal/WindowModal";
import dayjs from "dayjs";
import type { MRT_ColumnDef } from "mantine-react-table";
import { useState } from "react";

type TrainDataItem = {
  prefixo: string;
  local: string;
  dataChegada: string;
};

interface IModalSearchTrainChartGhtForTableProps {
  open: boolean;
  onClose: () => void;
  HandleOkChange: (selectedItem: TrainDataItem | null) => void;
  data: TrainDataItem[];
}

const columns: MRT_ColumnDef<TrainDataItem>[] = [
  {
    accessorKey: "prefixo",
    header: "Prefixo",
  },
  {
    accessorKey: "local",
    header: "Local",
  },
  {
    accessorKey: "dataChegada",
    header: "Data de Chegada",
    Cell: ({ cell }) => {
      const rawDate = cell.getValue<string>();
      return dayjs(rawDate).format("DD/MM/YYYY");
    },
  },
];

export const ModalSearchTrainChartGhtForTable = ({
  open,
  onClose,
  HandleOkChange,
  data,
}: IModalSearchTrainChartGhtForTableProps) => {
  const [selectedItem, setSelectedItem] = useState<TrainDataItem | null>(null);

  const handleOkClick = () => {
    if (selectedItem) {
      HandleOkChange(selectedItem);
      onClose();
    } else {
      alert("Por favor, selecione um trem.");
    }
  };

  const handleCancelClick = () => {
    onClose();
  };

  return (
    <WindowModal title="Busca por tabela" initialWidth={"35%"} initialHeight={"50%"} open={open} onClose={onClose}>
      <WindowModal.Header>
        <Text>Os trens abaixo pertencem a tabela pesquisada. Qual deseja pesquisar?</Text>
      </WindowModal.Header>
      <WindowModal.Body>
        <OptGridTable
          columns={columns}
          data={data}
          defaultId="prefixo"
          mantineTableProps={{
            highlightOnHover: true,
          }}
          enableMultiRowSelection={false}
          onSelectionChange={(rows) => {
            if (rows.length > 0) {
              setSelectedItem(rows[0]);
            } else {
              setSelectedItem(null);
            }
          }}
        />
      </WindowModal.Body>
      <WindowModal.Footer>
        <div className="flex justify-end gap-2">
          <Button onClick={handleCancelClick}>Cancelar</Button>
          <Button appearance="primary" onClick={handleOkClick}>
            Ok
          </Button>
        </div>
      </WindowModal.Footer>
    </WindowModal>
  );
};
