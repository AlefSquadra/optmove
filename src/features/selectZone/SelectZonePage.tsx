import { useApplicationContext } from "@app/providers/ApplicationProvider/useApplication";
import { SelectZoneService } from "@features/selectZone/services/SelectZoneService";
import { SelectZoneFormSchemaZod, type SelectZoneFormValuesZod } from "@features/selectZone/types/SelectZoneFormZod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { Controller, useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { CustomDropdown, type DropdownOption } from "./CustomDropdown";

import { Button, Field } from "@fluentui/react-components";
import { useEffect } from "react";

const SelectZonePage = () => {
  const { setSelectZoneParams } = useApplicationContext();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,

    setValue,
    formState: { errors },
  } = useForm<SelectZoneFormValuesZod>({
    resolver: zodResolver(SelectZoneFormSchemaZod),
  });

  const { data: zonasData, isFetched: isFetchedZonas } = useQuery({
    queryKey: ["select-zone-profile-planner"],
    queryFn: SelectZoneService.getZonePlanner,
  });

  const { data: perfilData, isFetched: isFetchedPerfil } = useQuery({
    queryKey: ["select-profile-planner"],
    queryFn: SelectZoneService.getProfilePlanner,
  });

  const { data: mesaData, isFetched: isFetchedMesa } = useQuery({
    queryKey: ["select-list-transfer-profile"],
    queryFn: SelectZoneService.getListTransferProfiles,
  });

  const onSubmit = (data: SelectZoneFormValuesZod) => {
    setSelectZoneParams({
      profileZone: data.perfilMesa.id as "1" | "2",
      mesaZone: data.mesa.map((i) => i.id).join(","),
      mesaZoneId: data.mesa.map((i) => i.id).join(","),
    });
    navigate("/home");
  };

  const perfilSelecionado = useWatch({
    control,
    name: "perfilMesa",
  });

  const mesaSelecionada = useWatch({
    control,
    name: "mesa",
  });

  useEffect(() => {
    if (perfilSelecionado) {
      setValue("mesa", []);
      setValue("zona", {} as DropdownOption);
    }
  }, [perfilSelecionado, setValue]);

  useEffect(() => {
    if (mesaSelecionada?.find((t) => t?.name?.toLocaleLowerCase() === "baixada santista") && zonasData) {
      setValue("zona", zonasData);
    }
  }, [mesaSelecionada, setValue, zonasData]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-screen flex-col items-center justify-center gap-4 bg-neutral-50"
    >
      <div className="flex w-full max-w-[600px] flex-col gap-6 rounded border border-neutral-200 bg-white p-8 shadow-sm">
        <h1 className="mb-4 text-center text-2xl font-semibold text-[var(--colorBrandBackground)]">
          Seleção de zonas de controle
        </h1>

        {/* Select PERFIL */}

        <Controller
          name="perfilMesa"
          control={control}
          rules={{ required: "Perfil é obrigatório" }}
          render={({ field }) => (
            <Field label="Perfil" validationMessage={errors.perfilMesa?.message}>
              <CustomDropdown
                value={field.value}
                onOptionSelect={(selected) => {
                  field.onChange(selected as DropdownOption);
                }}
                disabled={!isFetchedPerfil}
                options={perfilData?.map((perfil) => ({ id: perfil?.id, name: perfil?.name })) || []}
                placeholder="Selecione um perfil"
                error={!!errors.perfilMesa}
                className="perfil-dropdown"
              />
            </Field>
          )}
        />

        {/* Select MESA - Multi-seleção com chips */}
        <Controller
          name="mesa"
          control={control}
          rules={{ required: "Mesa é obrigatória" }}
          render={({ field }) => (
            <Field label="Mesa" validationMessage={errors.mesa?.message}>
              <CustomDropdown
                value={field.value || []}
                onOptionSelect={(selected) => {
                  field.onChange(selected as DropdownOption[]);
                }}
                disabled={!isFetchedMesa}
                options={[mesaData!]!.map((mesa) => ({ id: mesa?.id, name: mesa?.name })) || []}
                placeholder="Selecione uma ou mais mesas"
                multiple={true}
                error={!!errors.mesa}
                className="mesa-dropdown"
              />
            </Field>
          )}
        />

        {/* Select ZONA */}
        <Controller
          name="zona"
          control={control}
          rules={{ required: "Zona é obrigatória" }}
          render={({ field }) => (
            <Field label="Zonas selecionadas" validationMessage={errors.zona?.message}>
              <CustomDropdown
                value={field.value}
                onOptionSelect={(selected) => {
                  field.onChange(selected as DropdownOption);
                }}
                disabled={!isFetchedZonas}
                options={[zonasData!]?.map((zona) => ({ id: zona?.id, name: zona?.name })) || []}
                placeholder="Selecione uma zona"
                error={!!errors.zona}
                className="zona-dropdown"
              />
            </Field>
          )}
        />

        <div className="flex justify-end gap-3 border-t border-neutral-200 pt-4">
          <Button appearance="primary" type="submit">
            OK
          </Button>
        </div>
      </div>
    </form>
  );
};

export { SelectZonePage };
