import { useApplicationContext } from "@app/providers/ApplicationProvider/useApplication";
import { SelectZoneService } from "@features/selectZone/services/SelectZoneService";
import { SelectZoneFormSchemaZod, type SelectZoneFormValuesZod } from "@features/selectZone/types/SelectZoneFormZod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { Controller, useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { CustomDropdown, type DropdownOption } from "./CustomDropdown";

import { OptButton, OptField } from "@shared/components/fluentui";
import { useEffect } from "react";

const SelectZonePage = () => {
  const { setSelectZoneParams } = useApplicationContext();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SelectZoneFormSchemaZod),
    defaultValues: {
      perfilMesa: { id: "", name: "" },
      mesa: { id: "", name: "" },
      zona: { id: "", name: "" },
    },
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
    navigate("/home");
    setSelectZoneParams({
      profileZone: data.perfilMesa.id as "1" | "2",
      mesaZone: data.mesa.id,
      mesaZoneId: data.zona.id,
    });
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
      setValue("mesa", { id: "", name: "" });
      setValue("zona", { id: "", name: "" });
    }
  }, [perfilSelecionado, setValue]);

  useEffect(() => {
    if (mesaSelecionada.id == "7" && zonasData) {
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
          render={({ field }) => (
            <OptField label="Perfil" validationMessage={errors.perfilMesa?.message}>
              <CustomDropdown
                value={field.value}
                onOptionSelect={(selected) => {
                  field.onChange(selected as DropdownOption);
                }}
                multiple={false}
                disabled={!isFetchedPerfil}
                options={
                  perfilData ? perfilData.map((perfil) => ({ id: perfil?.id || "", name: perfil?.name || "" })) : []
                }
                placeholder="Selecione um perfil"
                error={!!errors.perfilMesa}
                className="perfil-dropdown"
              />
            </OptField>
          )}
        />

        {/* Select MESA - Multi-seleção com chips */}
        <Controller
          name="mesa"
          control={control}
          render={({ field }) => (
            <OptField label="Mesa" validationMessage={errors.mesa?.message}>
              <CustomDropdown
                value={field.value || []}
                onOptionSelect={(selected) => {
                  field.onChange(selected as DropdownOption[]);
                }}
                disabled={!isFetchedMesa}
                options={mesaData ? [{ id: mesaData.id || "", name: mesaData.name || "" }] : []}
                placeholder="Selecione uma ou mais mesas"
                multiple={false}
                error={!!errors.mesa}
                className="mesa-dropdown"
              />
            </OptField>
          )}
        />

        {/* Select ZONA */}
        <Controller
          name="zona"
          control={control}
          render={({ field }) => (
            <OptField label="Zonas selecionadas" validationMessage={errors.zona?.message}>
              <CustomDropdown
                value={field.value}
                onOptionSelect={(selected) => {
                  field.onChange(selected as DropdownOption);
                }}
                disabled={!isFetchedZonas}
                options={zonasData ? [{ id: zonasData.id || "", name: zonasData.name || "" }] : []}
                placeholder="Selecione uma zona"
                error={!!errors.zona}
                className="zona-dropdown"
              />
            </OptField>
          )}
        />

        <div className="flex justify-end gap-3 border-t border-neutral-200 pt-4">
          <OptButton appearance="primary" type="submit">
            OK
          </OptButton>
        </div>
      </div>
    </form>
  );
};

export { SelectZonePage };
