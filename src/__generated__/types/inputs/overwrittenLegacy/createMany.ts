import { builder } from "src/builder";

export const OverwrittenLegacyCreateMany = builder.inputRef<any>("OverwrittenLegacyCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    artificialPotatoId: t.field({ type: "ID", required: true }),
    prematureOptimizationId: t.field({ type: "ID", required: true }),
  }),
});
