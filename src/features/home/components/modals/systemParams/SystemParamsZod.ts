import { z } from "zod";

const SimulationParamsSchema = z.object({
  enableOptmoveSpeedCalculation: z.boolean(),
  enableAutomaticOfficialization: z.boolean(),
  enablePartialPlans: z.boolean(),
  intervalBetweenAutomaticPlansInMinutes: z.number().min(1),
  maximumRetryTimeInMinutes: z.number().min(1),
  minimumResolutionForPartialPlanInMinutes: z.number().min(1),
  basePlan: z.string().min(1),
  comparisonPlan: z.string().min(1),
});

const QueueManagementParamsSchema = z.object({
  queue: z.string().min(1),
});

export const FormSystemParamsZodSchema = z.object({
  simulation: SimulationParamsSchema,
  queueManagement: QueueManagementParamsSchema,
});

export type IFormParamsSystemZod = z.infer<typeof FormSystemParamsZodSchema>;
