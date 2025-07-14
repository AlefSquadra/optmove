import { z } from "zod";

export const SpecialProfiles = ["VISUALIZADOR", "TESTE", "INTRAJORNADA"] as const;

const optionObjectSchema = z.object({
  id: z.string().min(1, "Seleção obrigatória"),
  name: z.string(),
});

export const SelectZoneFormSchemaZod = z.object({
  perfilMesa: optionObjectSchema.refine((val) => !!val?.id, {
    message: "Selecione um perfil para visualização das SBs!",
  }),
  mesa: optionObjectSchema.refine((val) => !!val.id, {
    message: "Selecione uma mesa de controle!",
  }),
  zona: optionObjectSchema.refine((val) => !!val?.id, {
    message: "Selecione uma Zona de Controle!",
  }),
});

export type SelectZoneFormValuesZod = z.infer<typeof SelectZoneFormSchemaZod>;
