import type { IFormParamsSystemZod } from "@features/home/components/modals/systemParams/SystemParamsZod";
import { OptCheckbox, OptCombobox, OptField, OptInput, OptOption, OptText } from "@shared/components/fluentui";
import { Controller, useFormContext } from "react-hook-form";

const basePlanOptOptions = [
  { key: "Oficializado", text: "Oficializado" },
  { key: "PUBLICADO", text: "PUBLICADO" },
  { key: "TODOS", text: "TODOS" },
];

const comparisonPlanOptOptions = [
  { key: "Automático", text: "Automático" },
  { key: "PUBLICADO", text: "PUBLICADO" },
  { key: "TODOS", text: "TODOS" },
];

const TabSimulation = () => {
  const { control, register } = useFormContext<IFormParamsSystemZod>();

  return (
    <>
      <Controller
        name="simulation.enableOptmoveSpeedCalculation"
        control={control}
        render={({ field }) => (
          <OptCheckbox
            checked={field.value}
            onChange={(_, data) => field.onChange(data.checked)}
            label="Cálculo de velocidade OptMove"
          />
        )}
      />

      <OptText size={300} weight="semibold" className="my-4 !block">
        Comparador de planos:
      </OptText>

      <div className="flex w-full flex-1 gap-4">
        <OptField label="Plano base" className="flex-1">
          <Controller
            name="simulation.basePlan"
            control={control}
            render={({ field }) => (
              <OptCombobox
                placeholder="Plano base"
                selectedOptions={[field.value]}
                onOptionSelect={(_, data) => field.onChange(data.optionValue)}
              >
                {basePlanOptOptions.map((option) => (
                  <OptOption key={option.key} value={option.text}>
                    {option.text}
                  </OptOption>
                ))}
              </OptCombobox>
            )}
          />
        </OptField>

        <OptField label="Plano comparação" className="flex-1">
          <Controller
            name="simulation.comparisonPlan"
            control={control}
            render={({ field }) => (
              <OptCombobox
                placeholder="Plano comparação"
                selectedOptions={[field.value]}
                onOptionSelect={(_, data) => field.onChange(data.optionValue)}
              >
                {comparisonPlanOptOptions.map((option) => (
                  <OptOption key={option.key} value={option.text}>
                    {option.text}
                  </OptOption>
                ))}
              </OptCombobox>
            )}
          />
        </OptField>
      </div>

      <div className="mt-4 flex flex-col">
        <Controller
          name="simulation.enableAutomaticOfficialization"
          control={control}
          render={({ field }) => (
            <OptCheckbox
              checked={field.value}
              onChange={(_, data) => field.onChange(data.checked)}
              label="Ativação de oficializações Optmove automático"
            />
          )}
        />
        <Controller
          name="simulation.enablePartialPlans"
          control={control}
          render={({ field }) => (
            <OptCheckbox
              checked={field.value}
              onChange={(_, data) => field.onChange(data.checked)}
              label="Ativação de planos parciais"
            />
          )}
        />

        <OptField>
          <div className="flex items-center gap-2">
            <span className="min-w-[240px]">Tempo entre planos do automático</span>
            <OptInput
              type="number"
              {...register("simulation.intervalBetweenAutomaticPlansInMinutes", { valueAsNumber: true })}
              placeholder="0"
              className="my-2 w-[80px]"
              aria-label="inline"
            />
            <span>minutos</span>
          </div>
        </OptField>

        <OptField>
          <div className="flex items-center gap-2">
            <span className="min-w-[240px]">Tempo máximo de tentativa (timeout)</span>
            <OptInput
              type="number"
              {...register("simulation.maximumRetryTimeInMinutes", { valueAsNumber: true })}
              placeholder="0"
              className="my-2 w-[80px]"
              aria-label="inline"
            />
            <span>minutos</span>
          </div>
        </OptField>

        <OptField>
          <div className="flex items-center gap-2">
            <span className="min-w-[240px]">Plano parcial resolução mínima</span>
            <OptInput
              type="number"
              {...register("simulation.minimumResolutionForPartialPlanInMinutes", { valueAsNumber: true })}
              placeholder="0"
              className="my-2 w-[80px]"
              aria-label="inline"
            />
            <span>minutos</span>
          </div>
        </OptField>
      </div>
    </>
  );
};

export { TabSimulation };
