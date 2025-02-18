import { builder } from "src/builder";

export const UnfinishedSymphonyCreateMany = builder.inputRef<any>("UnfinishedSymphonyCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    unstableFrequencyId: t.field({ type: "ID", required: false }),
  }),
});
