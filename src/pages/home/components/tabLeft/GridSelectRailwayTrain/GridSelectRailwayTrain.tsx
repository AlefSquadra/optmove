import { SearchOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Form } from "antd";
import { useState } from "react";
import { OptButton, OptInputControl } from "../../../../../lib";
import DataGrid, { IOptDataGridColumn } from "../../../../../lib/components/table/opt-table2";
import { GroupBoxFieldset } from "../../../../../shared/components/GroupBoxFieldset/GroupBoxFieldset";
import { useFTLayout } from "../../../../../shared/layouts/FTLayout";
import { TabWindowHeader } from "../../tabWindowHeader/TabWindowHeader";

interface IGridSelectRailwayTrainProps {}

const COLUMNS: IOptDataGridColumn[] = [
  {
    headerName: "Prefixo",
    field: "prefix",
    width: "auto",
  },
  {
    headerName: "Tipo",
    field: "type",
    width: "auto",
  },
  {
    headerName: "Destino",
    field: "dateOfficialization",
    width: "auto",
  },
];

const GridSelectRailwayTrain = (props: IGridSelectRailwayTrainProps) => {
  const {} = props;
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [form] = Form.useForm();
  const { setSelectedPanelTabBarLeft } = useFTLayout();

  const { data, isSuccess, refetch } = useQuery({
    queryKey: ["gridSelectRailwayTrain"],
    queryFn: async () => {
      return [
        {
          id: 1,
          prefix: "123",
          type: "123",
          dateOfficialization: "123",
        },
      ];
    },
  });

  const stabilizedData = data || [];

  return (
    <div className="box-border flex h-full w-[500px] flex-col">
      <TabWindowHeader
        title={"Trens"}
        className="border"
        onClose={() => {
          setSelectedPanelTabBarLeft((prev) => ({ ...prev, openTabName: "" }));
        }}
      />
      <div className="flex h-full w-auto flex-col gap-4 border p-4">
        <GroupBoxFieldset.Root>
          <GroupBoxFieldset.Legend>Busca</GroupBoxFieldset.Legend>
          <Form form={form} layout="inline" className="p-2 px-4">
            <OptInputControl
              name="name"
              fullWidth={false}
              inputProps={{ style: { width: 100 }, placeholder: "Prefixo", size: "small" }}
            />
            <OptInputControl
              name="name"
              fullWidth={false}
              inputProps={{ style: { width: 100 }, placeholder: "Destino", size: "small" }}
            />

            <Form.Item shouldUpdate>
              {() => (
                <OptButton type="default" htmlType="submit" size="small">
                  <SearchOutlined />
                </OptButton>
              )}
            </Form.Item>
            <Form.Item shouldUpdate>
              {() => (
                <OptButton type="default" htmlType="submit" size="small">
                  Desmarcar todos
                </OptButton>
              )}
            </Form.Item>
          </Form>
        </GroupBoxFieldset.Root>

        <DataGrid
          height={"100%"}
          className="m-auto h-full flex-1"
          rows={stabilizedData}
          showResizeControls={false}
          columns={COLUMNS}
          resizeMode="fit"
        />
      </div>
    </div>
  );
};

export { GridSelectRailwayTrain };
