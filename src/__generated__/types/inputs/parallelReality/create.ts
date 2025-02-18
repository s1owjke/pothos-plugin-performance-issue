import { builder } from "src/builder";

export const ParallelRealityCreate = builder.inputRef<any>("ParallelRealityCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
  }),
});
