import { z } from "zod";

export const SpecialProfiles = ["VISUALIZADOR", "TESTE", "INTRAJORNADA"];

const optionObjectSchema = z.object({
  id: z.string().min(1),
  name: z.string(),
});

export const SelectZoneFormSchemaZod = z
  .object({
    perfilMesa: optionObjectSchema.refine((val) => !!val?.id, {
      message: "Selecione um perfil para visualização das SBs!",
    }),
    mesa: z.array(optionObjectSchema).default([]), // validado abaixo se for obrigatório
    zona: optionObjectSchema.refine((val) => !!val?.id, {
      message: "Selecione uma Zona de Controle!",
    }),
  })
  .superRefine((data, ctx) => {
    const isPerfilEspecial = SpecialProfiles.includes(data.perfilMesa.id);

    // Se perfil NÃO é especial e não tem mesa -> erro
    if (!isPerfilEspecial && data.mesa?.length === 0) {
      ctx.addIssue({
        path: ["mesa"],
        code: z.ZodIssueCode.custom,
        message: "Selecione uma mesa de controle!",
      });
    }
  });

export type SelectZoneFormValuesZod = z.infer<typeof SelectZoneFormSchemaZod>;
