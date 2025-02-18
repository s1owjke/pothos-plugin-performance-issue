import { builder } from "src/builder";

export const PrematureOptimizationCreateMany = builder.inputRef<any>("PrematureOptimizationCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
  }),
});
