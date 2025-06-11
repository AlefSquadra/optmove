import type { IFormParamsSystemZod } from "@features/home/components/modals/systemParams/SystemParamsZod";
import { Checkbox, Combobox, Field, Input, Option, Text } from "@fluentui/react-components";
import { Controller, useFormContext } from "react-hook-form";

const basePlanOptions = [
  { key: "Oficializado", text: "Oficializado" },
  { key: "PUBLICADO", text: "PUBLICADO" },
  { key: "TODOS", text: "TODOS" },
];

const comparisonPlanOptions = [
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
          <Checkbox
            checked={field.value}
            onChange={(_, data) => field.onChange(data.checked)}
            label="Cálculo de velocidade OptMove"
          />
        )}
      />

      <Text size={300} weight="semibold" className="my-4 !block">
        Comparador de planos:
      </Text>

      <div className="flex w-full flex-1 gap-4">
        <Field label="Plano base" className="flex-1">
          <Controller
            name="simulation.basePlan"
            control={control}
            render={({ field }) => (
              <Combobox
                placeholder="Plano base"
                selectedOptions={[field.value]}
                onOptionSelect={(_, data) => field.onChange(data.optionValue)}
              >
                {basePlanOptions.map((option) => (
                  <Option key={option.key} value={option.text}>
                    {option.text}
                  </Option>
                ))}
              </Combobox>
            )}
          />
        </Field>

        <Field label="Plano comparação" className="flex-1">
          <Controller
            name="simulation.comparisonPlan"
            control={control}
            render={({ field }) => (
              <Combobox
                placeholder="Plano comparação"
                selectedOptions={[field.value]}
                onOptionSelect={(_, data) => field.onChange(data.optionValue)}
              >
                {comparisonPlanOptions.map((option) => (
                  <Option key={option.key} value={option.text}>
                    {option.text}
                  </Option>
                ))}
              </Combobox>
            )}
          />
        </Field>
      </div>

      <div className="mt-4 flex flex-col">
        <Controller
          name="simulation.enableAutomaticOfficialization"
          control={control}
          render={({ field }) => (
            <Checkbox
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
            <Checkbox
              checked={field.value}
              onChange={(_, data) => field.onChange(data.checked)}
              label="Ativação de planos parciais"
            />
          )}
        />

        <Field>
          <div className="flex items-center gap-2">
            <span className="min-w-[240px]">Tempo entre planos do automático</span>
            <Input
              type="number"
              {...register("simulation.intervalBetweenAutomaticPlansInMinutes", { valueAsNumber: true })}
              placeholder="0"
              className="my-2 w-[80px]"
              aria-label="inline"
            />
            <span>minutos</span>
          </div>
        </Field>

        <Field>
          <div className="flex items-center gap-2">
            <span className="min-w-[240px]">Tempo máximo de tentativa (timeout)</span>
            <Input
              type="number"
              {...register("simulation.maximumRetryTimeInMinutes", { valueAsNumber: true })}
              placeholder="0"
              className="my-2 w-[80px]"
              aria-label="inline"
            />
            <span>minutos</span>
          </div>
        </Field>

        <Field>
          <div className="flex items-center gap-2">
            <span className="min-w-[240px]">Plano parcial resolução mínima</span>
            <Input
              type="number"
              {...register("simulation.minimumResolutionForPartialPlanInMinutes", { valueAsNumber: true })}
              placeholder="0"
              className="my-2 w-[80px]"
              aria-label="inline"
            />
            <span>minutos</span>
          </div>
        </Field>
      </div>
    </>
  );
};

export { TabSimulation };
