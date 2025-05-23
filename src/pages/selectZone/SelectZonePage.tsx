import { useQuery } from "@tanstack/react-query";
import { Button, Form, Transfer, message } from "antd";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OptFieldControl, OptInputSelectControl } from "../../lib";
import { SelectZoneService } from "../../services/selectZones/SelectZoneService";
import { useApplicationContext } from "../../store/ApplicationProvider";
import { SpecialProfiles } from "./SelectZoneFormZod";

const SelectZonePage = () => {
  const { setSelectZoneParams } = useApplicationContext();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // Estado para controlar as chaves selecionadas do Transfer
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const { data: zonasData } = useQuery({
    queryKey: ["select-zone-profile-planner"],
    queryFn: SelectZoneService.getZonePlanner,
  });

  const { data: perfilData, isFetched } = useQuery({
    queryKey: ["select-profile-planner"],
    queryFn: SelectZoneService.getProfilePlanner,
  });

  const { data: transferProfileData } = useQuery({
    queryKey: ["select-list-transfer-profile"],
    queryFn: SelectZoneService.getListTransferProfiles,
  });

  // Validação ocorre apenas no submit, não durante interações com o formulário
  const validateForm = (values: any) => {
    const errors: string[] = [];

    // Debug: verificar a estrutura dos valores
    console.log("Valores do formulário:", values);

    // Regra 1: Perfil é obrigatório
    const perfilId = values.perfilMesa?.id || values.perfilMesa?.value || values.perfilMesa;
    if (!perfilId) {
      errors.push("Selecione um perfil para visualização das SBs!");
    }

    // Regra 2: Mesa é obrigatória para perfis comuns
    const isSpecialProfile = SpecialProfiles.includes(perfilId);
    if (!isSpecialProfile && (!values.mesa || values.mesa.length === 0)) {
      errors.push("Selecione uma mesa de controle!");
    }

    // Regra 3: Zona é obrigatória
    const zonaId = values.zona?.id || values.zona?.value || values.zona;
    if (!zonaId) {
      errors.push("Selecione uma Zona de Controle!");
    }

    // Se houver erros, mostrar o primeiro e retornar false
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

    // Extrair o ID do perfil de forma robusta
    const perfilId = values.perfilMesa?.id || values.perfilMesa?.value || values.perfilMesa;

    // Regra 3: Preencher automaticamente mesa para perfis especiais
    let mesaZoneValues = values.mesa?.map((i: any) => i.id) || [];
    if (SpecialProfiles.includes(perfilId) && mesaZoneValues.length === 0) {
      mesaZoneValues = ["AUTOMACAO"];
    }

    // Configura parâmetros e navega para o visualizador
    setSelectZoneParams({
      profileZone: perfilId,
      mesaZone: mesaZoneValues.join(","),
      mesaZoneId: mesaZoneValues.join(","),
    });

    navigate("/home");
  };

  const handleTransferChange = useCallback(
    (newTargetKeys: string[]) => {
      // Atualizar o estado local do Transfer
      setSelectedKeys(newTargetKeys);

      // Converter as chaves selecionadas em objetos completos
      const selectedItems = newTargetKeys.map((key) => {
        const item = transferProfileData?.find((i: any) => i.id === key);
        return { id: key, name: item?.name || "" };
      });

      // Atualizar o formulário
      form.setFieldsValue({ mesa: selectedItems });

      // Limpar erros de validação se houver
      form.setFields([
        {
          name: "mesa",
          errors: [], // Limpar erros
        },
      ]);
    },
    [transferProfileData],
  );

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
        <h1 className="mb-4 text-center text-2xl font-bold">Seleção de zonas de controle</h1>

        <OptInputSelectControl name="zona" label="Zona" options={zonasData || []} required />

        <OptFieldControl name="mesa" label="Mesa" showMessageError={false} required>
          <Transfer
            dataSource={
              transferProfileData?.map((item: any) => ({
                key: item.id,
                title: item.name,
              })) || []
            }
            showSearch={false}
            showSelectAll={false}
            targetKeys={selectedKeys}
            render={(item) => item.title}
            listStyle={{
              width: "45%",
              height: 300,
            }}
            onChange={handleTransferChange}
          />
        </OptFieldControl>

        <div className="flex w-full flex-row items-end gap-4">
          <Button type="primary" htmlType="submit" className="h-[52px]">
            Ok
          </Button>
          {isFetched && <OptInputSelectControl name="perfilMesa" label="Perfil" options={perfilData || []} required />}
        </div>
      </div>
    </Form>
  );
};

export { SelectZonePage };
