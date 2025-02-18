import { builder } from "src/builder";

export const ParallelRealityWhereUnique = builder.inputRef<any>("ParallelRealityWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
