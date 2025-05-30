import { useQuery } from "@tanstack/react-query";
import { Divider, Space } from "antd";
import { useCallback, useMemo, useRef, useState } from "react";
import { OptButton } from "../../../../../lib";
import { IOptModalRefProps, OptModal } from "../../../../../lib/components/modal/opt-modal";
import DataGrid, { IOptDataGridColumn } from "../../../../../lib/components/table/opt-table2";
import { OfficializationService } from "../../../../../services/officialization/OfficializationService";

interface DataType {
  key: number;
  trainsOfficialization: string;
  user: number;
  dateOfficialization: string;
  mesa?: string;
  timeline?: string;
  officializationType: string;
  versionModel: string;
}

interface ISelectOfficializationProps {
  setPlanParams: React.Dispatch<any>;
  planParams: any;
}

const COLUMNS: IOptDataGridColumn[] = [
  {
    headerName: "Trens Oficializados",
    field: "trainsOfficialization",
    width: "auto",
  },
  {
    headerName: "Usuário",
    field: "user",
    width: "auto",
  },
  {
    headerName: "Data Oficialização",
    field: "dateOfficialization",
    width: "auto",
  },
  {
    headerName: "Mesa",
    field: "mesa",
    width: "auto",
  },
  {
    headerName: "Linha do tempo",
    field: "timeline",
    width: "auto",
  },
  {
    headerName: "Tipo de Oficialização",
    field: "officializationType",
    width: "auto",
  },
  {
    headerName: "Versão modelo",
    field: "versionModel",
    width: "auto",
  },
];

import { SearchOutlined } from "@ant-design/icons";
import { Form } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";
import { OptInputControl, OptInputSelectControl, OptTimePickerControl } from "../../../../../lib";
import { OptDatePickerControl } from "../../../../../lib/components/forms/controls/date-picker-control/opt-date-picker-control";

interface IOfficializationFormProps {
  onSearch: () => void;
}

const OfficializationForm = ({ onSearch }: IOfficializationFormProps) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      startDatePicker: dayjs("2025-01-01"),
      endDatePicker: dayjs("2025-01-10"),
      prefix: "",
      line: { id: "1" },
      timelineDate: dayjs("2025-01-05"),
      timeLineHours: dayjs("08:00", "HH:mm"),
    });
  }, [form]);

  return (
    <Form
      className="flex flex-col px-4 pt-4"
      form={form}
      onFinish={(_) => {
        onSearch();
      }}
    >
      <Space>
        <OptDatePickerControl
          label="Data Inicio"
          name="startDatePicker"
          datePickerProps={{ style: { width: "120px" }, placeholder: "__/__/__" }}
        />
        <OptDatePickerControl
          label="Até"
          name="endDatePicker"
          datePickerProps={{ style: { width: "120px" }, placeholder: "__/__/__" }}
        />
        <OptInputControl isFloating={false} label="Prefixo" name="Prefix" />
      </Space>
      <Space align="start">
        <OptInputSelectControl
          label="Tipo"
          name="line"
          labelKey="name"
          valueKey="id"
          selectProps={{
            placeholder: "Selecione",
            style: { minWidth: "1px" },
            options: [
              { id: "1", name: "OFICIALIZADO" },
              { id: "2", name: "PUBLICADO" },
              { id: "3", name: "TODOS" },
            ],
          }}
        />
        <OptButton className="w-9 p-0">
          <SearchOutlined onClick={() => form.submit()} />
        </OptButton>
        <OptDatePickerControl
          label="Linha do tempo"
          name="timelineDate"
          datePickerProps={{ style: { width: "auto" }, type: "date", placeholder: "__/__/__" }}
        />
        <OptTimePickerControl
          name="timeLineHours"
          timePickerProps={{ style: { width: "auto" }, mode: undefined, placeholder: "__:__" }}
        />
      </Space>
    </Form>
  );
};

const SelectOfficialization = (props: ISelectOfficializationProps) => {
  const optModalOfficializationRef = useRef<IOptModalRefProps>(null);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  const { data, isSuccess, refetch } = useQuery({
    queryKey: ["modalSelectOfficializationGHT"],
    queryFn: async () => {
      return OfficializationService.getSelectOfficializationGHT();
    },
    enabled: false,
  });

  const stabilizedData = useMemo(() => {
    return data || [];
  }, [data]);

  const handleRowEdit = useCallback((id: number, field: string, value: any) => {
    console.log("Edited:", { id, field, value });
  }, []);

  const handleSearch = useCallback(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      <OptModal
        open={false}
        modalTitle="Selecionar Oficializações"
        ref={optModalOfficializationRef}
        footer={() => {
          return (
            <Space className="p-4">
              <OptButton onClick={() => optModalOfficializationRef.current?.closeModal()}>Cancelar</OptButton>
              <OptButton
                className="bg-blue-primary-100 text-white"
                onClick={() => {
                  const hasSelectedRows = selectedRows?.length > 0;

                  if (!hasSelectedRows) {
                    return alert("Selecione uma plano");
                  }

                  props.setPlanParams(selectedRows);
                  optModalOfficializationRef.current?.closeModal();
                }}
              >
                Ok
              </OptButton>
            </Space>
          );
        }}
      >
        <div className="flex flex-col">
          <OfficializationForm onSearch={handleSearch} />
          <Divider className="pb-4" />
          <DataGrid
            className="m-auto w-[98%]"
            rows={stabilizedData}
            showResizeControls={false}
            columns={COLUMNS}
            onRowEdit={handleRowEdit}
            resizeMode="fit"
            onRowSelect={(selectedIds) => setSelectedRows(selectedIds)}
          />
        </div>
      </OptModal>
    </>
  );
};

export { SelectOfficialization };
