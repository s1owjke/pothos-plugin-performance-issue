import { builder } from "src/builder";

export const PrematureOptimizationCreateWithoutOverwrittenLegacies = builder
  .inputRef<any>("PrematureOptimizationCreateWithoutOverwrittenLegacies")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
    }),
  });
