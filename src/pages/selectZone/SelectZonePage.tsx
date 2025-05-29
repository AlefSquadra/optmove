import { CloseOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, message, Space, Tag } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OptInputSelectControl } from "../../lib";
import { SelectZoneService } from "../../services/selectZones/SelectZoneService";
import { useApplicationContext } from "../../store/ApplicationProvider";
import { SpecialProfiles } from "./SelectZoneFormZod";

const SelectZonePage = () => {
  const { setSelectZoneParams } = useApplicationContext();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const { data: zonasData } = useQuery({
    queryKey: ["select-zone-profile-planner"],
    queryFn: SelectZoneService.getZonePlanner,
  });

  const { data: perfilData, isFetched } = useQuery({
    queryKey: ["select-profile-planner"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return SelectZoneService.getProfilePlanner();
    },
  });

  const { data: transferProfileData } = useQuery({
    queryKey: ["select-list-transfer-profile"],
    queryFn: SelectZoneService.getListTransferProfiles,
  });

  const validateForm = (values: any) => {
    const errors: string[] = [];

    console.log("Valores do formulário:", values);

    const perfilId = values.perfilMesa?.id || values.perfilMesa?.value || values.perfilMesa;
    if (!perfilId) {
      errors.push("Selecione um perfil para visualização das SBs!");
    }

    const isSpecialProfile = SpecialProfiles.includes(perfilId);
    if (!isSpecialProfile && (!values.mesa || values.mesa.length === 0)) {
      errors.push("Selecione uma mesa de controle!");
    }

    const zonaId = values.zona?.id || values.zona?.value || values.zona;
    if (!zonaId) {
      errors.push("Selecione uma Zona de Controle!");
    }

    if (errors.length > 0) {
      message.error(errors[0]);
      return false;
    }

    return true;
  };

  const onFinish = (values: any) => {
    if (!validateForm(values)) {
      return;
    }

    const perfilId = values.perfilMesa?.id || values.perfilMesa?.value || values.perfilMesa;

    let mesaZoneValues = values.mesa?.map((i: any) => i.id) || [];
    if (SpecialProfiles.includes(perfilId) && mesaZoneValues.length === 0) {
      mesaZoneValues = ["AUTOMACAO"];
    }

    setSelectZoneParams({
      profileZone: perfilId,
      mesaZone: mesaZoneValues.join(","),
      mesaZoneId: mesaZoneValues.join(","),
    });

    navigate("/home");
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      validateTrigger={["onSubmit"]}
      requiredMark={(label, { required }) => (required ? `${label} *` : label)}
      initialValues={{
        perfilMesa: null,
        mesa: [],
        zona: null,
      }}
      className="flex h-screen flex-col items-center justify-center gap-4 bg-gray-100"
    >
      <div className="flex w-full max-w-[600px] flex-col gap-4 rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-center text-2xl font-bold text-primary-color">Seleção de zonas de controle</h1>

        <OptInputSelectControl
          name="perfilMesa"
          label="Perfil"
          valueKey="id"
          labelKey="name"
          selectProps={{ placeholder: "Selecione um perfil", options: perfilData || [] }}
          required
        />

        <OptInputSelectControl
          name="zona"
          label="Zona"
          selectProps={{
            placeholder: "Selecione uma zona",
            options: zonasData?.map((zone) => ({ label: zone?.name, value: zone?.id })) || [],
          }}
          required
        />

        <OptInputSelectControl
          selectProps={{
            placeholder: "Selecione uma mesa",
            loading: !isFetched,
            options: transferProfileData?.map((item: any) => ({
              label: item.name,
              value: item.id,
              desc: item.name,
            })),
            mode: "multiple",
            tagRender: (props) => {
              const { label, closable, onClose, ...rest } = props;
              const { isMaxTag, ...safeRest } = rest;
              return (
                <Tag
                  {...safeRest}
                  className="!rounded-xl border-none bg-[#007ebf] text-white shadow-none"
                  closeIcon={<CloseOutlined style={{ color: "#fff" }} />}
                  onClose={onClose}
                  closable={closable}
                >
                  {label}
                </Tag>
              );
            },
            optionRender: (option) => <Space>{option.data.desc}</Space>,
          }}
          name="mesa"
          label="Mesa"
          required
        />

        <div className="flex justify-end gap-4">
          <Button type="default">Cancelar</Button>
          <Button type="primary" htmlType="submit">
            Ok
          </Button>
        </div>
      </div>
    </Form>
  );
};

export { SelectZonePage };
