import { z } from "zod";

export const SpecialProfiles = ["VISUALIZADOR", "TESTE", "INTRAJORNADA"] as const;

const optionObjectSchema = z.object({
  id: z.string().min(1),
  name: z.string(),
});

export const SelectZoneFormSchemaZod = z
  .object({
    perfilMesa: optionObjectSchema.refine((val) => !!val?.id, {
      message: "Selecione um perfil para visualização das SBs!",
    }),
    mesa: z.array(optionObjectSchema).pipe(z.preprocess((val) => val ?? [], z.array(optionObjectSchema))), // <- solução definitiva
    zona: optionObjectSchema.refine((val) => !!val?.id, {
      message: "Selecione uma Zona de Controle!",
    }),
  })
  .superRefine((data, ctx) => {
    const isPerfilEspecial = SpecialProfiles.includes(data.perfilMesa.id as "VISUALIZADOR" | "TESTE" | "INTRAJORNADA");

    if (!isPerfilEspecial && data.mesa.length === 0) {
      ctx.addIssue({
        path: ["mesa"],
        code: z.ZodIssueCode.custom,
        message: "Selecione uma mesa de controle!",
      });
    }
  });

export type SelectZoneFormValuesZod = z.infer<typeof SelectZoneFormSchemaZod>;
