import { SearchOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Divider, Form, Space } from "antd";
import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import { OptButton, OptInputControl, OptInputSelectControl, OptTimePickerControl } from "../../../../../lib";
import { OptDatePickerControl } from "../../../../../lib/components/forms/controls/date-picker-control/opt-date-picker-control";
import { IOptModalRefProps, OptModal } from "../../../../../lib/components/modal/opt-modal";
import { OptTable, OptTableColumnsType, OptTableRef } from "../../../../../lib/components/table";
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

const SelectOfficialization = (props: ISelectOfficializationProps) => {
  const optModalOfficializationRef = useRef<IOptModalRefProps>(null);
  const optTableRef = useRef<OptTableRef<DataType>>(null);
  const [form] = Form.useForm();

  const { data, isSuccess, refetch } = useQuery({
    queryKey: ["modalSelectOfficializationGHT"],
    queryFn: async () => {
      return OfficializationService.getSelectOfficializationGHT();
    },
    enabled: false,
  });

  const columns: OptTableColumnsType<DataType> = [
    {
      title: "Trens Oficializados",
      dataIndex: "trainsOfficialization",
      key: "name",
      responsive: ["lg"],
    },
    {
      title: "Usuário",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Data Oficialização",
      dataIndex: "dateOfficialization",
      key: "dateOfficialization",
    },
    {
      title: "Mesa",
      dataIndex: "mesa",
      key: "mesa",
    },
    {
      title: "Linha do tempo",
      dataIndex: "timeline",
      key: "timeline",
    },
    {
      title: "Tipo de Oficialização",
      dataIndex: "officializationType",
      key: "officializationType",
    },
    {
      title: "Versão modelo",
      dataIndex: "versionModel",
      key: "versionModel",
    },
  ];

  useEffect(() => {
    form.setFieldsValue({
      startDatePicker: dayjs("2025-01-01"),
      endDatePicker: dayjs("2025-01-10"),
      Prefix: "",
      line: "1",
      timelineDate: dayjs("2025-01-05"),
      timeLineHours: dayjs("08:00", "HH:mm"),
    });

    optModalOfficializationRef.current?.showModal();
    optTableRef.current?.setEllipsis(true);
  }, []);

  return (
    <>
      <OptModal
        modalTitle="Selecionar Oficializações"
        ref={optModalOfficializationRef}
        footer={() => {
          return (
            <Space className="p-4">
              <OptButton onClick={() => optModalOfficializationRef.current?.closeModal()}>Cancelar</OptButton>
              <OptButton
                className="bg-blue-primary-100 text-white"
                onClick={() => {
                  const hasSelectedRows = optTableRef.current?.getSelectedRows().length;

                  if (!hasSelectedRows) {
                    return alert("Selecione uma plano");
                  }

                  props.setPlanParams(optTableRef.current.getSelectedRows());
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
          <Form
            className="flex flex-col px-4 pt-4"
            form={form}
            onFinish={(_) => {
              refetch();
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
              <OptInputControl label="Prefixo" name="Prefix" />
            </Space>
            <Space align="start">
              <OptInputSelectControl
                label="Tipo"
                name="line"
                options={[
                  { id: "1", name: "OFICIALIZADO" },
                  { id: "2", name: "PUBLICADO" },
                  { id: "2", name: "TODOS" },
                ]}
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
          <Divider className="pb-4" />

          <OptTable<DataType>
            ref={optTableRef}
            className="min-h-[300px] px-4"
            dataSource={data}
            columns={columns}
            showControls={false}
            loading={isSuccess}
            defaultSettings={{
              bordered: true,
              size: "small",
              showFooter: false,
              ellipsis: true,
            }}
          />
        </div>
      </OptModal>
    </>
  );
};

export { SelectOfficialization };
