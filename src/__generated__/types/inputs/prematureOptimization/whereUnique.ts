import { builder } from "src/builder";

export const PrematureOptimizationWhereUnique = builder.inputRef<any>("PrematureOptimizationWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
