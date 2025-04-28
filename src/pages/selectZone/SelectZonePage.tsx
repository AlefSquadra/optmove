import { zodResolver } from "@hookform/resolvers/zod";
import { Button, FieldControl, InputSelect, Transfer, TransferItem } from "@optmove/design-system";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SelectZoneService } from "../../services/selectZones/SelectZoneService";
import { useApplicationContext } from "../../store/ApplicationProvider";
import { SelectZoneFormSchemaZod, SelectZoneFormValuesZod, SpecialProfiles } from "./SelectZoneFormZod";

const SelectZonePage = () => {
  const { setSelectZoneParams } = useApplicationContext();
  const { control, handleSubmit, setValue, watch } = useForm<SelectZoneFormValuesZod>({
    resolver: zodResolver(SelectZoneFormSchemaZod),
    defaultValues: {
      perfilMesa: { id: "", name: "" },
      mesa: [],
      zona: { id: "", name: "" },
    },
  });
  const navigate = useNavigate();

  const { data: zonasData } = useQuery({
    queryKey: ["select-zone-profile-planner"],
    queryFn: SelectZoneService.getZonePlanner,
  });

  const { data: perfilData } = useQuery({
    queryKey: ["select-profile-planner"],
    queryFn: SelectZoneService.getProfilePlanner,
  });

  const { data: transferProfileData } = useQuery({
    queryKey: ["select-list-transfer-profile"],
    queryFn: SelectZoneService.getListTransferProfiles,
  });

  const perfilSelecionado = watch("perfilMesa");

  useEffect(() => {
    if (SpecialProfiles.includes(perfilSelecionado.id)) {
      setValue("mesa", [{ id: "AUTOMACAO", name: "AUTOMACAO" }]);
    }
  }, [perfilSelecionado, setValue]);

  const onSubmit = (data: SelectZoneFormValuesZod) => {
    setSelectZoneParams({
      profileZone: data.perfilMesa.id,
      mesaZone: data.mesa.map((i) => i.id).join(","),
      mesaZoneId: data.mesa.map((i) => i.id).join(","),
    });
    navigate("home");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-screen flex-col items-center justify-center gap-4 bg-gray-100"
    >
      <div className="flex w-full max-w-[600px] flex-col gap-4 rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-center text-2xl font-bold">Seleção de zonas de controle</h1>

        <InputSelect name="zona" control={control} required label="Zona" options={zonasData} />

        <FieldControl
          control={control}
          name="mesa"
          label="Mesa"
          showMessageError
          render={({ field }) => (
            <Transfer.Root
              dataSource={transferProfileData?.map((i) => ({ key: i.id, title: i.name })) || []}
              targetKeys={
                ((field.value as any[])?.map((i: any) => ({
                  key: i.id,
                  title: i.name,
                })) as TransferItem[]) ?? []
              }
              onChange={(items: TransferItem[]) => field.onChange(items.map((i) => ({ id: i.key, name: i.title })))}
            >
              <div className="flex w-full flex-row items-center gap-4">
                <Transfer.List direction="left" className="w-[100%]" />
                <Transfer.Actions />
                <Transfer.List direction="right" className="w-[100%]" />
              </div>
            </Transfer.Root>
          )}
        />

        <div className="flex w-full flex-row items-end gap-4">
          <Button className="h-[52px]" type="submit">
            Ok
          </Button>

          <InputSelect name="perfilMesa" control={control} required label="Perfil" options={perfilData} />
        </div>
      </div>
    </form>
  );
};

export { SelectZonePage };
