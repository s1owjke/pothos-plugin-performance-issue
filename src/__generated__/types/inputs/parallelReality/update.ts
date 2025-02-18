import { builder } from "src/builder";

export const ParallelRealityUpdate = builder.inputRef<any>("ParallelRealityUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
  }),
});
