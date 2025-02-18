import { builder } from "src/builder";

export const PrematureOptimizationUpdateWithoutOverwrittenLegacies = builder
  .inputRef<any>("PrematureOptimizationUpdateWithoutOverwrittenLegacies")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
    }),
  });
