import { builder } from "src/builder";

export const ParallelRealityCreateMany = builder.inputRef<any>("ParallelRealityCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
  }),
});
